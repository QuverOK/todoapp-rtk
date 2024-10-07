import clsx from "clsx"
import PropTypes from "prop-types"

TodoCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export function TodoCategories({
  categories,
  activeCategoryId,
  handleCategoryChange,
}) {
  return (
    <div className="mt-[18px] ">
      <div className="container">
        <div className="py-4 w-full bg-white rounded-[5px] px-[25px]">
          <ul className="flex-col min-[563px]:flex-row flex items-center justify-center gap-[52px] font-bold text-base">
            {categories.map((category) => (
              <li key={category.id} className="text-base transition-colors">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    className="hidden"
                    onChange={handleCategoryChange}
                  />
                  <span
                    className={clsx(
                      "transition-colors",
                      activeCategoryId === category.id &&
                        "text-functional-actve"
                    )}
                  >
                    {category.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
