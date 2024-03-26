import React from "react";

// Imgs
import banner from "../../assets/imgs/long-banner.jpg";

// React Router
import { Link } from "react-router-dom";

export default function LongBanner() {
  return (
    <div className="py-2.5 hidden md:block">
      <div className="container">
        <div className="rounded-md overflow-hidden">
          <Link>
            <img src={banner} alt="banner" />
          </Link>
        </div>
      </div>
    </div>
  );
}
