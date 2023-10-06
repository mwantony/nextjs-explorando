import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Component {...pageProps}></Component>;
    </>
  );
}

export default MyApp;
