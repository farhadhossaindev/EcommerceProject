import React from 'react'
import { Link } from 'react-router-dom'

function Card({ ProductInfo }) {
    return (
        <div>
            <div className="card card-compact w-96 bg-yellow-400 shadow-xl mx-auto mt-4">
                <figure><img src={ProductInfo.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">Taka {ProductInfo.price}</h2>
                    <p className='text-black'>{ProductInfo.title}</p>
                    <div className="card-actions justify-end">




                        <Link to={`/shop/${ProductInfo.id}`}>
                            <button className="btn btn-black text-white">Buy Now</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card