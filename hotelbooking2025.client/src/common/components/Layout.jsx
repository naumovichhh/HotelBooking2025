import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "@/common/components/Navigation";
import Footer from "@/common/components/Footer";

function Layout() {
    return <>
        <Navigation />
        <main role="main" className="pt-4">
            <Container>
                <Outlet />
            </Container>
        </main>
        <Footer />
    </>;
}

export default Layout;