import { Category } from "types"

export const CategoryList = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-gray-100 py-2 overflow-x-auto scrollbars-hidden">
      <div className="px-8 text-sm inline-flex space-x-5">
        {categories.map((category, index) => (
          <CategoryItem category={category} key={index} />
        ))}
      </div>
    </div>
  )
}

const CategoryItem = ({ category }: { category: string }) => (
  <a href="#" className="text-gray-800 whitespace-nowrap">
    {category}
  </a>
)
