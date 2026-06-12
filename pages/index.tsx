import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "#0b1633",
          color: "white",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          International Cultures Celebration &
          <br />
          Immigrants Parade
        </h1>

        <p style={{ fontSize: "1.3rem" }}>
          Saturday, June 13, 2026 · New York City
        </p>

        <p
          style={{
            maxWidth: "900px",
            margin: "30px auto",
            lineHeight: "1.8",
          }}
        >
          Uniting cultures. Empowering immigrants. Building stronger
          communities through celebration, education, cooperation,
          and economic empowerment.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link
            href="/parade-registration"
            style={{
              background: "#d4a017",
              color: "#000",
              padding: "15px 25px",
              marginRight: "15px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            Register for the Parade
          </Link>

          <Link
            href="/about"
            style={{
              border: "1px solid white",
              color: "white",
              padding: "15px 25px",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          padding: "40px",
          flexWrap: "wrap",
          background: "#f5f5f5",
        }}
      >
        <div><strong>41 Years</strong><br />Unity & Culture</div>
        <div><strong>100+</strong><br />Cultures</div>
        <div><strong>50,000+</strong><br />Participants</div>
        <div><strong>UN ECOSOC</strong><br />Consultative Status</div>
      </section>

      {/* Programs */}
      <section style={{ padding: "70px 40px", textAlign: "center" }}>
        <h2>Our Programs</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "40px auto",
          }}
        >
          <div>
            <h3>Economic Empowerment</h3>
            <p>S.E.E.D. Sustainable Economic Empowerment & Development.</p>
          </div>

          <div>
            <h3>International Cultures Celebration</h3>
            <p>Celebrating cultural diversity and cooperation.</p>
          </div>

          <div>
            <h3>Immigrants Parade</h3>
            <p>One of New York City's unique multicultural traditions.</p>
          </div>

          <div>
            <h3>Global Voices</h3>
            <p>Sharing immigrant stories, leadership and success.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0b1633",
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h2>Be Part of Something Bigger</h2>

        <p>
          Join us in celebrating diversity, intercultural harmony,
          and economic empowerment.
        </p>

        <Link
          href="/register"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#d4a017",
            color: "#000",
            padding: "15px 30px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Join Now
        </Link>
      </section>
    </main>
  );
}
