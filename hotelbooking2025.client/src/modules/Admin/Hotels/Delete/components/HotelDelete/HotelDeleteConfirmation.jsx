import { Spinner, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HotelDeleteConfirmation({
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
    errorMessage,
    deleted,
    onConfirmDelete
}) {
    let content;
    const navigate = useNavigate();

    if (deleted)
        content = <Alert variant="success">
            <Alert.Heading>Successfully deleted!</Alert.Heading>
        </Alert>;
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
            <h3>Are you sure you want to delete this hotel?</h3>
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
                    />
                </dd>
            </dl>
            <Button variant="danger" onClick={onConfirmDelete}>Delete</Button>
        </>;

    return <>
        <div className="mb-3" >{content}</div>
        <a href="" onClick={(e) => { e.preventDefault(); navigate(-1); } }>Go back</a>
    </>
}

export default HotelDeleteConfirmation;