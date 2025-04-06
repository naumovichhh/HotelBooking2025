import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';

export default function Home({
    country,
    countries,
    onCountryChange,
    locality,
    onLocalityChange,
    fromDate,
    onFromDateChange,
    toDate,
    onToDateChange,
    onSubmit,
    childNum,
    adultNum,
    onAdultNumChange,
    onChildNumChange
}) {
    return <div className="row" >
        <div className="col-10 col-md-6" >
            <Form>
                <h3>Find a place to stay </h3>
                <div className="mb-3">
                    <Form.Label htmlFor="country">Country</Form.Label>
                    <Select id="country" value={country} onChange={onCountryChange} options={countries} />
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="locality">Locality</Form.Label>
                    <Form.Control id="locality" onChange={onLocalityChange} value={locality} type="text" />
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="from">From</Form.Label>
                    <Form.Control id="from" value={fromDate} onChange={onFromDateChange} type="date" />
                </div>
                <div className="mb-3">
                    <Form.Label htmlFor="to">To</Form.Label>
                    <Form.Control id="to" value={toDate} onChange={onToDateChange} type="date" />
                </div>
                <div className="mb-3">
                    <Form.Label>Adult places</Form.Label>
                    <Form.Control value={adultNum} onChange={onAdultNumChange} type="number" />
                </div>
                <div className="mb-3">
                    <Form.Label>Child places</Form.Label>
                    <Form.Control value={childNum} onChange={onChildNumChange} type="number" />
                </div>
                <div className="mb-3">
                    <Button variant="primary" onClick={onSubmit}>Search</Button>
                </div>
            </Form>
        </div>
    </div>
};