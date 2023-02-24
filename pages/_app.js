import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
