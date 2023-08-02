import { FiPhone, FiMail } from "react-icons/fi";
import Container from "../shared/container";
import HStack from "../shared/hStack";

export default function TopBar() {
  return (
    <div className="py-2 bg-gray-200/25">
      <Container>
        <div className="flex justify-between items-center">
          <HStack spacing={10}>
            <a href="tel:+#" className="flex items-center gap-2 text-sm">
              <FiPhone />
              <span>0535 288 0593</span>
            </a>
            <a href="mailto:#" className="flex items-center gap-2 text-sm">
              <FiMail />
              <span>fahrimdemir@hotmail.com</span>
            </a>
          </HStack>
        </div>
      </Container>
    </div>
  );
}
