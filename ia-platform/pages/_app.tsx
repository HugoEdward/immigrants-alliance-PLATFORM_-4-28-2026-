import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { title, description, ...rest } = pageProps;
  return (
    <Layout title={title} description={description}>
      <Component {...rest} />
    </Layout>
  );
}
