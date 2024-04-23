// Components
import { FavsProductBox } from "../../configs/Layout/Layout";

export default function UserPanelFavorites() {
  return (
    <div>
      <div className="flex items-center justify-between px-2.5 font-dana mb-8">
        <div>
          <h2 className="font-danaBold text-lg relative before:content-[''] before:absolute before:bg-orange-300 before:left-0 before:right-0 before:-bottom-1 before:h-0.5 before:w-full before:rounded-lg">
             محصولات مورد علاقه
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-4 justify-items-center justify-center">
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
        <div className="col-span-4 sm:col-span-2 xl:col-span-1 flex items-center justify-center w-full">
          <FavsProductBox />
        </div>
      </div>
    </div>
  );
}
