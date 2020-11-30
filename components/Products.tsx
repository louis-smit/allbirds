import { Product } from "types"

export const Products = ({ products }: { products: Product[] }) => {
  const image =
    "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3MDPG_SHOE_LEFT_GLOBAL_MENS_WOOL_RUNNER_DAPPLE_GREY_CREAM_68c1408b-e1c9-41bf-ad52-db2df67dc0c8.png?v=1604598100"

  return (
    <div className="py-12 px-8">
      {products.map((product, index) => (
        <div className="" key={index}>
          <div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-800">{product.description}</p>
          </div>
          <div className="shadow-xl mt-4">
            <div className="shadow-lg">
              <a href="">
                <div>
                  <img src={image} alt="" />
                  <div className="px-4 pt-3">
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-800">
                      {product.styles[0].name}
                    </p>
                  </div>
                </div>
              </a>
              <div className="mt-1 px-4 pb-4">
                <p className="text-sm text-gray-800">
                  {product.styles[0].price}
                </p>
                <div className="mt-4 flex space-x-4">
                  {product.styles.slice(0, 6).map((style, index) => (
                    <button
                      className={`h-6 w-6 flex flex-col transform -rotate-45 rounded-full overflow-hidden border border-gray-300 ${
                        index === 0 ? "ring-2 ring-offset-1 ring-gray-300" : ""
                      }`}
                      key={index}
                    >
                      <span className="sr-only">{style.name}</span>
                      <span
                        className="h-3 w-6"
                        style={{
                          backgroundColor: style.colors[0],
                        }}
                      ></span>
                      <span
                        className="h-3 w-6"
                        style={{
                          backgroundColor: style.colors[1],
                        }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t">
                <button className="flex justify-between w-full text-sm px-4 py-3">
                  <span className="font-semibold ">Quick Add</span>
                  <span>
                    <svg
                      className="h6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
