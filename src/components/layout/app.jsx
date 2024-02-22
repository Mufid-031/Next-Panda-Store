import Footer from "../fragments/footer"
import Navbar from "../fragments/navbar"

const App = ({ children }) => {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default App