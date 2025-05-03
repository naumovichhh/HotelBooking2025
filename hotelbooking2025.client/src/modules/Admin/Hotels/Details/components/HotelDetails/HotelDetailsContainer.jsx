import HotelDetails from "./HotelDetails";
import request from "@/common/utils/request";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function HotelDetailsContainer() {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [status, setStatus] = useState({ inProcess: true, failed: false, fulfilled: false, errorMessage: "" });
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);

    useEffect(() => {
        async function fetchHotel() {
            try {
                const response = await request("/api/hotels/" + id, { method: "GET" });
                if (response.ok) {
                    const jsonResult = await response.json();
                    setStatus({ inProcess: false, failed: false, fulfilled: true });
                    setHotel(jsonResult);
                }
                else {
                    throw new Error(response.statusText);
                }
            }
            catch (e) {
                setStatus({ inProcess: false, failed: true, fulfilled: false, errorMessage: e.message });
            }
        }

        fetchHotel();
    }, []);

    function handleFullScreenImageToggle() {
        setShowFullScreenImage(f => !f);
    }

    return <HotelDetails
        {...hotel}
        {...status}
        onFullScreenImageToggle={handleFullScreenImageToggle}
        showFullScreenImage={showFullScreenImage}
    />
}

export default HotelDetailsContainer;