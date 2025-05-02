import Pagination from "./Pagination";
import HotelsRows from "./HotelsRows";
import HotelsFilter from "./HotelsFilter";

function HotelsList({
    hotels,
    page,
    pageNum,
    onNextPage,
    onPrevPage,
    onNameSort,
    onLocationSort,
    onStarsSort
}) {
    return <>
        <h2>Hotels</h2>
        <hr />
        <HotelsFilter />
        <HotelsRows
            page={page}
            hotels={hotels}
            onNameSort={onNameSort}
            onLocationSort={onLocationSort}
            onStarsSort={onStarsSort} />
        <Pagination page={page} pageNum={pageNum} onNextPage={onNextPage} onPrevPage={onPrevPage} />
    </>
}

export default HotelsList;