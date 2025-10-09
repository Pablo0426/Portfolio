export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Uses() {
  return (
    <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Uses</h1>
        <p>This page lists the tools and equipment I use.</p>
      </main>
      <Footer />
    </div>
  );
}
