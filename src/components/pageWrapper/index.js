import { Footer } from "../footer";
import { Header } from "../header";

export function PageWrapper({ component }) {
  const Component = component;
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
