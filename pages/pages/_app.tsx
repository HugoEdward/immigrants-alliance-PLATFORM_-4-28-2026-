import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import 'leaflet/dist/leaflet.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { title, description, schema, breadcrumbs, ...rest } = pageProps;
  return (
    <Layout title={title} description={description} schema={schema} breadcrumbs={breadcrumbs}>
      <Component {...rest} />
    </Layout>
  );
}
