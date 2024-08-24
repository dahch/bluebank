// ui/src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

import { ReactNode, ComponentType } from "react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: ComponentType<any>;
  pageProps: { session: any; [key: string]: any };
}): ReactNode {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
