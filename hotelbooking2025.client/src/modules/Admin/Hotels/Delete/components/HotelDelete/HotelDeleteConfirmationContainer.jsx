import HotelDeleteConfirmation from "./HotelDeleteConfirmation";
import request from "@/common/utils/request";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function HotelDeleteConfirmationContainer() {
    const [hotel, setHotel] = useState(null);
    const [status, setStatus] = useState({ inProcess: true, failed: false, fulfilled: false, errorMessage: "", deleted: false });
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchHotel() {
            try {
                const response = await request("/api/hotels/" + id, { method: "GET" });
                if (response.ok) {
                    const result = await response.json();
                    setStatus({ ...status, inProcess: false, failed: false, fulfilled: true });
                    setHotel(result);
                }
                else throw new Error(response.statusText);
            }
            catch (e) {
                setStatus({ inProcess: false, failed: true, fulfilled: false, errorMessage: e.message });
            }
        }

        fetchHotel();
    }, []);

    async function handleConfirmDelete() {
        try {
            const response = await request("/api/hotels/" + id, { method: "DELETE" });
            if (response.ok) {
                setStatus({ ...status, inProcess: false, failed: false, deleted: true });
                setTimeout(function () {
                    navigate("/admin/hotels/index");
                }, 2000);
            }
            else throw new Error(response.statusText);
        }
        catch (e) {
            setStatus({ inProcess: false, failed: true, fulfilled: false, errorMessage: e.message });
        }
    }

    return <HotelDeleteConfirmation
        onConfirmDelete={handleConfirmDelete}
        {...status}
        {...hotel}
    />
}

export default HotelDeleteConfirmationContainer;