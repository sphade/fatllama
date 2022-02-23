import "../styles/globals.css";
import "../styles/RotatingText.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="font-display tracking-widest">
      <Component {...pageProps}  />;
    </div>
  );
}

export default MyApp;
