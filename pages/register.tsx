import Link from 'next/link';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    title: 'Register',
    description: 'Join Immigrants Alliance. First 1,000,000 Founding Members join free for life. Choose your path: individual membership, organization registration, S.E.E.D. program, or parade participation.',
  },
});

const registrationOptions = [
  {
    title: 'Individual or Family',
    description: 'Create a personal account to stay connected with Immigrants Alliance programs, events, and opportunities.',
    href: '/signup',
    cta: 'Create Account',
  },
  {
    title: 'Organization',
    description: 'Register your cultural, civic, nonprofit, educational, or professional organization with the global Alliance.',
    href: '/register-organization',
    cta: 'Register Organization',
  },
  {
    title: 'Parade Delegation',
    description: 'Reserve your place for the 41st International Cultures–Immigrants Parade in New York City.',
    href: '/parade-registration',
    cta: 'Register for Parade',
  },
];

export default function RegisterPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&q=80')" }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,.94), rgba(14,124,107,.82))' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="section-label" style={{ color: '#E8C36A' }}>Registration</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Path to Join</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Start with the registration option that fits you best, whether you are joining as an individual, enrolling an organization, or preparing for a major Alliance event.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-outline">Ask a Registration Question</Link>
          </div>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-7">
            {registrationOptions.map((option) => (
              <div key={option.title} className="card flex flex-col">
                <h2 className="text-2xl font-bold text-navy mb-3">{option.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-7 flex-1">{option.description}</p>
                <Link href={option.href} className="btn-gold justify-center">{option.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
