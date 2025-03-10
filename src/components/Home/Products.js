import React from "react"
import Product from "./Product"
import Title from "../Global/Title"
import { StaticQuery, graphql } from "gatsby"

export default function Products() {
  return (
    <StaticQuery
      query={graphql`
        {
          products: allContentfulBeerItem(
            filter: { category: { eq: "beer" } }
            limit: 5
          ) {
            edges {
              node {
                id
                tittle
                prize
                image {
                  fluid(maxHeight: 426) {
                    src
                    ...GatsbyContentfulFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products " />
              <div className="row ">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
