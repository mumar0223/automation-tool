"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Home() {
  const { data } = authClient.useSession();

  if (!data) {
    return redirect("/login");
  }

  return <div>{JSON.stringify(data)}</div>;
}
