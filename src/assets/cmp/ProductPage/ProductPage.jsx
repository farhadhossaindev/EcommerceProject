import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function ProductPage() {
    const [Product, AllProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetchData(id)
    }, [])
    const fetchData = async (rcvId) => {
        const Product = await fetch(`https://fakestoreapi.com/products/${rcvId}`)
        const Result = await Product.json()
        AllProduct(Result)
    }

    console.log(Product)

    return (
        <div>
            <div className="card card-side bg-yellow-400 shadow-xl">
                <div className="">

                </div>
                <figure><img src={Product.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-black"> Taka {Product.price}</h1>
                    <h2 className="text-black">{Product.category}</h2>
                    <h3 className="text-black">{Product.title}</h3>
                    <p className="text-black">{Product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-dark text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage