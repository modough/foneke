import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"


const HeaderFooterLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default HeaderFooterLayout