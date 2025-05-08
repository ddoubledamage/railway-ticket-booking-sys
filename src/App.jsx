import {Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage.jsx'
import MainLayout from "./layouts/MainLayout.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import PassengersInfoPage from "./pages/PassengersInfoPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="search/*" element={<SearchPage />}/>
                <Route path="passengers" element={<PassengersInfoPage />}/>
                <Route path="payment" element={<PaymentPage />}/>
                <Route path="confirmation" element={<ConfirmationPage />}/>
                <Route path="success" element={<SuccessPage />}/>
            </Route>
        </Routes>
    )
}

export default App;