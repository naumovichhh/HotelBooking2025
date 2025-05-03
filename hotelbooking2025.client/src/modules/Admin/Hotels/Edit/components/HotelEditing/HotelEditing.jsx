import { Form, Button } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

function HotelEditing({
    countries,
    control,
    onSubmit,
    register,
    errors,
    submitErrorMessage
}) {
    return <div className="row">
        <div className="col-10 col-md-6">
            <Form onSubmit={onSubmit}>
                <h3>Add new hotel</h3>
                <div className="mb-3">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" type="text" {...register("name")}></Form.Control>
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="country">Country</Form.Label>
                    <Controller
                        name="country"
                        control={control}
                        defaultValue={null}
                        render={({ field }) => <Select id="country" options={countries} {...field} ></Select>}
                    />
                    {errors.country && <span className="text-danger">{errors.country.message}</span>}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="locality">Locality</Form.Label>
                    <Form.Control id="locality" type="text" {...register("locality")}></Form.Control>
                    {errors.locality && <span className="text-danger">{errors.locality.message}</span>}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control id="address" type="text" {...register("address")}></Form.Control>
                    {errors.address && <span className="text-danger">{errors.address.message}</span>}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="picture">Picture</Form.Label>
                    <Form.Control id="picture" type="file" {...register("picture")}></Form.Control>
                    {errors.picture && <span className="text-danger">{errors.picture.message}</span>}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control as="textarea" cols="3" id="description" {...register("description")}></Form.Control>
                    {errors.description && <span className="text-danger">{errors.description.message}</span>}
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="stars">Stars</Form.Label>
                    <Form.Control id="stars" type="number" min="1" max="5" {...register("stars")}></Form.Control>
                    {errors.stars && <span className="text-danger">{errors.stars.message}</span>}
                </div>
                {submitErrorMessage && <div className="mb-3"><span className="text-danger">{submitErrorMessage}</span></div>}
                <div className="mb-3">
                    <Button variant="primary" type="submit">Add</Button>
                </div>
            </Form>
        </div>
    </div>;
}

export default HotelEditing;