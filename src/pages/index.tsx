import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "~/utils/api";

export default function Home() {
  const router = useRouter();
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return null;
}
