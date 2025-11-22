import React from "react";
import ProfileImg from "./ProfileImg";

/**
 * Props:
 * - thumbnail: string (url)
 * - avatar: string (url)
 * - title: string
 * - channel: string
 * - views: number | string
 * - uploaded: string (e.g. "2 days ago", "3 months ago")
 * - onClick: function (optional) - triggered when card clicked
 */
export default function VideoCard({
  title = "Sample video title that might be long and should clamp to two lines",
  channel = "Channel Name",
  views = "1.2M views",
  uploaded = "2 days ago",
  onClick,
}) {
  return (
    <article
      role="article"
      onClick={onClick}
      className="group cursor-pointer w-full bg-gray-800 p-3 rounded-xl"

    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <img
          src='/thumbnail.jpg'
          alt={title}
          className="w-full h-auto object-cover aspect-video block"
          loading="lazy"
        />

        {/* duration badge (optional example) */}
        <span className="absolute right-2 bottom-2 bg-black/70 text-xs text-white px-2 py-0.5 rounded">
          12:34
        </span>
      </div>

      {/* Meta */}
      <div className="flex gap-3 mt-3 bg-gray-800">
        {/* Avatar */}
        <div className="w-10 h-10">
          <ProfileImg/>
        </div>
        {/* <img
          src='/img3.jpeg'
          alt={`${channel} avatar`}
          className="w-10 h-10 rounded-full object-cover shrink-0"
          loading="lazy"
        /> */}

        {/* Texts */}
        <div className="flex-1 min-w-0">
          {/* Title - clamp to 2 lines */}
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight
                         line-clamp-2">
            {title}
          </h3>

          {/* channel name + views/time */}
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-2">
            <span className="">{channel}</span>
            <span aria-hidden="true">•</span>
            <span>{views}</span>
            <span aria-hidden="true">•</span>
            <span>{uploaded}</span>
          </div>
        </div>

        {/* More button */}
        <button
          className="ml-2 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
          aria-label="More options"
        >
          ⋯
        </button>
      </div>
    </article>
  );
}
