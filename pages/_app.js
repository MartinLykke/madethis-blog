import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/custom.scss";
import { LoginProvider } from "../contexts/LoginContext";
function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginProvider>
  );
}

export default MyApp;
