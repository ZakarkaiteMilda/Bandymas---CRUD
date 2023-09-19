import { Link } from "react-router-dom"

export function List() {
    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Mūsų meistrai</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Lempų meistras</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi neque distinctio illo sed harum assumenda et a voluptas reprehenderit corrupti!</p>
                    <Link href="/" className="icon-link">
                    Sužinoti daugiau
                    </Link>
                </div>
             
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Durų meistras</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, a. Dolores, iure esse aperiam deserunt culpa voluptatem. Alias.</p>
                    <Link href="/" className="icon-link">
                        Sužinoti daugiau
                    </Link>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Šonų meistras</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi ad aspernatur dicta alias. Omnis cupiditate aliquid quod suscipit fuga molestias fugit eveniet porro reprehenderit.</p>
                    <Link href="/" className="icon-link">
                    Sužinoti daugiau
                    </Link>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Ratų meistras</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam velit adipisci et!</p>
                    <Link href="/" className="icon-link">
                    Sužinoti daugiau
                    </Link>
                </div>
             
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Vairo meistras</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore vero dicta ipsum sapiente consequatur delectus laboriosam reiciendis quam rerum!</p>
                    <Link href="/" className="icon-link">
                    Sužinoti daugiau
                    </Link>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
                    <h3 className="fs-2 text-body-emphasis">Langų meistras</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorum ipsa error, nostrum fugiat qui?</p>
                    <Link href="/" className="icon-link">
                    Sužinoti daugiau
                    </Link>
                </div>
            </div>
        </div>
    )
}