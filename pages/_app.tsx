// import "../styles/globals.css";
// import Header from "../components/Header";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Header />
//       <Component {...pageProps} />
//     </>
//   );
// }

// pages/_app.tsx
import Layout from '../components/layout'; // Import the Layout component
import '../styles/globals.css'; // Import global styles (if needed)

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/* This is where the specific page content will go */}
    </Layout>
  );
}

export default MyApp;
