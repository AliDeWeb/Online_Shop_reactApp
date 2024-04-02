import React from "react";

// React Router
import { Link } from "react-router-dom";

export default function TopBrandsSection({ img }) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg w-28 h-10 flex items-center justify-center">
        <Link className="size-full">
          <img
            className="size-full"
            loading="lazy"
            src={`${img}`}
            alt="brandsImg"
          />
        </Link>
      </div>
    </div>
  );
}
