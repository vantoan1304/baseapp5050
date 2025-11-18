export async function GET() {
  return new Response(
    JSON.stringify({
      accountAssociation: {
        header: "eyJmaWQiOjIxNjM1OCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDg4MzgzNGYwNTMyNTRhNGE3OUEwNmYzMmNGQ2RGNThFZTNCNDgxOUUifQ",
        payload: "eyJkb21haW4iOiJiYXNlYXBwNTA1MC52ZXJjZWwuYXBwIn0",
        signature: "DOGoI+ueFCpcU8kLtHr6FZNbiKz1M2GrrfbjVIIjHuZUhCAjtAl/TOe2Qg51VkJh9pw7us98nBWt6uvo1xp+Pxw="
      },

      miniApp: {
        version: 1,
        id: "5050",
        name: "5050taixiu",
        description: "A 50-50 TaiXiu style lottery game.",
        iconUrl: "https://baseapp5050.vercel.app/5050.png",
        homeUrl: "https://baseapp5050.vercel.app/",
        splashImageUrl: "https://baseapp5050.vercel.app/5050.png",
        splashBackgroundColor: "#000000",
        tagline: "Play instantly",
        ogTitle: "5050 Mini App",
        ogDescription: "Challenge friends in real time.",
        ogImageUrl: "https://baseapp5050.vercel.app/5050.png"
      }
    }),
    {
      headers: {
      "Content-Type": "application/json",
      "X-Frame-Options": "ALLOWALL",
      "Access-Control-Allow-Origin": "*",
      "Content-Security-Policy": "frame-ancestors *;",
    }
    }
  );
}
