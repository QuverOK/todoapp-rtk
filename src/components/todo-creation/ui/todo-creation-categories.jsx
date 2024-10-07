import clsx from "clsx"
import PropTypes from "prop-types"

TodoCreationCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeCategoryId: PropTypes.string.isRequired,
  setActiveCategoryId: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
}

export function TodoCreationCategories({
  categories,
  activeCategoryId,
  handleCategoryChange,
}) {
  return (
    <div className="mt-[18px] shadow-[0_35px_50px_-15px_rgba(194,_195,_214,_0.5)]">
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
                    activeCategoryId === category.id && "text-functional-actve"
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
  )
}
