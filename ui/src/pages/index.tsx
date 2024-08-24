// ui/src/pages/index.tsx
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
    }
  }, [session, router]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome, {session.user!.name}</h1>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
