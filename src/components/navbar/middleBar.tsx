import { FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import Container from "../shared/container";
import { Link } from "react-router-dom";

export default function MiddleBar() {
  return (
    <div className="py-8">
      <Container>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-4xl">
            <FaShoppingBag /> <span>trendpc</span>
          </span>
          <div className="flex items-center gap-2">
            <input
              className="p-3 rounded-md outline-none bg-gray-200/50 w-[400px]"
              placeholder="Arama yap"
            />
            <button className="p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-2xl">
              <FiSearch />
            </button>
          </div>
          <div className="flex items-center gap-10">
            <Link to="#" className="flex items-start gap-2 hover:underline">
              <span className="text-3xl">
                <FiShoppingCart />
              </span>
              <span className="text-md font-semibold">Sepetim</span>
            </Link>
            <Link to="#" className="flex items-start gap-2 hover:underline">
              <span className="text-3xl">
                <FiUser />
              </span>
              <span className="text-md font-semibold">Giriş Yap</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
