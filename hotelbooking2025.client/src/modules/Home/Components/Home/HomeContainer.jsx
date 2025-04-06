import React from 'react';
import { useState } from 'react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import countries from '@/common/data/countries.json';

const msInDay = 24 * 3600 * 1000;

export default function HomeContainer(props) {

	const [country, setCountry] = useState({ value: "", label: "" });
	const [locality, setLocality] = useState("");
	const [fromDate, setFromDate] = useState(new Date(Date.now() + 1 * msInDay).toISOString().slice(0, 10));
	const [toDate, setToDate] = useState(new Date(Date.now() + 2 * msInDay).toISOString().slice(0, 10));
	const [adultNum, setAdultNum] = useState(1);
	const [childNum, setChildNum] = useState(0);
	const navigate = useNavigate();

	function daysNotExcess(from, to) {
		let fromTime = new Date(from).getTime(); let toTime = new Date(to).getTime();
		if (toTime - fromTime - 1 > msInDay * 30)
			return false;
		else
			return true;
	}

	function checkoutIsLater(from, to) {
		return new Date(from).getTime() + 1 < new Date(to).getTime();
	}

	function withinTwoYears(date) {
		if (new Date(date).getTime() - Date.now() < 365 * 2 * msInDay)
			return true;
		else
			return false;
	}

	function isPast(date) {
		if (new Date(date).getTime() < Date.now())
			return true;
		else
			return false;
	}

	function getNextDay(value) {
		return new Date(new Date(value).getTime() + 1 * msInDay).toISOString().slice(0, 10)
	}

	function handleFromDateChange(e) {
		const value = e.target.value;
		if (!withinTwoYears(value)) {
			alert("It is too early for that");
			return;
		}
		if (isPast(value)) {
			return;
		}
		if (daysNotExcess(value, toDate))
			if (checkoutIsLater(value, toDate))
				setFromDate(value);
			else {
				setFromDate(value);
				setToDate(getNextDay(value));
			}
		else {
			setFromDate(value);
			setToDate(getNextDay(value));
		}
	};

	function handleToDateChange(e) {
		const val = e.target.value;
		if (daysNotExcess(fromDate, val)) {
			if (checkoutIsLater(fromDate, val))
				setToDate(val);
		}
		else {
			setToDate(new Date(new Date(fromDate).getTime() + msInDay * 30).toISOString().slice(0, 10));
		}
	}

	function handleAdultNumChange(e) {
		let value = e.target.value;
		if (value <= 10 && value >= 1)
			setAdultNum(value);
	};

	function handleChildNumChange(e) {
		let value = e.target.value;
		if (value <= 10 && value >= 0 && value)
			setChildNum(value);
	};

	function handleSubmit(e) {
		if (!countries.includes(country.value)) {
			alert("'Country' field is required");
			return;
		}
		if (!locality) {
			alert("'Locality' field is required");
			return;
		}
		if (locality.search(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/) === -1) {
			alert("Invalid 'Locality' field");
			return;
		}
		navigate(`/catalog?country=${country.value}&locality=${locality}`
			+ `&fromDate=${fromDate}&toDate=${toDate}&adultNum=${adultNum}&childNum=${childNum}`);
	}

	function handleCountryChange(option) {
		setCountry(option);
	}

	function handleLocalityChange(e) {
		setLocality(e.target.value);
	}

	return <Home
		countries={countries.map(c => ({ value: c, label: c }))}
		country={country}
		onCountryChange={handleCountryChange}
		locality={locality}
		onLocalityChange={handleLocalityChange}
		fromDate={fromDate}
		toDate={toDate}
		onFromDateChange={handleFromDateChange}
		onToDateChange={handleToDateChange}
		onSubmit={handleSubmit}
		adultNum={adultNum}
		childNum={childNum}
		onAdultNumChange={handleAdultNumChange}
		onChildNumChange={handleChildNumChange}
    />;
}