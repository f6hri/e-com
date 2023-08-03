import SimpleProductCard from "../components/productCard/simpleProductCard";
import Container from "../components/shared/container";

export default function FairPriceSection(){
    return(
        <section className="my-8">
            <Container>
                <h3 className="text-3xl font-semibold">Bu Fiyata Kaçmaz</h3>
                <div className="flex items-center gap-8 mt-8">
                    <SimpleProductCard />
                    <SimpleProductCard />
                    <SimpleProductCard />
                    <SimpleProductCard />
                    <SimpleProductCard />
                </div>
            </Container>
        </section>
    );
}