import PropTypes from "prop-types"
import { Todo } from "../../components/todo/ui"
import { Header } from "../../components/header"

HomeLayout.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element.isRequired,
}

export function Home() {
  return (
    <HomeLayout header={<Header mainText={"TODO"} />}>
      <Todo />
    </HomeLayout>
  )
}

function HomeLayout({ header, footer, children }) {
  return (
    <div className="min-h-screen flex flex-col mx-auto text-function-main">
      {header}
      <main className="flex-grow mx-auto w-full">{children}</main>
      {footer}
    </div>
  )
}
