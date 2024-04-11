import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/Layout";
import { RulesDataTable } from "./components/RulesDataTable";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";
import { Header } from "../../components/layout/Header";

export default function Tasks() {
  return (
    <Layout>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <LayoutBody className="flex flex-col" fixedHeight>
        <div className="-mx-4 flex-1 overflow-auto px-4 pt-4 lg:flex-row lg:space-x-12 lg:space-y-0">
          <RulesDataTable data={tasks} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  );
}
