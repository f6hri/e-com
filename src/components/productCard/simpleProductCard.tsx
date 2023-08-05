import { Link } from "react-router-dom";
import IconButton from "../shared/buttons/iconButton";
import { FiHeart, FiShoppingCart, FiZoomIn } from "react-icons/fi";

export default function SimpleProductCard() {
  return (
    <Link to="#">
      <div className="p-5 border border-gray-200/75 rounded-md max-w-[280px] relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-200/50 flex items-center justify-center opacity-0 hover:opacity-100 gap-2">
          <IconButton icon={<FiShoppingCart />} />
          <IconButton icon={<FiHeart />} />
          <IconButton icon={<FiZoomIn />} />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs">
            Buratti % 100 Pamuk Düğmeli Polo T Shirt Erkek POLO 5902118
          </span>
          <img
            src="https://productimages.hepsiburada.net/s/63/600-800/110000004368190.jpg"
            alt="producr"
            width="200px"
          />
          <span className="mt-3">
            <span className="text-2xl font-bold mr-1">169,99</span>
            <span>TL</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
