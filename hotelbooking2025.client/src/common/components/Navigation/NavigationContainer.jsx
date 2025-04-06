import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { useAuth } from "@/store";

function NavigationContainer() {
    const navigate = useNavigate();
    const { state: auth } = useAuth();

    const onSelect = (key, e) => {
        e.preventDefault();
        navigate(`/${key}`);
    };

    return <Navigation onSelect={onSelect} auth={auth} />;
}

export default NavigationContainer;