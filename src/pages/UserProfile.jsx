import React, { useState } from "react";
import ProfileImg from "../components/ProfileImg";

export default function UserProfile({
  fullName = "User One",
  username = "@user123",
  coverImg = "/thumbnail.jpg",
  avatar = "/img3.jpeg",
  bio = "This is a short profile bio. Welcome to my page!",
  videos = [],
  tweets = []
}) {

  const [activeTab, setActiveTab] = useState("videos");

  return (
    <div className="w-full mx-auto max-w-4xl">

      {/* COVER IMAGE */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={coverImg}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* PROFILE HEADER */}
      <div className="px-4 -mt-12 flex items-end gap-4">
        {/* AVATAR */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={avatar}
            className="w-full h-full object-cover"
            alt="avatar"
          />
        </div>

        {/* NAME + USERNAME */}
        <div>
          <h1 className="text-2xl font-bold">{fullName}</h1>
          <p className="text-gray-600">{username}</p>
        </div>
      </div>

      {/* BIO */}
      <div className="px-4 mt-4 text-gray-700">
        {bio}
      </div>

      {/* TABS */}
      <div className="flex gap-6 mt-6 border-b px-4">
        {["videos", "tweets"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-3 font-medium ${
              activeTab === t
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4">

        {/* VIDEOS LIST */}
        {activeTab === "videos" && (
          <div className="
            grid 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6
          ">
            {videos.length === 0 ? (
              <p className="text-gray-500">No videos uploaded.</p>
            ) : (
              videos.map((v, i) => (
                <div
                  key={i}
                  className="bg-gray-800 text-white rounded-xl shadow p-2"
                >
                  <img
                    src={v.thumbnail}
                    className="rounded-lg w-full object-cover aspect-video"
                  />
                  <h3 className="mt-2 font-semibold">{v.title}</h3>
                </div>
              ))
            )}
          </div>
        )}

        {/* TWEETS LIST */}
        {activeTab === "tweets" && (
          <div className="flex flex-col gap-4">
            {tweets.length === 0 ? (
              <p className="text-gray-500">No tweets posted.</p>
            ) : (
              tweets.map((t, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border rounded-xl shadow-sm"
                >
                  <p className="text-gray-800">{t}</p>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}
