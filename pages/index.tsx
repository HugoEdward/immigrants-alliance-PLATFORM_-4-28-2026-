import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Immigrants Alliance</h1>
      <p>Test Home Page</p>

      <Link href="/register">
        Register
      </Link>
    </div>
  );
}
