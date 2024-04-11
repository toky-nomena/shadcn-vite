import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rules")({
  component: () => <div>Hello /rules!</div>,
});
