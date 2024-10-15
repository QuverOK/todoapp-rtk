import { FC } from "react";
import { Layout } from "../../types";
import { Header } from "../../components/header";
import { TodoCreation } from "../../components/todo-creation";

export const Creation: FC = () => (
  <CreationLayout
    header={
      <Header mainText={"TODO"} subText={"creation"} isHomeButton={true} />
    }
  >
    <TodoCreation />
  </CreationLayout>
);

const CreationLayout: FC<Layout> = ({ header, footer, children }) => (
  <div className="min-h-screen pt-[40px] flex flex-col mx-auto text-function-main">
    {header}
    <main className="flex-grow w-full mx-auto">{children}</main>
    {footer}
  </div>
);
