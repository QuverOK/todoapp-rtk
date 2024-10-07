import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Input,
} from "@headlessui/react"
import { useState } from "react"
import { CheckIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"

import PropTypes from "prop-types"
import { ArrowIco } from "../../../../public/home/arrow-ico"
UiListbox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired,
}

export function UiListbox({ items, addItem }) {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [newCategory, setNewCategory] = useState("")

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <ListboxButton>
        {" "}
        <ArrowIco
          className={
            "text-function-main h-3.5 hover:text-function-main-hover transition-colors"
          }
        />
      </ListboxButton>

      <ListboxOptions
        modal={false}
        anchor="bottom"
        transition
        className={clsx(
          "rounded-lg border border-white/5 bg-gray-100/95 p-1 [--anchor-gap:20px] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 "
        )}
      >
        <div className="border-b border-black/30 ">
          {items.map((item, index) => (
            <ListboxOption
              key={index}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
            >
              <div className="text-sm/6 text-todo-main">{item}</div>
              <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
            </ListboxOption>
          ))}
          <Input
            onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory}
            type="text"
            placeholder="Insert new category"
            className="bg-transparent text-sm/6 text-todo-main flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 my-2 select-none data-[focus]:bg-black/10 outline outline-1 outline-black/10  focus:outline-black/10"
          />
        </div>
        <button
          onClick={() => addItem(items, newCategory)}
          className="flex w-full justify-center text-base  py-2 px-2 text-black/85 hover:bg-black/10 focus:bg-black/10 transition duration-100 ease-in rounded-sm"
        >
          Add category
        </button>
      </ListboxOptions>
    </Listbox>
  )
}
