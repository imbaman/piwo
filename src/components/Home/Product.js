import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-5 col-sm-4 col-lg-3 mx-auto  ">
      <div className="card  px-3 py-1" style={{ maxWidth: "9rem" }}>
        <Img fluid={product.image.fluid} className="card-img-top " />
        <div className="card-body text-center">
          <h6>{product.tittle}</h6>
          <h6>${product.prize}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.prize}
            data-item-image={product.image.fluid.src}
            data-item-url="http://localhost:8000/"
            data-item-name={product.tittle}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
