import Home from "@/modules/Home/components/Home";
import Catalog from "@/modules/Catalog/components/Catalog";
import Footer from "@/common/components/Footer";
import About from "@/common/components/About";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "@/common/components/Navigation";
import { StoreProvider } from "@/store";
import "./App.css";
import AppWeather from "@/AppWeather";
import { Container } from "react-bootstrap";

export default function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Navigation />
                <main role="main" class="pt-4">
                    <Container>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/two" element={<AppWeather></AppWeather>} />
                            <Route path="/three" element={<h3>LOL3</h3>} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </BrowserRouter>
        </StoreProvider>
    );
}