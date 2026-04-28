import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const pageTitle = title
    ? `${title} — Immigrants Alliance`
    : 'Immigrants Alliance — Unite. Empower. Thrive.';
  const pageDesc = description || 'Nonpartisan, secular global multicultural economic development organization. UN ECOSOC Consultative Status since 1989.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
