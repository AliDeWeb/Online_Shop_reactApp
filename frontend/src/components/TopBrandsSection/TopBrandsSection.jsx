import React from "react";

import brands1 from "../../assets/imgs/brands1.webp";

// React Router
import { Link } from "react-router-dom";

export default function TopBrandsSection() {
  return (
    <div>
      <div className="overflow-hidden rounded-lg w-28">
        <Link>
          <img src={brands1} alt="brandsImg" />
        </Link>
      </div>
    </div>
  );
}
