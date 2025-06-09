import React, { useRef, useState } from 'react';
import { User, Mountain, Crown, DollarSign, Camera } from 'lucide-react';

const ThreeStepSignup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        phoneNumber: '',
        travelerType: '',
        destinations: [],
        travelBio: '',
        profilePicture: null
    });
    

    const handlePhoneChange = (e) => {
        setFormData({ ...formData, phoneNumber: e.target.value });
    };

    const handleTravelerTypeSelect = (type) => {
        setFormData({ ...formData, travelerType: type });
    };

    const handleDestinationToggle = (destination) => {
        const newDestinations = formData.destinations.includes(destination)
            ? formData.destinations.filter(d => d !== destination)
            : [...formData.destinations, destination];
        setFormData({ ...formData, destinations: newDestinations });
    };

    const handleBioChange = (e) => {
        setFormData({ ...formData, travelBio: e.target.value });
    };

    const handlePresetSelect = (preset) => {
        setFormData({ ...formData, travelBio: preset });
    };

    const handleProfileUpdate = (url) => {
        setFormData({ ...formData, profilePicture: url });
    };

    //profile img handling
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleProfileUpdate(file);
        }
    };

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const skipStep = () => {
        nextStep();
    };

    const completeSignup = () => {
        console.log('Signup completed with data:', formData);
        //.......
    };

    const travelerTypes = [
        { id: 'solo', label: 'Solo Explorer', icon: 'mdi_user.svg' },
        { id: 'family', label: 'Family Traveler', icon: 'icon-park-solid_family.svg' },
        { id: 'luxury', label: 'Luxury Seeker', icon: 'material-symbols_crown.svg' },
        { id: 'budget', label: 'Budget Smart', icon: 'material-symbols_savings-rounded.svg' }
    ];

    const destinations = [
        { id: 'beaches', label: 'Beaches', image: 'Beach.svg' },
        { id: 'mountains', label: 'Mountains', image: 'Mountains.svg' },
        { id: 'cities', label: 'Cities', image: 'Cities.svg' },
        { id: 'deserts', label: 'Deserts', image: 'Deserts.svg' },
        { id: 'nature', label: 'Nature & Wildlife', image: 'Deserts (1).svg' },
        { id: 'historical', label: 'Historical & Cultural', image: 'Deserts (2).svg' }
    ];

    const bioPresets = [
        "Exploring the world, one destination at a time.",
        "Capturing unforgettable moments from every corner of the globe.",
        "Experiencing the best of travel without breaking the bank."
    ];

    const renderProgressBar = () => (
        <div className="flex items-center mb-6 w-full mx-auto p-6">
            <div className='flex w-full justify-between'>
                <div className="flex items-center gap-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-[#F86F0A]`}>
                        {currentStep}
                    </div>
                    <div>
                        <div className='text-[#F86F0A]'>Step {currentStep} of 3</div>
                        <div className='font-bold'>
                            {currentStep == 1 && <p>Create Account</p>}
                            {currentStep == 2 && <p>Personalize Your Experience </p>}
                            {currentStep == 3 && <p>Complete Your Profile</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-[5px] w-[125px] bg-[#D9D9D9] rounded-md flex'>
                        <div className={` rounded-md rounded-r-none h-[5px] w-[41.67px] ${currentStep >= 1 ? 'bg-[#F86F0A]' : 'bg-transparent'}`}></div>
                        <div className={` rounded-md rounded-l-none ${currentStep == 3 && 'rounded-r-none'} h-[5px] w-[41.67px] ${currentStep >= 2 ? 'bg-[#F86F0A]' : 'bg-transparent'}`}></div>
                        <div className={` rounded-md rounded-l-none h-[5px] w-[41.67px] ${currentStep >= 3 ? 'bg-[#F86F0A]' : 'bg-transparent'}`}></div>
                    </div>
                </div>

            </div>
        </div>
    );

    const renderStep1 = () => (
        <div className='flex flex-col gap-6 w-[450px] mx-auto '>
            {/* Phone Number Input */}
            <div className="flex items-center border border-gray-400 rounded-lg h-14 px-2">
                <div className="flex items-center pr-2 border-r border-gray-400">
                    <span className="text-gray-500">+91</span>
                    <span className="ml-1"><img className='w-10' src="mdi_chevron-down.svg" alt="" /></span>
                </div>
                <input
                    type="text"
                    className="ml-2 w-full outline-none text-gray-500"
                    placeholder="Enter Mobile Number"
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                />
            </div>

            {/* Continue Button */}
            <button
                className={`w-full ${formData.phoneNumber ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-lg h-14 font-medium`}
                disabled={!formData.phoneNumber}
                onClick={nextStep}
            >
                Continue
            </button>

            {/* Divider */}
            <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-gray-400"></div>
                <span className="text-gray-500 text-sm">Other login options:</span>
                <div className="flex-1 h-px bg-gray-400"></div>
            </div>

            {/* Google Login */}
            <button
                className="w-full flex justify-center items-center gap-2 border border-gray-200 rounded-lg h-12 shadow-md"
            //   onClick={}
            >
                <img src="google.png" alt="Google" className="w-6 h-6" />
                <span className="font-medium">Log in with Google</span>
            </button>

            {/* Email Login */}
            <button
                className="w-full flex justify-center items-center gap-2 border border-gray-200 rounded-lg h-12 shadow-md"
            //   onClick={}
            >
                <img src="mail.png" alt="Email" className="w-6 h-6" />
                <span className="font-medium">Log in with Email ID</span>
            </button>

            <div id="recaptcha-container"></div>
            <p className="text-center text-sm text-gray-500 mb-8">
                By proceeding, you agree to our <span className="text-blue-500">T&C</span> and
                <span className="text-blue-500"> Privacy policy</span>
            </p>
        </div>
    );

    const renderStep2 = () => (
        <div className="w-[546px] mx-auto">
            <div>
                <h3 className="font-medium mb-4">What kind of traveler are you?</h3>
                <div className="flex justify-between w-full">
                    {travelerTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                            <button
                                key={type.id}
                                onClick={() => handleTravelerTypeSelect(type.id)}
                                className={`p-4 shadow-2xl border rounded-lg text-center hover:bg-gray-50 ${formData.travelerType === type.id ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
                                    }`}
                            >
                                <img src={`${IconComponent}`} alt='' className="w-6 h-6 mx-auto mb-2" />
                                <span className="text-sm font-medium">{type.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <h3 className="font-medium mt-8 mb-4">Which destinations interest you?</h3>
                <div className="grid grid-cols-3 gap-3">
                    {destinations.map((dest) => (
                        <button
                            key={dest.id}
                            onClick={() => handleDestinationToggle(dest.id)}
                            className={`w-[170px] h-[102px] relative aspect-square rounded-lg overflow-hidden border-2 ${formData.destinations.includes(dest.id) ? 'border-orange-500' : 'border-transparent'
                                }`}
                        >
                            <img className='object-cover' src={dest.image} alt="" />
                            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                                <span className="text-white text-xs font-medium text-center px-2">
                                    {dest.label}
                                </span>
                            </div>
                            {formData.destinations.includes(dest.id) && (
                                <div className="absolute top-2 right-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="my-8 pb-8">
                <button
                    onClick={nextStep}
                    className="w-full bg-[#EA6100] hover:bg-orange-600 text-white py-3 rounded-lg font-medium"
                >
                    Continue
                </button>

                <button
                    onClick={skipStep}
                    className="w-full text-gray-600 hover:text-gray-800 py-2 font-medium"
                >
                    Skip for now
                </button>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="w-[546px] mx-auto">
            <div className="text-center">
                <div className="relative inline-block">
                    <div className="w-16 h-16 bg-[#FFF1E7] rounded-full flex items-center justify-center mx-auto mb-2"
                        onClick={handleClick}>
                        <img src="User icon.svg" alt="" />
                    </div>
                    <div className="absolute -bottom-0 -right-0 w-6 h-6 bg-[#EA6100] rounded-full flex items-center justify-center"
                        onClick={handleClick}>
                        <img src="solar_camera-bold.svg" alt="" />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <p className="text-sm">Upload profile picture</p>
            </div>

            <div>
                <h3 className="font-medium mb-2">Your Travel Bio</h3>
                <textarea
                    placeholder="Tell everyone about your travel style..."
                    value={formData.travelBio}
                    onChange={handleBioChange}
                    className="w-full border border-gray-300 rounded-lg p-4 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <div className="mt-3">
                    <p className="text-sm text-gray-600 mb-2">Or choose a preset:</p>
                    <div className="space-y-2">
                        {bioPresets.map((preset, index) => (
                            <button
                                key={index}
                                onClick={() => handlePresetSelect(preset)}
                                className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                            >
                                {preset}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="my-8 pb-8">
                <button
                    onClick={completeSignup}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium"
                >
                    Complete
                </button>

                <button
                    onClick={skipStep}
                    className="w-full text-gray-600 hover:text-gray-800 py-2 font-medium"
                >
                    Skip for now
                </button>
            </div>
        </div>
    );

    return (
        <div className={`bg-white rounded-lg shadow-lg mx-auto ${currentStep == 1 ? 'w-[522px]' : 'w-[618px]'}`}>
            <div>
                {renderProgressBar()}
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
            </div>
        </div>
    );
};

export default ThreeStepSignup;