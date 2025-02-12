import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function MainSection({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-light text-uppercase text-center display-7 font-weight-bold font-italic">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}
MainSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
