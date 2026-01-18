import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "/style.css"

const App = () => {
    console.log(<Header/>)
    return(
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App; 