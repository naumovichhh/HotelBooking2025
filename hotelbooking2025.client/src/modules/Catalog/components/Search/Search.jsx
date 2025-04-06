import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import Select from 'react-select';
//import FastSelect from 'common/components/FastSelect';

function Search({
    countries,
    onToDateChange,
    onFromDateChange,
    onAdultNumChange,
    onChildNumChange,
    onLocalityChange,
    onCountryChange,
    onSubmit,
    country,
    locality,
    fromDate,
    toDate,
    adultNum,
    childNum
}) {
    let countriesOptions = countries.map(c => ({ value: c, label: c }));
//    let localities = localities[country] && Array.from(new Set(localities[country])).map(l => ({ value: l, label: l }));
    return <div style={{ backgroundColor: "rgb(180, 180, 180)", padding: "10px 10px" }}>
        <Form >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="country" >
                    <Form.Label>Country</Form.Label>
                    <Select value={{ label: country, value: country }} onChange={onCountryChange} options={countriesOptions} />
                </Form.Group>
                <Form.Group as={Col} controlId="locality" >
                    <Form.Label>Locality</Form.Label>
                    <Form.Control value={locality} onChange={onLocalityChange} type="text" />
                    {/*<FastSelect value={{ label: locality, value: locality }} onChange={onLocalityChange} options={localities} />*/}
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="from" >
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" onChange={onFromDateChange} value={fromDate} />
                </Form.Group>
                <Form.Group as={Col} controlId="to" >
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" onChange={onToDateChange} value={toDate} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="adult" >
                    <Form.Label>Adult places</Form.Label>
                    <Form.Control type="number" onChange={onAdultNumChange} value={adultNum} />
                </Form.Group>
                <Form.Group as={Col} controlId="child" >
                    <Form.Label>Child places</Form.Label>
                    <Form.Control type="number" onChange={onChildNumChange} value={childNum} />
                </Form.Group>
            </Row>
            <Button variant="primary" onClick={onSubmit} >
                Search
            </Button>
        </Form>
    </div>
}

export default Search;