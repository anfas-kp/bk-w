import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({\r
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#ffffff" }}
    >
      <p>Loading...</p>
    </div>
  );
}
