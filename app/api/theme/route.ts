import { cookies } from "next/headers";

export async function POST(req: Request) {
  const origin = req.headers.get("origin");

  const { theme } = await req.json();

  cookies().set("theme", theme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365 * 10,
    sameSite: "lax",
    httpOnly: true,
    secure: !origin?.includes("localhost"),
  });

  return Response.json({});
}
