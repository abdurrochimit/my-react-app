import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, a laudantium saepe quibusdam cum reiciendis illo rem consequatur maiores, iusto sapiente quae aut inventore voluptate voluptas voluptatum rerum vero amet?`,
        price: "Rp. 1.000.000,00"
    },
    {
        id: 2,
        title: "Sepatu Second",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, a laudantium saepe quibusdam cum reiciendis illo rem consequatur maiores, iusto sapiente quae aut inventore voluptate voluptas voluptatum rerum vero amet?`,
        price: "Rp. 5.000.000,00"
    },
    {
        id: 3,
        title: "Sepatu Lama",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti magni soluta qui nobis. At veritatis, iste voluptatum aliquid numquam eius obcaecati optio debitis nostrum quo tempore officia? Esse, nesciunt!`,
        price: "Rp. 5.000.000,00"
    }

];

const username = localStorage.getItem('username');

const ProductPage = () => {

    const handleLogout = () => {

        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.href = "/login";
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {username}
                <Button variant="ml-10 bg-black" onClick={handleLogout}  >
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5 ">
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                        <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductPage;