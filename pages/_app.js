import "../sass/main.scss";
import { AuthProvider } from "../auth/auth";
import magicpulse from "magic-pulse";
magicpulse("project-manager-1");
export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
