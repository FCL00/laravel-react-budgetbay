import Header from "./Header";
import Footer from "./Footer";

type RootLayoutProp = {
    children: React.ReactNode;
}

export function RootLayout({children} : RootLayoutProp){
    return(
        <>
            <Header />
            <>{children}</>
            <Footer/>
        </>
    );
}