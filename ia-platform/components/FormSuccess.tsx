import Link from 'next/link';

interface Props {
  title: string;
  message: string;
  backLink: string;
  backLabel: string;
}

export default function FormSuccess({ title, message, backLink, backLabel }: Props) {
  return (
    <div className="text-center py-16 px-6">
      <div className="text-6xl mb-6">✅</div>
      <h2 className="text-3xl font-bold text-navy mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h2>
      <p className="text-gray-500 max-w-md mx-auto mb-8">{message}</p>
      <Link href={backLink} className="btn-gold">{backLabel}</Link>
    </div>
  );
}
