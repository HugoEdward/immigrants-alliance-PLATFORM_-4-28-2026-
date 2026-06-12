import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Immigrants Alliance</h1>
      <h2>International Cultures Celebration & Immigrants Parade</h2>
      <p>Saturday, June 13, 2026 · New York City</p>
      <Link href="/parade-registration">Register for the Parade</Link>
    </div>
  );
}
