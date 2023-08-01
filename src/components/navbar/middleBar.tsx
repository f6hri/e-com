import { FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import Container from "../shared/container";
import { Link } from "react-router-dom";

export default function MiddleBar() {
  return (
    <div className="py-3">
      <Container>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-4xl">
            <FaShoppingBag /> <span>trendpc</span>
          </span>
          <div className="flex items-center gap-2">
          <input className="p-3 rounded-md outline-none bg-gray-200/50 w-[400px]" placeholder="Arama yap" />
          <button className="p-3 bg-[#4682a9] text-white rounded-md transition 0.2s ease hover:bg-blue-600 text-2xl">
            <FiSearch />
          </button>
          </div>
          <div className="flex items-center gap-10">
            <Link to="#">
                <span className="text-3xl">
                    <FiShoppingCart />
                </span>
            </Link>
            <Link to="#">
                <span className="text-3xl">
                    <FiUser />
                </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
