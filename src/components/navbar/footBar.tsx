import { Link } from "react-router-dom";
import Container from "../shared/container";
import HStack from "../shared/hStack";

export default function FootBar() {
  return (
    <div className="py-2 bg-gray-200/50">
      <Container>
        <HStack spacing="gap-8">
          <Link to="#">
            <span className="font-medium text-sm hover:underline">Telefon</span>
          </Link>
          <Link to="#">
            <span className="font-medium text-sm hover:underline">Hazır Oyuncu Sistemi</span>
          </Link>
          <Link to="#">
            <span className="font-medium text-sm hover:underline">Bilgisyar Bileşenleri</span>
          </Link>
        </HStack>
      </Container>
    </div>
  );
}
