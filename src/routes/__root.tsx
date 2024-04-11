import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Layout, LayoutBody, LayoutHeader } from "@/components/layout/Layout";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <LayoutBody className="flex flex-col" fixedHeight>
        <div className="-mx-4 flex-1 overflow-auto px-4 pt-4 lg:flex-row lg:space-x-12 lg:space-y-0">
          <Outlet />
        </div>
      </LayoutBody>
    </Layout>
  ),
});
