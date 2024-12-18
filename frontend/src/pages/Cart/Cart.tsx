import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import CartTable from "./CartTable";

export default function Cart() {
  return (
    <>
      <Header />
      <div className="section-container py-24 px-4 md:px-4 min-h-screen">
        <CartTable />
      </div>
      <Footer />
    </>
  );
}
