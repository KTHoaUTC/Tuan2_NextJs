import AppAdmin from "@/layouts/admin/LayoutAdmin";
import React from "react";
export default function MyApp({ Component, pageProps }: any) {
  return (
    <AppAdmin>
      <Component {...pageProps} />
    </AppAdmin>
  );
}
