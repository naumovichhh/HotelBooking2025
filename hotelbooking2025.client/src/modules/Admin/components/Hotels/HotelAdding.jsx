import { Form, Button } from 'react-bootstrap';

function HotelAdding({
    name,
    onNameChange
}) {
    return <div className="row">
        <div className="col-10 col-md-6">
            <Form>
                <h3>Add new hotel</h3>
                <div className="mb-3">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control value={name} onChange={onNameChange} id="name" type="text"></Form.Control>
                </div>
                <div className="mb-3"></div>
            </Form>
        </div>
    </div>;
}

export default HotelAdding;