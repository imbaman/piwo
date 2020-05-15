import React from "react"
import Title from "../Global/Title"

export default function Contact() {
  return (
    <section className="contact py-5 container my-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/imbaman2@gmail.com" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Grzegorz"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                placeholder="email@"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">example</label>
              <textarea
                name="description"
                id="description"
                row="5"
                placeholder="your description"
                className="form-control"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
