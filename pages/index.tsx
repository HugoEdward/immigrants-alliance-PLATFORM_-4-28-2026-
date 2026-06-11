import Link from "next/link";
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => ({
props: {
title: "Immigrants Are the Spirit of the World - International Cultures-Immigrants Parade",
description:
"41st International Cultures-Immigrants Parade: Saturday, June 13, 2026, 11:00 AM, Avenue of the Americas, 42nd to 57th Street, New York City.",
schema: [
{
"@context": "https://schema.org",
"@type": "Event",
name: "41st International Cultures-Immigrants Parade",
startDate: "2026-06-13T11:00:00-04:00",
endDate: "2026-06-13T16:00:00-04:00",
eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
eventStatus: "https://schema.org/EventScheduled",
location: {
"@type": "Place",
name: "Avenue of the Americas",
address: {
"@type": "PostalAddress",
streetAddress: "Avenue of the Americas, 42nd to 57th Street",
addressLocality: "New York",
addressRegion: "NY",
addressCountry: "US",
},
},
organizer: {
"@type": "Organization",
name: "Immigrants Alliance",
url: "https://immigrantsalliance.org",
},
description:
"A moving cultural showcase where national and cultural contingents parade, perform, dance, exhibit, and celebrate the contributions immigrant communities bring to the United States.",
image: "https://immigrantsalliance.org/IMMIGRANTS_ALLIANCE_Logo.jpg",
isAccessibleForFree: true,
},
{
"@context": "https://schema.org",
"@type": "NGO",
name: "Immigrants Alliance",
url: "https://immigrantsalliance.org",
foundingDate: "1976",
areaServed: "Worldwide",
memberOf: {
"@type": "Organization",
name: "United Nations ECOSOC",
},
},
],
},
});

