import { Spinner, Alert } from "react-bootstrap";
import FullScreenImage from "./FullScreenImage";

function HotelDetails({
    id,
    name,
    country,
    locality,
    description,
    stars,
    image: picture,
    inProcess,
    failed,
    fulfilled,
    showFullScreenImage,
    onFullScreenImageToggle
}) {
    if (inProcess)
        return <Spinner animation="border" />;
    if (failed)
        return <Alert variant="danger">
            <Alert.Heading>Loading failed</Alert.Heading>
        </Alert>;

    if (fulfilled)
        return <>
            <h2>Details</h2>
            <hr />
            <dl className="row">
                <dt className="col-sm-2">Id</dt>
                <dd className="col-sm-10">{id}</dd>
                <dt className="col-sm-2">Name</dt>
                <dd className="col-sm-10">{name}</dd>
                <dt className="col-sm-2">Country</dt>
                <dd className="col-sm-10">{country}</dd>
                <dt className="col-sm-2">Locality</dt>
                <dd className="col-sm-10">{locality}</dd>
                <dt className="col-sm-2">Description</dt>
                <dd className="col-sm-10">{description}</dd>
                <dt className="col-sm-2">Stars</dt>
                <dd className="col-sm-10">{stars}</dd>
                <dt className="col-2">Picture</dt>
                <dd className="col-4 col-md-2">
                    <img
                        className="img-fluid"
                        src={"/img/" + picture}
                        onClick={onFullScreenImageToggle}
                        style={{ cursor: "pointer" }}
                    />
                </dd>
            </dl>

            {showFullScreenImage && <FullScreenImage src={"/img/" + picture} onClose={onFullScreenImageToggle} />}
        </>;
}

export default HotelDetails;