import Header from "@/layouts/Header"
import Banner from "./Banner"
import CategorySection from "./CategorySection";
import Menu from "@/pages/Home/Menu";
import Footer from "@/layouts/Footer";
const Home = () => {
  return (
    <>
        <Header/>
        <div className="px-4">
          <Banner />
          <section className="section-container">
            <CategorySection />
            <Menu />
          </section>
        </div>
        <Footer />
    </>
    
  )
}

export default Home