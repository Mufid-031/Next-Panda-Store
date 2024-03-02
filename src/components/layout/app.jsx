import Footer from "../fragments/footer"
import Navbar from "../fragments/navbar"

const App = ({ children }) => {

    return (
        <div className="overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default App