import { useState, useContext, useEffect } from "react";
import HotelsList from "./HotelsList";
import HotelsContext from "@/store/contexts/HotelsContext";
import { fetchHotels } from "@/store/actions/hotels";
import { pageSize } from "./Pagination";

const SORT_VARIANTS = {
    NAME_ASC: "NAME_ASC",
    NAME_DESC: "NAME_DESC",
    LOCATION_ASC: "LOCATION_ASC",
    LOCATION_DESC: "LOCATION_DESC",
    STARS_ASC: "STARS_ASC",
    STARS_DESC: "STARS_DESC"
};

let currentSort = "";

function HotelsListContainer() {
    const [page, setPage] = useState(1);
    const [hotels, setHotels] = useState(null);
    const { dispatch: dispatchHotels, state: hotelsState } = useContext(HotelsContext);
    let pageNum = hotels?.length != null ? Math.ceil(hotelsState.list.length / pageSize) : null;
    useEffect(() => {
        fetchHotels(dispatchHotels);
    }, []);
    useEffect(() => {
        setHotels(hotelsState?.list?.slice(0).sort((a, b) =>
            -a.name.localeCompare(b.name)));
        currentSort = SORT_VARIANTS.NAME_DESC;
    }, [hotelsState]);

    function handleNextPage() {
        setPage(page + 1);
    }

    function handlePrevPage() {
        setPage(page - 1);
    }

    function handleNameSort() {
        let newHotels = hotels?.slice(0).sort((a, b) => -a.name.localeCompare(b.name));
        if (currentSort == SORT_VARIANTS.NAME_DESC) {
            newHotels.reverse();
            currentSort = SORT_VARIANTS.NAME_ASC;
        }
        else {
            currentSort = SORT_VARIANTS.NAME_DESC;
        }

        setHotels(newHotels);
        setPage(1);
    }

    function handleLocationSort() {
        let newHotels = hotels?.slice(0).sort((a, b) => -(a.country + a.locality).localeCompare(b.country + b.locality));
        if (currentSort == SORT_VARIANTS.LOCATION_DESC) {
            newHotels.reverse();
            currentSort = SORT_VARIANTS.LOCATION_ASC;
        }
        else {
            currentSort = SORT_VARIANTS.LOCATION_DESC;
        }

        setHotels(newHotels);
        setPage(1);
    }

    function handleStarsSort() {
        let newHotels = hotels?.slice(0).sort((a, b) => -(a.stars - b.stars));
        if (currentSort == SORT_VARIANTS.STARS_DESC) {
            newHotels.reverse();
            currentSort = SORT_VARIANTS.STARS_ASC;
        }
        else {
            currentSort = SORT_VARIANTS.STARS_DESC;
        }

        setHotels(newHotels);
        setPage(1);
    }

    return <HotelsList
        page={page}
        pageNum={pageNum}
        hotels={hotels}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onNameSort={handleNameSort}
        onLocationSort={handleLocationSort}
        onStarsSort={handleStarsSort}
    />
}

export default HotelsListContainer;