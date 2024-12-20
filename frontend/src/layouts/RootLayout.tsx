import Header from "./Header";
import Footer from "./Footer";

type RootLayoutProp = {
    children: React.ReactNode;
}

export function RootLayout({children} : RootLayoutProp){
    return(
        <>
            <Header />
            <div className="py-16 flex justify-center items-center" id="portal-root"></div>
            <>{children}</>
            <Footer/>
        </>
    );
}