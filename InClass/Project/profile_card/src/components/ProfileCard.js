import React from "react";

const ProfileCard = ({ name, title, avatar, bio, social }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">
      <img src={avatar} alt="avatar" className="w-24 h-24 mx-auto rounded-full mb-4" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{title}</p>
      <p className="mt-2 text-sm text-gray-700">{bio}</p>
      <div className="mt-4 flex justify-center space-x-4">
        {social.map(({ platform, url, icon }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-xl"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
