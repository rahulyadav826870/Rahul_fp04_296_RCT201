import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <h1>Navbar</h1>
      <hr />
      <Component {...pageProps} />
    </main>
  );
}
export default MyApp;
