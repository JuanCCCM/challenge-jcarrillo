import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <section className="grid min-h-screen place-items-center p-16">
      <div className="flex max-w-sm items-center border-l-8 border-red-600 p-4 shadow-lg">
        <div className="min-w-0">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
            This is a protected route.
            <br />
            You will only see this if you are authenticated
          </h2>
        </div>
      </div>
    </section>
  );
}
