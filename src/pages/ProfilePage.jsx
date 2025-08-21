import React, { useRef, useState } from "react";
import { useLocation } from "react-router";
import profilePicture from "../img/Ellipse 114.png";
import cameraIcon from "../img/Group 1585.png";

const ProfilePage = () => {
  const location = useLocation();
  const data = location.state;

  const [selectedImage, setSelectedImage] = useState(profilePicture);
  const fileInputRef = useRef(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Trigger file input when camera icon is clicked
  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#F7F8F9]">
      <div className="relative w-full max-w-sm min-h-screen bg-[#F7F8F9]">
        {/* Header */}
        <div className="w-full h-[68px] bg-white flex items-center px-5 text-[18px] font-medium text-[#1D2226]">
          Account Settings
        </div>

        {/* Profile Section */}
        <div className="relative flex items-center mt-6 px-5">
          {/* Profile Picture Wrapper (NO overflow-hidden here) */}
          <div className="relative w-[76px] h-[76px]">
            {/* Actual Profile Image (circular) */}
            <img
              src={selectedImage}
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full object-cover"
            />
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            {/* Camera Icon clickable (sticks out) */}
            <button
              onClick={handleCameraClick}
              className="absolute bottom-0 right-0 translate-x-2 translate-y-2"
            >
              <img
                src={cameraIcon}
                alt="Change"
                className="w-[28px] h-[28px]"
              />
            </button>
          </div>

          {/* User Info */}
          <div className="ml-5">
            <h4 className="text-[15px] font-medium text-[#1D2226]">
              {data?.name || "Marry Doe"}
            </h4>
            <p className="text-[14px] text-[#1D2226] mt-1">
              {data?.email || "Marry@Gmail.com"}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-10 mx-5 text-[13px] text-[#1D2226] leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        {/* Extra Space Divider */}
        <div className="border-t border-b border-dashed border-[#cbcbcb] h-[460px] mt-5"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
