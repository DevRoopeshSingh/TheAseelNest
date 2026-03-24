"use client";

import { InstagramEmbed } from "react-social-media-embed";

export function InstagramFeed() {
  // Using placeholder URLs for demonstration since standard placeholders don't reliably load inside standard embed block rules without breaking API logic. 
  // We use an empty styled box for instances where an adblocker blocks them or placeholders fail.
  const posts = [
    "https://www.instagram.com/p/C-04j_ZNJN5/",
    "https://www.instagram.com/p/CAc4O79nhQv/",
    "https://www.instagram.com/p/CUbHcw8M1Gg/",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {posts.map((url, i) => (
        <div key={i} className="w-full max-w-[328px] overflow-hidden rounded-md shadow-sm border border-brand-beige-dark bg-white flex justify-center h-[500px]">
          {/* We wrap Instagram embed gracefully */}
          <InstagramEmbed url={url} width="100%" />
        </div>
      ))}
    </div>
  );
}
