import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/htge-app";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "HTGE Login — Freelancer Console" }, { name: "description", content: "Sign in to the HTGE freelancer project management console." }, { property: "og:title", content: "HTGE Login — Freelancer Console" }, { property: "og:description", content: "Sign in to manage HTGE freelancer projects." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Index() {
  return <LoginPage />;
}
