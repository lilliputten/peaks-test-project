import { AppProps } from 'next/app';

import '@/global/global-includes';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
