import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function ErrorPage() {
  return (
    <Layout>
      <section className="layout-block">
        <h1>404 - that page was not found</h1>
        <p>
          You better start over from{" "}
          <Link className="link" to="/">
            this sites homepage
          </Link>
          .
        </p>
      </section>
    </Layout>
  )
}
