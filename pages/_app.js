import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Splitbee to track link clicks (only counter, not storing any links)
  if (typeof window !== 'undefined') {
    window.splitbee?.track('Link Click');
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
