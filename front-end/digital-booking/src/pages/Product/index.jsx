import { useParams } from "react-router-dom"

export function Product() {
  const { id } = useParams()
  return (
    <section className="ContainerProduct">
      <h1>Page product/${id}</h1>
    </section>
  )
}