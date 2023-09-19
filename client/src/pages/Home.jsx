import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className="container px-4 py-5" id="featured-3">
            <div>
              <h1>Apie mus</h1> 
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius veritatis, maiores totam deserunt hic amet. Labore quis mollitia obcaecati, ab eum autem, error omnis nesciunt tempora ad minus dignissimos, commodi quisquam tempore unde iusto. Fuga magnam architecto, suscipit eum tenetur repellat, sequi consequuntur sed quibusdam cum voluptatum laudantium. Labore.</p> 
            </div>
            <br />
            <br />
            <h4>Populiariausias mūsų meistras:</h4>
            <div className="row-12">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h5>Langų meistras</h5>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <Link href="/" className="icon-link">
                        Sužinoti daugiau
                    </Link>
                </div>
            </div>
        </div>
    )
}