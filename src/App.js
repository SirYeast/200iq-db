import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router";
import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import Header from './components/Header';
import New from './components/New';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

export default function App() {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" exact element={<Catalog />} />
                    <Route path="/character/:id" element={<Detail />} />
                    <Route path="/new" exact element={<New />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </HelmetProvider>
    );
}