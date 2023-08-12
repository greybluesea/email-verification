import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  console.log(session);
  return new Response(JSON.stringify(session));
}
