// Components
import { FavsProductBox } from "../../configs/Layout/Layout";

export default function UserPanelFavorites() {
  return (
    <div>
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
