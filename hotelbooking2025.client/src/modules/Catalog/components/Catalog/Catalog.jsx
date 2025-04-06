import Search from '../Search';
import { Spinner, Alert } from 'react-bootstrap';

function Catalog({ inProcess, hotelsList, failed, fulfilled }) {
    let hotelsResult;
    if (inProcess) {
        hotelsResult = <div>
            <Spinner animation="border" />
        </div>;
    } else if (failed) {
        hotelsResult = <div>
            <Alert variant="danger">
                <Alert.Heading>Loading failed</Alert.Heading>
            </Alert>
        </div>;
    } else if (!fulfilled) {
        hotelsResult = null;
    } else if (hotelsList.length > 0) {
        const markupList = hotelsList.map(hotel => <li key={hotel.name} className="list-group-item d-flex align-items-center">
            <div className="image-parent" style={{ maxWidth: "100px", maxHeight: "100px" }} >
                <img src={hotel.image} className="img-fluid" alt="lay" />
            </div>
            <div className="ms-4" >
                <h2><a href="/inactive" onClick={(e) => { e.preventDefault(); onClick(hotel.id) }}>{hotel.name}</a></h2>
                <h6>{hotel.locality}, {hotel.country}</h6>
            </div>
            <div style={{ position: "absolute", right: "20px" }} >
                <button type="button" onClick={(e) => onClick(hotel.id)} className="btn btn-primary" >Details</button>
            </div>
        </li>);
        hotelsResult = <ul className="list-group">{markupList}</ul>;
    } else {
        hotelsResult = <Alert variant="info"><Alert.Heading>There are no matching offers</Alert.Heading></Alert>;
    }
    return <div>
        <Search />
        <br />
        {hotelsResult}
    </div>;
}

export default Catalog;