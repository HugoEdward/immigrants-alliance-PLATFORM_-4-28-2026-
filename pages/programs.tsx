import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Programs',
    description: 'Explore Immigrants Alliance programs for cultural exchange, nonprofit sustainability, and global community building.',
  },
});

const programs = [
  {
    title: 'S.E.E.D. (Mundus.Center)',
    description: 'Sustainable Economic Empowerment and Development support for organizations building durable revenue and institutional capacity.',
    href: '/join-seed',
    cta: 'Economic Empowerment →',
  },
  {
    title: 'International Cultures Celebration',
    description: 'A week-long annual celebration in NYC — Passport to the World national pavilions, Conference at the UN, Star of Harmony Awards, Presentation of Nations\u2019 Flags, and the Parade. Full restart: June 2027.',
    href: '/international-cultures-celebration',
    cta: 'Explore Celebration',
  },
  {
    title: 'International Cultures–Immigrants Parade',
    description: 'The International Cultures–Immigrants Parade brings communities together for visibility, celebration, and intercultural exchange.',
    href: '/parade-registration',
    cta: 'Register for Parade',
  },
  {
    title: 'Organization Network',
    description: 'A federated alliance connecting cultural, civic, educational, and service organizations across countries and communities.',
    href: '/register-organization',
    cta: 'Join the Network',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80')" }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.94), rgba(27,58,92,.88))' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: '#E8C36A' }}>Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs That Help Communities Thrive</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore practical paths for community empowerment, cultural exchange, nonprofit development, and global collaboration.
          </p>
          <div className="mt-8">
            <Link href="/register" className="btn-gold">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-7">
            {programs.map((program) => (
              <div key={program.title} className="card flex flex-col">
                <h2 className="text-2xl font-bold text-navy mb-3">{program.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-7 flex-1">{program.description}</p>
                <Link href={program.href} className="btn-gold justify-center">{program.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
