import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, a laudantium saepe quibusdam cum reiciendis illo rem consequatur maiores, iusto sapiente quae aut inventore voluptate voluptas voluptatum rerum vero amet?`,
        price: 1500000
    },
    {
        id: 2,
        title: "Sepatu Second",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, a laudantium saepe quibusdam cum reiciendis illo rem consequatur maiores, iusto sapiente quae aut inventore voluptate voluptas voluptatum rerum vero amet?`,
        price: 1000000
    },
    {
        id: 3,
        title: "Sepatu Lama",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti magni soluta qui nobis. At veritatis, iste voluptatum aliquid numquam eius obcaecati optio debitis nostrum quo tempore officia? Esse, nesciunt!`,
        price: 500000
    }

];

const username = localStorage.getItem('username');

const ProductPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);





    const handleLogout = () => {

        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.href = "/login";
    }

    const handleAddToCart = (id) => {
        setCart([
            ...cart,
            {
                id,
                qty: 1
            }
        ])
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
                            <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>Rp. {product.price.toLocaleString('id-ID', {styles: 'currency',currency:'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.qty * product.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductPage;