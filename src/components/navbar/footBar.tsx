import { Link } from "react-router-dom";
import Container from "../shared/container";

export default function FootBar(){
    return(
        <div className="bg-blue-700 text-white py-2">
            <Container>
                <div className="flex items-center gap-8">
                    <Link to="#">
                        <span className="font-medium">Telefon</span>
                    </Link>
                    <Link to="#">
                        <span className="font-medium">Hazır Oyuncu Sistemi</span>
                    </Link>
                    <Link to="#">
                        <span className="font-medium">Bilgisyar Bileşenleri</span>
                    </Link>
                </div>
            </Container>
        </div>
    );
}