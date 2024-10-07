import PropTypes from "prop-types"
import { Header } from "../../components/header"
import { TodoCreation } from "../../components/todo-creation/ui"
import {} from "react-router-dom"

CreationLayout.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element.isRequired,
}

export function Creation() {
  return (
    <CreationLayout
      header={
        <Header mainText={"TODO"} subText={"creation"} isHomeButton={true} />
      }
    >
      <TodoCreation />
    </CreationLayout>
  )
}

function CreationLayout({ header, footer, children }) {
  return (
    <div className="min-h-screen pt-[40px] flex flex-col mx-auto text-function-main">
      {header}
      <main className="flex-grow mx-auto w-full">{children}</main>
      {footer}
    </div>
  )
}
