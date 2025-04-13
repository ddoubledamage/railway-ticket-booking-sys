import './App.css'
import HomePage from './pages/HomePage.jsx'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="min-h-screen w-full max-w- flex flex-col bg-white">
            <Header/>
            <main className="flex flex-grow pt-36 ">
               <HomePage/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;