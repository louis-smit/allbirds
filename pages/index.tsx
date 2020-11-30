import Head from "next/head"
import { categories, products } from "data"
import { Header, Notify, Products, Planet, CategoryList, Nav } from "components"

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Allbirds</title>
      </Head>
      <Notify />
      <Header />
      <main>
        <div>
          <Nav />
          <CategoryList categories={categories} />
        </div>
        <div className="py-8">
          <Planet />
          <Products products={products} />
        </div>
      </main>
    </div>
  )
}
