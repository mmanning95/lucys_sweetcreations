"use client";

import { CldImage } from "next-cloudinary";

export function Sidebar() {
  return (
    <aside className="w-60 h-[calc(100vh-64px)] p-1 sticky top-[40px] ">
        <div style={{ position: "relative", width: "100%", height: "250px" }}>
          <CldImage
            src="lucy_icon_oldtrw"
            alt="A Cloudinary image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="break-all p-2">
          <p>
          I am ______________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          _____________________________________
          </p>
        </div>
    </aside>
  );
}
