import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInWithGoogle, signUpWithEmail, signInWithEmail, signOut } from '../lib/authService.cjs';
import { auth } from '../lib/firebase.cjs';
import { onAuthStateChanged } from 'firebase/auth';


const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
