import { FC } from "react";
import { Layout } from "../../types";
import { Header } from "../../components/header";
import { Todo } from "../../components/todo";

export const Home: FC = () => (
  <HomeLayout header={<Header mainText={"TODO"} />}>
    <Todo />
  </HomeLayout>
);

const HomeLayout: FC<Layout> = ({ header, footer, children }) => (
  <div className="flex flex-col min-h-screen mx-auto text-function-main">
    {header}
    <main className="flex-grow w-full mx-auto">{children}</main>
    {footer}
  </div>
);
