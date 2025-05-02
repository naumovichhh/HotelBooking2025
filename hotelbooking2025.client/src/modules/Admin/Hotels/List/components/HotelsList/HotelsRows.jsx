import { pageSize } from "./Pagination";
import { Link } from "react-router-dom";

function HotelsRows({
    page,
    hotels,
    onNameSort,
    onLocationSort,
    onStarsSort
}) {
    return <table className="table table-fixed">
        <thead><tr>
            <th style={{ width: "40%" }} onClick={onNameSort}>Name</th>
            <th style={{ width: "32%" }} onClick={onLocationSort}>Location</th>
            <th style={{ width: "10%" }} onClick={onStarsSort}>Stars</th>
            <th style={{ width: "18%" }}></th>
        </tr></thead>
        <tbody>
            {
                hotels?.slice((page - 1) * pageSize, page * pageSize).map((hotel, i) => <tr key={hotel.id}>
                    <td><span className="text-truncate d-block">{hotel.name}</span></td>
                    <td><span className="text-truncate d-block">{hotel.country}, {hotel.locality}</span></td>
                    <td>{hotel.stars}</td>
                    <td><Link to={"/admin/hotels/edit/" + hotel.id}>Edit</Link>{" "}|{" "
                        }<Link to={"/admin/hotels/details/" + hotel.id}>Details</Link>{" "}|{" "
                        }<Link to={"/admin/hotels/delete/" + hotel.id}>Delete</Link></td>
                </tr>)
            }
        </tbody>
    </table>;
}

export default HotelsRows;