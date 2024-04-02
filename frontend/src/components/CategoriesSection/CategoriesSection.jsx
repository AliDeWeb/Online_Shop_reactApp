import React from "react";

// React Router
import { Link } from "react-router-dom";

// Axios
import { apiUrl } from "../../configs/axios/axiosConfigs";

export default function CategoriesSection({ categories }) {
  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-2 lg:grid-rows-1 justify-center font-dana gap-4 lg:gap-0 child:mx-auto text-sm">
          {categories &&
            categories?.map((el) => (
              <div key={el._id}>
                <div className="md:mx-2 font-dana flex flex-col items-center justify-center hover:scale-110 transition-all rounded-md overflow-hidden">
                  <Link className="flex flex-col items-center justify-center">
                    <img
                      loading="lazy"
                      src={`${apiUrl}/${el.cover}`}
                      alt="categoriesImg"
                      className="size-[70px] md:size-[100px]"
                    />
                    <span className="line-clamp-1">{el.title}</span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
