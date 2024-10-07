import { UiListbox } from "../../uikit"

export function TodoCreate({ placeholder, categories }) {
  const addItem = (items, newCategory) => {
    const newItems = [...items, newCategory]

    // post method to add new category
  }

  return (
    <div className="mt-10">
      <div className="container relative max-h-16">
        <div className="w-6 h-6 rounded-full border-[#e3e4f1] border absolute top-1/2 -translate-y-1/2 left-10"></div>
        <input
          placeholder={placeholder}
          className="pr-16 py-5 w-full rounded-[5px] shadow-[0_35px_50px_-15px_rgba(194,_195,_214,_0.5)]  text-todo-main placeholder:text-function-main text-[16px] focus:outline-none pl-16 min-[410px]:text-[18px] min-[311px]:pl-16 min-[311px]:pr-16"
        />
        <div className=" absolute top-1/2 right-10 -translate-y-1/2">
          <UiListbox items={categories} addItem={addItem} />
        </div>
      </div>
    </div>
  )
}
