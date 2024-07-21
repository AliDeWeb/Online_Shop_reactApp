import { NavLink, useLocation } from "react-router-dom";
import Motion from "../Motions/Motion";

function SideBarItems({ items }) {
   const location = useLocation();

   return (
    <Motion>
         <div className="divide-y divide-solid divide-gray-400/20">
            {items.map((item) => (
               <div className="text-zinc-700" key={item.link}>
                  <Motion.opacity>
                     <NavLink
                        to={item.link}
                        className={(a) => {
                           const [base, ...rest] = location.pathname
                              .split("/")
                              .filter(Boolean);
                           const urlPathname = [base, rest.join("/")][1];
                           return `${item.link === urlPathname ? "active-panel-menu" : ""} flex items-center gap-2 py-4 px-2 font-danaBold transition-all hover:bg-gray-400/20 rounded-md`;
                        }}
                     >
                        <span>{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                     </NavLink>
                  </Motion.opacity>
               </div>
            ))}
         </div>
      </Motion>
   );
}

export default SideBarItems;
