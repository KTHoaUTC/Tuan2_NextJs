import AppAdmin from "@/layouts/admin/LayoutAdmin";
export default function IndexApp({ Component, pageProps }: any) {
  return (
    <AppAdmin>
      <Component {...pageProps} />
    </AppAdmin>
  );
}
