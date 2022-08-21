import "../styles/globals.css";
import "swiper/css/bundle";
import { ParallaxProvider } from "react-scroll-parallax";

function  MyApp({ Component, pageProps }) {
  
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
