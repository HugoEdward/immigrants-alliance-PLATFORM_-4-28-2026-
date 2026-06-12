import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#071426] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/IMMIGRANTS_ALLIANCE_Logo.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#f5b21b]">
              One City. Many Cultures. United as One.
            </p>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
              41st International Cultures—
              <span className="block">Immigrants Parade</span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-lg font-semibold text-white/90">
              <span>📅 June 13, 2026 — Tomorrow, Saturday</span>
              <span>📍 New York City</span>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Uniting cultures. Empowering immigrants. Building stronger
              communities through celebration, education, cooperation, and
              economic empowerment.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/2026-parade"
                className="rounded-md bg-[#f5b21b] px-7 py-4 font-bold text-[#071426] shadow-lg hover:bg-[#ffc84a]"
              >
                About the Parade
              </Link>
              <Link
                href="/programs"
                className="rounded-md border border-white/40 px-7 py-4 font-bold text-white hover:bg-white/10"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#10294a] to-[#06101f] shadow-2xl">
            <div className="absolute inset-0 bg-[url('/IMMIGRANTS_ALLIANCE_Logo.jpg')] bg-contain bg-center bg-no-repeat opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="text-2xl font-bold text-[#f5b21b]">
                International Cultures Celebration
              </p>
              <p className="mt-2 text-white/85">
                A world experience in New York City.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-12">
          <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#081d36] shadow-xl md:grid-cols-4">
            {[
              ["41 Years", "of Unity & Culture"],
              ["100+", "Cultures Represented"],
              ["50,000+", "Participants Each Year"],
              ["Stronger Together", "Building Community"],
            ].map(([top, bottom]) => (
              <div key={top} className="border-white/10 p-6 md:border-r">
                <p className="text-2xl font-extrabold text-[#f5b21b]">{top}</p>
                <p className="mt-1 text-white/80">{bottom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-[#071426]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-extrabold">Our Programs</h2>
            <div className="mt-2 h-1 w-14 bg-[#f5b21b]" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                ["Economic Empowerment", "S.E.E.D. support for small businesses and entrepreneurs."],
                ["International Cultures Celebration", "Celebrating diversity through education and events."],
                ["Immigrants Parade", "Uniting communities through our annual parade."],
                ["Global Voices", "Amplifying immigrant stories and leadership."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border bg-white p-6 shadow-sm">
                  <div className="mb-3 text-3xl text-[#f5b21b]">✦</div>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/programs"
              className="mt-6 inline-block rounded-md bg-[#071426] px-6 py-3 font-bold text-white"
            >
              View All Programs →
            </Link>
          </div>

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#f5b21b]">
              Our Mission
            </p>
            <h2 className="mt-2 text-4xl font-extrabold">
              Unite. Empower. Thrive.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-700">
              We are a secular, global, multicultural economic development
              organization in consultative status with the UN ECOSOC since 1989.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-[#071426] shadow-xl">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#14345e] to-[#071426]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-[#071426] shadow-xl">
                  ▶
                </div>
              </div>
              <p className="p-5 text-xl font-bold text-white">
                Celebrating Diversity. Building Community.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold">Our Impact</h2>
            <div className="mt-2 h-1 w-14 bg-[#f5b21b]" />

            <div className="mt-8 space-y-6">
              {[
                ["50,000+", "Participants Every Year"],
                ["100+", "Cultures Represented"],
                ["41", "Years of Service"],
                ["UN ECOSOC", "Consultative Status since 1989"],
              ].map(([top, bottom]) => (
                <div key={top} className="flex gap-4">
                  <div className="text-3xl text-[#f5b21b]">●</div>
                  <div>
                    <p className="text-2xl font-extrabold text-[#f5b21b]">{top}</p>
                    <p className="text-slate-700">{bottom}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/programs"
              className="mt-8 inline-block rounded-md bg-[#071426] px-6 py-3 font-bold text-white"
            >
              Get Involved →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#071426] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold text-[#f5b21b]">
            Immigrants Are the Spirit of the World
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/85">
            Immigrants Alliance celebrates the dignity, culture, courage, and
            contribution of communities from every part of the world.
          </p>
        </div>
      </section>
    </main>
  );
}