export default function HomePage() {
return (
<>
<section
className="relative overflow-hidden text-white"
style={{
minHeight: "100vh",
display: "flex",
alignItems: "center",
background:
"linear-gradient(135deg, #0A1628 0%, #1B3A5C 25%, #0E7C6B 50%, #C9A84C 75%, #C0392B 100%)",
backgroundSize: "400% 400%",
animation: "gradientShift 12s ease infinite",
}}
>
<div
className="absolute inset-0"
style={{
background:
"radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.16), transparent 70%)",
}}
/>

```
    <style jsx>{`
      @keyframes gradientShift {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      @keyframes pulse {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
      <div className="text-center max-w-4xl mx-auto">
        <div
          className="inline-block mb-6"
          style={{ animation: "pulse 2s ease infinite" }}
        >
          <div className="bg-red-600 text-white px-8 py-3 rounded-full text-lg md:text-xl font-black tracking-wide uppercase shadow-2xl border-2 border-red-400">
            THIS SATURDAY - JUNE 13
          </div>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{
            fontFamily: "Playfair Display, serif",
            animation: "fadeInUp 0.8s ease",
          }}
        >
          Immigrants Are
          <br />
          <span
            className="text-gold-light"
            style={{ textShadow: "0 0 40px rgba(201,168,76,0.4)" }}
          >
            the Spirit of the World.
          </span>
        </h1>

        <div
          className="space-y-2 mb-8"
          style={{ animation: "fadeInUp 1s ease" }}
        >
          <p className="text-xl md:text-2xl font-bold text-white/90">
            The Engine of the Economy of Every Developed Nation.
          </p>
          <p className="text-lg md:text-xl text-gold-light font-semibold italic">
            Let us showcase this Saturday - our strength together.
          </p>
        </div>

        <div
          className="bg-white/10 backdrop-blur-sm border border-gold/40 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8"
          style={{ animation: "fadeInUp 1.2s ease" }}
        >
          <div
            className="text-3xl md:text-4xl font-black text-gold-light mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            41st International Cultures-Immigrants Parade
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mt-6">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wide text-white/60">
                Date
              </div>
              <div className="text-white font-bold text-lg">Saturday</div>
              <div className="text-gold-light text-sm font-semibold">
                June 13, 2026
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm uppercase tracking-wide text-white/60">
                Time
              </div>
              <div className="text-white font-bold text-lg">11:00 AM</div>
              <div className="text-gold-light text-sm font-semibold">
                Step-off
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm uppercase tracking-wide text-white/60">
                Location
              </div>
              <div className="text-white font-bold text-lg">
                Avenue of the Americas
              </div>
              <div className="text-gold-light text-sm font-semibold">
                42nd to 57th Street
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <span className="text-white/60 text-sm">
              Midtown Manhattan, New York City
            </span>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/60 text-sm">
              Free for Member Organizations
            </span>
          </div>
        </div>

        <div
          className="flex gap-4 justify-center flex-wrap mb-8"
          style={{ animation: "fadeInUp 1.4s ease" }}
        >
          <Link
            href="/parade-registration"
            className="bg-gold text-navy px-8 py-4 rounded-xl font-black text-lg no-underline hover:bg-gold-light transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
          >
            Register for the Parade
          </Link>

          <Link
            href="/register-organization"
            className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-white/20 hover:border-gold transition-all"
          >
            Register Your Organization
          </Link>

          <Link
            href="/join-seed"
            className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-white/20 hover:border-gold transition-all"
          >
            Economic Empowerment
          </Link>
        </div>

        <p className="text-white/50 text-sm mt-4">
          Since 1976 - UN ECOSOC consultative status since 1989 - 190+
          countries
        </p>
      </div>
    </div>
  </section>

  <section className="bg-gold py-8">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="text-navy text-lg md:text-xl font-bold leading-relaxed">
        Immigrants from all cultural backgrounds, including Iranians,
        Palestinians, Tibetans, Taiwanese, Lebanese, and communities from
        every nation, territory, culture, and diaspora, are encouraged to
        participate.
      </p>
      <Link
        href="/register"
        className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-bold text-sm mt-4 no-underline hover:opacity-90"
      >
        Join Free - First 1,000,000 Founding Members
      </Link>
    </div>
  </section>

  <section className="bg-navy border-b-[3px] border-gold">
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { n: "190+", l: "Countries" },
        { n: "1976", l: "Founded" },
        { n: "41", l: "Annual Parades" },
        { n: "UN", l: "ECOSOC Status" },
      ].map((s) => (
        <div key={s.l} className="text-center">
          <div
            className="text-3xl md:text-4xl font-extrabold text-gold-light"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {s.n}
          </div>
          <div className="text-[0.65rem] opacity-80 uppercase tracking-widest text-white mt-1">
            {s.l}
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-navy"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Who should parade, perform, and represent their culture?
        </h2>
        <p className="text-gray-600 mt-3">
          Every national and cultural community deserves to be seen,
          respected, and celebrated.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "Consulates and Permanent Missions",
          "Cultural and business attaches",
          "Socio-cultural organizations",
          "National federations",
          "Community associations",
          "Immigrant organizations",
          "Diaspora organizations",
          "Soccer and futbol clubs",
          "Youth teams",
          "Dance and folklore groups",
          "Bands and music groups",
          "Cultural schools",
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          >
            <p className="font-bold text-navy">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-warm py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gold-dark uppercase tracking-widest text-sm font-bold mb-3">
            Economic Empowerment
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Your organization deserves more than survival.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Immigrants Alliance is building a member-benefits network with
            local merchants, professional service providers, national
            brands, and future corporate partners.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The goal is to help immigrant families and participating
            organizations gain access to practical everyday savings,
            services, opportunities, and community support.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3
            className="text-2xl font-bold text-navy mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Economic Empowerment through S.E.E.D.
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>Organization membership activation</li>
            <li>MundusPASS merchant and member ecosystem</li>
            <li>Passport to the World participation</li>
            <li>National pavilion and sponsorship opportunities</li>
            <li>Long-term sustainable income pathways</li>
          </ul>
          <Link
            href="/join-seed"
            className="inline-block mt-6 bg-gold text-navy px-6 py-3 rounded-lg font-bold no-underline"
          >
            Explore Economic Empowerment
          </Link>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-navy py-16 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2
          className="text-3xl font-bold text-gold-light"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Choose your path.
        </h2>
        <p className="text-white/60 text-sm mt-2">
          Whether you lead an organization, serve a community, operate a
          business, or want to participate, there is a place for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            t: "Organizations",
            d: "Join the federation, access Economic Empowerment, and participate in Celebration programs.",
            href: "/register-organization",
            cta: "Register Organization",
          },
          {
            t: "Parade",
            d: "Represent your nation, culture, community, music, dance, language, and traditions.",
            href: "/parade-registration",
            cta: "Parade Registration",
          },
          {
            t: "Economic Empowerment",
            d: "Build sustainable systems through membership, merchants, Passport to the World, and MundusPASS.",
            href: "/join-seed",
            cta: "Apply",
          },
          {
            t: "Celebration",
            d: "Explore the International Cultures Celebration, national pavilions, conference, awards, and Parade.",
            href: "/international-cultures-celebration",
            cta: "Explore",
          },
        ].map((p) => (
          <Link
            key={p.t}
            href={p.href}
            className="bg-white/[0.04] border border-white/10 rounded-xl p-6 no-underline hover:border-gold/50 transition-all group"
          >
            <h3
              className="text-base font-bold text-gold-light mb-2 group-hover:text-white transition-colors"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {p.t}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              {p.d}
            </p>
            <span className="text-gold text-xs font-semibold">{p.cta}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-warm py-14">
    <div className="max-w-3xl mx-auto px-6">
      <h2
        className="text-2xl font-bold mb-6 text-navy text-center"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Why every city needs immigrants.
      </h2>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>
          In every country where birth rates are falling and populations are
          aging, immigrants keep hospitals staffed, schools open, farms
          productive, and businesses growing.
        </p>
        <p>
          The restaurant you love was probably started by an immigrant. The
          nurse who cared for your family may have trained in another
          country. The engineer designing your city&apos;s next bridge may
          have crossed a border before building your future.
        </p>
        <p className="font-semibold text-navy">
          If you are a citizen reading this, welcome your immigrant
          neighbors. If you are an immigrant reading this, you are already
          home.
        </p>
      </div>
    </div>
  </section>

  <section className="py-14">
    <div className="max-w-7xl mx-auto px-6">
      <h2
        className="text-2xl font-bold mb-6 text-navy text-center"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Know before you go.
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {[
          {
            t: "Safety Map",
            d: "Red means danger. Yellow means caution. Green means safer. Check each city for guidance.",
            href: "/live/danger-map",
            cta: "Open Map",
          },
          {
            t: "Discrimination Monitor",
            d: "Community-reported incidents by city, type, and severity.",
            href: "/live/discrimination",
            cta: "View Reports",
          },
          {
            t: "Safer Destinations",
            d: "Compare cities by safety, support services, and community strength.",
            href: "/live/safe-cities",
            cta: "Find Places",
          },
        ].map((item) => (
          <div key={item.t} className="card flex flex-col">
            <h3
              className="text-xl font-bold mb-2 text-navy"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {item.t}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
              {item.d}
            </p>
            <Link
              href={item.href}
              className="btn-gold justify-center text-sm"
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section
    className="py-16 text-white text-center"
    style={{
      background: "linear-gradient(135deg, #0A1628, #1B3A5C, #0E7C6B)",
    }}
  >
    <div className="max-w-3xl mx-auto px-6">
      <h2
        className="text-3xl md:text-4xl font-black mb-4"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        This Saturday, we showcase our cultures together.
      </h2>
      <p className="text-xl text-gold-light font-bold mb-2">
        June 13 - 11:00 AM - Avenue of the Americas - 42nd to 57th Street
      </p>
      <p className="text-white/70 mb-8 max-w-md mx-auto text-sm">
        190+ countries. Every language. Every faith. Every background. All
        welcome.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/parade-registration"
          className="bg-gold text-navy px-8 py-4 rounded-xl font-black text-lg no-underline hover:bg-gold-light transition-all shadow-lg"
        >
          Register for the Parade
        </Link>
        <Link
          href="/register"
          className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg no-underline hover:bg-white/20 transition-all"
        >
          Join Free
        </Link>
      </div>
    </div>
  </section>
</>
```

);
}
