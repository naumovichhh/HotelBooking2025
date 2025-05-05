import { Spinner, Alert } from "react-bootstrap";
import FullScreenImage from "./FullScreenImage";
import { useNavigate } from "react-router-dom";

function HotelDetails({
    id,
    name,
    country,
    locality,
    description,
    stars,
    address,
    image: picture,
    inProcess,
    failed,
    fulfilled,
    showFullScreenImage,
    onFullScreenImageToggle,
    errorMessage
}) {
    let content;
    const navigate = useNavigate();
    if (inProcess)
        content = <Spinner animation="border" />;
    if (failed)
        content = <Alert variant="danger">
            <Alert.Heading>{errorMessage}</Alert.Heading>
        </Alert>;

    if (fulfilled)
        content = <>
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
                <dt className="col-sm-2">Address</dt>
                <dd className="col-sm-10">{address}</dd>
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

    return <>
        <div className="mb-3" >{content}</div>
        <div>
            {!inProcess && (<><a href="" onClick={(e) => { e.preventDefault(); navigate(-1); }}>Go back</a>{fulfilled && (
                <>
                    {" | "}
                    <a href="" onClick={(e) => { e.preventDefault(); navigate("/admin/hotels/edit/" + id); }}>Edit</a>
                    {" | "}
                    <a href="" onClick={(e) => { e.preventDefault(); navigate("/admin/hotels/delete/" + id); }}>Delete</a>
                </>)}
            </>)}
        </div>
    </>;
}

export default HotelDetails;