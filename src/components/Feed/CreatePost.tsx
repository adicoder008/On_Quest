import React, { useState } from 'react';

export const CreatePost = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const handleOpenPostModal = () => {
    setIsPostModalOpen(true);
    setIsLocationModalOpen(false);
  };

  const handleClosePostModal = () => {
    setIsPostModalOpen(false);
  };

  const handleOpenLocationModal = () => {
    setIsLocationModalOpen(true);
    setIsPostModalOpen(false);
  };

  const handleCloseLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  const handleBackToPost = () => {
    setIsLocationModalOpen(false);
    setIsPostModalOpen(true);
  };

  // Avatar component inline
  const Avatar = ({ src, alt, className = "w-10 h-10 rounded-full object-cover" }) => (
    <img src={src} alt={alt} className={className} />
  );

  // Button component inline
  const Button = ({ children, variant = "default", className = "", onClick = () => {} }) => {
    const baseClasses = "font-medium leading-[150%]";
    const variantClasses = variant === "primary" 
      ? "bg-primary-600 text-background-primary" 
      : "bg-label-secondary text-background-primary";
    
    return (
      <button 
        className={`${baseClasses} ${variantClasses} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  // Action Button component
  const ActionButton = ({ icon, label, onClick }) => (
    <button 
      className="box-border flex items-center gap-2 text-label-primary text-sm"
      onClick={onClick}
    >
      {icon === "image" && (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V5H19V19H5ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
        </svg>
      )}
      {icon === "video" && (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z" fill="currentColor"/>
        </svg>
      )}
      {icon === "location" && (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
        </svg>
      )}
      <span>{label}</span>
    </button>
  );

  // Option Button component for modal
  const OptionButton = ({ icon, label, onClick }) => (
    <div 
      className="self-stretch rounded-lg bg-white border-label-tertiary border-solid border-[1px] flex flex-row items-center justify-between py-2 px-2.5 text-sm cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-start gap-2.5">
        <img className="w-5 h-5" alt="" src={icon} />
        <div className="relative leading-[150%] font-medium text-label-primary">{label}</div>
      </div>
      <img className="w-6 h-6" alt="Expand" src="/icons/chevron-left.svg" />
    </div>
  );

  return (
    <>
      {/* Create Post Trigger Component */}
      <div className="box-border border bg-white  mb-3 p-3 rounded-lg border-solid border-label-tertiary">
        <div className="box-border flex items-center gap-3 px-2.5 py-1">
          <Avatar
            src="/images/user-profile.png"
            alt="Profile"
          />
          <button 
            onClick={handleOpenPostModal}
            className="box-border grow border text-label-secondary bg-white px-2.5 py-2 rounded-lg border-solid border-label-tertiary text-left"
          >
            Share your travel experience...
          </button>
        </div>

        <div className="box-border flex justify-between items-center gap-1 mt-3 p-2.5 border-t border-t-label-tertiary">
          <ActionButton icon="image" label="Photo" onClick={handleOpenPostModal} />
          <ActionButton icon="video" label="Videos" onClick={handleOpenPostModal} />
          <ActionButton icon="location" label="Location" onClick={handleOpenLocationModal} />
        </div>
      </div>

      {/* Create Post Modal */}
      {isPostModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="max-w-md w-full">
            <div className="w-full relative rounded-lg bg-white border-label-tertiary border-solid border-[1px] box-border flex flex-col items-end justify-end p-3 gap-3">
              {/* Header */}
              <div className="self-stretch flex flex-row items-center justify-between py-1 px-2.5">
                <div className="relative leading-[150%] font-medium text-label-primary">Create Post</div>
                <button onClick={handleClosePostModal}>
                  <img className="w-6 h-6" alt="Close" src="/icons/close.svg" />
                </button>
              </div>
              
              {/* Divider */}
              <div className="self-stretch border-t border-label-tertiary border-solid" />
              
              {/* User Info */}
              <div className="self-stretch rounded flex flex-row items-center justify-start py-1 px-2.5 gap-3">
                <Avatar 
                  src="/images/user-profile.png"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col items-start justify-center">
                  <div className="relative leading-[150%] font-medium text-label-primary">Your Name</div>
                  <div className="rounded-3xl bg-white border-label-tertiary border-solid border-[1px] flex flex-row items-center justify-between py-0.5 pl-2 pr-1.5 gap-1 text-xs text-label-secondary">
                    <img className="w-3 h-3" alt="World" src="/icons/world.svg" />
                    <div className="relative leading-[150%] font-medium">Anyone</div>
                    <img className="w-4 h-4" alt="Dropdown" src="/icons/chevron-down.svg" />
                  </div>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="self-stretch rounded-lg bg-white border-label-tertiary border-solid border-[1px] flex flex-row items-center justify-start py-2 px-2.5 text-label-secondary">
                <textarea 
                  className="flex-1 relative leading-[150%] font-medium bg-transparent border-none resize-none outline-none"
                  placeholder="Share your travel experience..."
                  rows={3}
                />
              </div>
              
              {/* Media Upload */}
              <div className="self-stretch rounded-lg bg-white border-label-tertiary border-solid border-[1px] flex flex-row items-center justify-start py-2 px-2.5">
                <div className="flex-1 rounded-lg bg-background-tertiary border-label-primary border-dashed border-[0.5px] box-border h-44 flex flex-col items-center justify-center gap-2">
                  <div className="self-stretch flex flex-col items-center justify-start gap-1">
                    <img className="w-6 h-6" alt="Image" src="/icons/image-outline.svg" />
                    <div className="relative leading-[150%] text-label-primary">Drag photos and videos here</div>
                  </div>
                  <Button 
                    variant="secondary"
                    className="rounded-lg bg-label-secondary py-1 px-3 text-sm text-background-primary"
                  >
                    Browse
                  </Button>
                </div>
              </div>
              
              {/* Additional Options */}
              <OptionButton 
                icon="/icons/location.svg" 
                label="Add Location" 
                onClick={handleOpenLocationModal} 
              />
              <OptionButton 
                icon="/icons/group.svg" 
                label="Tag People"
                onClick={() => {}}
              />
              <OptionButton 
                icon="/icons/tag.svg" 
                label="Add Topics"
                onClick={() => {}}
              />
              
              {/* Divider */}
              <div className="self-stretch border-t border-label-tertiary border-solid" />
              
              {/* Post Button */}
              <Button 
                variant="primary"
                className="rounded-lg bg-primary-600 py-2.5 px-6 text-background-primary"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="max-w-md w-full">
            <div className="w-full relative rounded-lg bg-white border-label-tertiary border-solid border-[1px] box-border flex flex-col items-end justify-end p-3 gap-3">
              {/* Header */}
              <div className="self-stretch flex flex-row items-center justify-between py-1 px-2.5">
                <div className="relative leading-[150%] font-medium text-label-primary">Add Location</div>
                <button onClick={handleCloseLocationModal}>
                  <img className="w-6 h-6" alt="Close" src="/icons/close.svg" />
                </button>
              </div>
              
              {/* Divider */}
              <div className="self-stretch border-t border-label-tertiary border-solid" />
              
              {/* Location Input */}
              <div className="self-stretch rounded-lg bg-white border-label-tertiary border-solid border-[1px] flex flex-row items-center justify-start py-2 px-2.5 text-label-secondary">
                <input 
                  className="flex-1 relative leading-[150%] font-medium̍11 bg-transparent border-none outline-none"
                  placeholder="Enter Location..."
                />
              </div>
              
              {/* Divider with 'or' */}
              <div className="self-stretch flex flex-row items-center justify-center gap-2.5 text-label-tertiary">
                <div className="flex-1 border-t border-label-tertiary border-solid" />
                <div className="relative leading-[150%] font-medium">or</div>
                <div className="flex-1 border-t border-label-tertiary border-solid" />
              </div>
              
              {/* Current Location Button */}
              <div className="self-stretch rounded-lg bg-fill-primary border-label-tertiary border-solid border-[1px] box-border h-10 flex flex-row items-center justify-center py-2 px-2.5 gap-2.5 text-center text-sm cursor-pointer">
                <img className="w-5 h-5" alt="" src="/icons/location.svg" />
                <div className="relative leading-[150%] font-medium text-label-primary">Use Current Location</div>
              </div>
              
              {/* Divider */}
              <div className="self-stretch border-t border-label-tertiary border-solid" />
              
              {/* Action Buttons */}
              <div className="flex flex-row items-start justify-end gap-3 text-label-secondary">
                <button onClick={handleBackToPost} className="shadow-[4px_4px_10px_rgba(0,_0,_0,_0.1)] rounded-lg border-label-tertiary border-solid border-[1px] flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="relative leading-[150%] font-medium">Back</div>
                </button>
                <button onClick={handleBackToPost} className="rounded-lg bg-primary-600 flex flex-row items-center justify-center py-2.5 px-6 text-background-primary">
                  <div className="relative leading-[150%] font-medium">Save</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;