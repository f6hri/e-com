import SEO from "../SEO";
import Navbar from "../components/navbar";
import Container from "../components/shared/container";

export default function Home(){
    return(
        <>
            <SEO title="Ana sayfa" />
            <Navbar />
            <Container>
                hom page
            </Container>
        </>
    );
}