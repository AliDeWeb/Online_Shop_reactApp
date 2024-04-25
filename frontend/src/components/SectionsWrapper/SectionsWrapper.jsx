import React from "react";

// React Router
import { Link } from "react-router-dom";

// Icons
import { BsArrowLeftShort } from "react-icons/bs";

export default function ProductsSections(props) {
  return (
    <section className={`py-5 ${props.className}`}>
      <div className="container">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-dana sm:font-danaBold text-lg lg:text-xl text-zinc-700 border-b-2 border-solid border-b-orange-300 pb-1">
                {props.title}
              </h2>
            </div>
            <div>
              <Link to={props.href} className="flex items-center gap-0.5 font-dana lg:py-2 py-1 lg:px-4 px-3 rounded-md group text-zinc-700">
                <span className="group-hover:pl-3 transition-all text-sm">
                  مشاهده همه
                </span>
                <BsArrowLeftShort color="#333333" size="1rem" />
              </Link>
            </div>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </section>
  );
}
