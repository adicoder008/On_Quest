import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  signInWithPopup, 
  GoogleAuthProvider,
  PhoneAuthProvider,
  signInWithPhoneNumber, 
  RecaptchaVerifier
} from 'firebase/auth';
import { auth, db } from './firebase.cjs';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

const loadReCaptchaScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Call this function before initializing the reCAPTCHA verifier
loadReCaptchaScript()
  .then(() => {
    console.log('reCAPTCHA script loaded');
    // Now you can safely initialize the reCAPTCHA verifier
    setupRecaptcha('recaptcha-container');
  })
  .catch((error) => {
    console.error('Failed to load reCAPTCHA script:', error);
  });

// Initialize recaptcha verifier - FIXED VERSION
const setupRecaptcha = (containerId) => {
  try {
    // First, check if we already have a verifier and clean it up
    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      } catch (e) {
        console.warn("Failed to clear existing reCAPTCHA", e);
      }
    }
    
    // Make sure the element exists in the DOM
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with ID '${containerId}' not found`);
    }
    
    // Create a new reCAPTCHA verifier - IMPORTANT: Pass auth as the first parameter
    const verifier = new RecaptchaVerifier(auth, containerId, {
      size: 'invisible',
      callback: (response) => {
        console.log("reCAPTCHA verified");
      },
      'expired-callback': () => {
        console.log("reCAPTCHA expired");
      }
    });
    
    window.recaptchaVerifier = verifier;
    return verifier;
  } catch (error) {
    console.error("Error setting up reCAPTCHA:", error);
    throw error;
  }
};
// Email signup
const signUpWithEmail = async (email, password, displayName) => {
  try {
    // Create user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update profile
    await updateProfile(user, { displayName });
    
    // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      displayName,
      email,
      authProvider: "email",
      createdAt: serverTimestamp()
    });
    
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Email signin
const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// Google signin/signup
const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if user exists in database
    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    // If user doesn't exist, create a new document
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        authProvider: "google",
        createdAt: serverTimestamp()
      });
    }
    
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

// Phone number - send verification code - FIXED VERSION
const sendPhoneVerificationCode = async (phoneNumber, recaptchaContainerId) => {
  try {
    // Setup reCAPTCHA first
    const appVerifier = setupRecaptcha(recaptchaContainerId);
    console.log("reCAPTCHA verifier setup complete");
    
    // Format phone number if needed
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    console.log("Sending verification to:", formattedPhoneNumber);
    
    // Send the verification code
    const confirmationResult = await signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier);
    window.confirmationResult = confirmationResult;
    return confirmationResult;
  } catch (error) {
    console.error("Error sending verification code:", error);
    throw error;
  }
};

// Phone number - verify code and sign in
const verifyPhoneCode = async (verificationCode, displayName = null) => {
  try {
    if (!window.confirmationResult) {
      throw new Error("No verification was sent. Please request a verification code first.");
    }
    
    const confirmationResult = window.confirmationResult;
    const userCredential = await confirmationResult.confirm(verificationCode);
    const user = userCredential.user;
    
    // If displayName is provided (for new users), update the profile
    if (displayName && !user.displayName) {
      await updateProfile(user, { displayName });
    }
    
    // Check if user exists in database
    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    // If user doesn't exist, create a new document
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        displayName: displayName || `User${user.uid.substring(0, 5)}`,
        phoneNumber: user.phoneNumber,
        authProvider: "phone",
        createdAt: serverTimestamp()
      });
    }
    
    return user;
  } catch (error) {
    console.error("Error verifying code:", error);
    throw error;
  }
};

// Sign out
const signOut = async () => {
  try {
    await auth.signOut();
    // Clear reCAPTCHA if it exists
    if (window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      } catch (e) {
        console.warn("Failed to clear reCAPTCHA on sign out", e);
      }
    }
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

// Get current user from Firestore
const getCurrentUserData = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return null;
    
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      return { uid: user.uid, ...userDoc.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};

export {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  sendPhoneVerificationCode,
  verifyPhoneCode,
  signOut,
  getCurrentUserData,
  loadReCaptchaScript
};