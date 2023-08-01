import { FiPhone, FiMail } from "react-icons/fi";
import Container from "../shared/container";

export default function TopBar() {
  return (
    <div className="py-2 bg-gray-200">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+#" className="flex items-center gap-2 text-sm">
              <FiPhone />
              <span>0535 288 0593</span>
            </a>
            <a href="mailto:#" className="flex items-center gap-2 text-sm">
              <FiMail />
              <span>fahrimdemir@hotmail.com</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
