import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log(
    '%c Not Actually Hulu ',
    'color: #ffff0; background: #0F222C; font-size: 20px; font-weight: bold; border-radius: 10px; padding: 5px 15px;'
  );
  console.log(
    '%c Developed by Andrew Yang with Next.js',
    'color: darkgreen; font-style: italic; border: 1px solid white; padding: 5px 10px; border-radius: 20px'
  );

  return <Component {...pageProps} />;
}

export default MyApp;
