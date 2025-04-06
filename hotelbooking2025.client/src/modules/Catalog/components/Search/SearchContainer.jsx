import Search from './Search';
import countries from '@/common/data/countries.json';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const msInDay = 24 * 3600 * 1000;

function SearchContainer() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [country, setCountry] = useState(searchParams.get("country"));
	const [locality, setLocality] = useState(searchParams.get("locality"));
	const [fromDate, setFromDate] = useState(searchParams.get("fromDate"));
	const [toDate, setToDate] = useState(searchParams.get("toDate"));
	const [adultNum, setAdultNum] = useState(searchParams.get("adultNum"));
	const [childNum, setChildNum] = useState(searchParams.get("childNum"));
	const navigate = useNavigate();
	//country = searchParams.get("country");
	//if (country) {
	//	locality = searchParams.get("locality");
	//	from = searchParams.get("from");
	//	to = searchParams.get("to");
	//	adult = searchParams.get("adult");
	//	child = searchParams.get("child");
	//}
	//else {
	//	country = '';
	//	locality = '';
	//	from = new Date(Date.now() + 1 * msInDay).toISOString().slice(0, 10);
	//	to = new Date(Date.now() + 2 * msInDay).toISOString().slice(0, 10);
	//	adult = 1;
	//	child = 0;
	//}
	//constructor(props) {
	//	super(props);
	//	if (props.search.country) {
	//		this.state = {
	//			...props.search
	//		}
	//	} else {
	//		this.state = {
	//			country: '',
	//			locality: '',
	//			from: new Date(Date.now() + 1 * msInDay).toISOString().slice(0, 10),
	//			to: new Date(Date.now() + 2 * msInDay).toISOString().slice(0, 10),
	//			adult: 1,
	//			child: 0
	//		};
	//	}
	//}

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

	function handleFromDateChange(e) {
		const value = e.target.value;
		if (!withinTwoYears(value)) {
			alert("It is too early for that");
			return;
		}
		if (isPast(value)) {
			return;
		}
		if (daysNotExcess(value, to))
			if (checkoutIsLater(value, to))
				setFromDate(value);
			else {
				setFromDate(value);
				setToDate(new Date(new Date(value).getTime() + 1 * msInDay).toISOString().slice(0, 10));
			}
		else {
			setFrom(value);
			setTo(new Date(new Date(value).getTime() + 1 * msInDay).toISOString().slice(0, 10));
		}
	};

	function handleToDateChange(e) {
		if (daysNotExcess(fromDate, e.target.value))
			if (checkoutIsLater(fromDate, e.target.value)) {
				setToDate(e.target.value);
			}
			else
				;
		else {
			setToDate(new Date(new Date(fromDate).getTime() + msInDay * 30).toISOString().slice(0, 10));
		}
	};

	function handleAdultNumChange(e) {
		let value = e.target.value;
		if (value <= 10 && value >= 1) {
			setAdultNum(value);
		}
	};

	function handleChildNumChange(e) {
		let value = e.target.value;
		if (value <= 10 && value >= 0 && value) {
			setChildNum(value);
		}
	};

	function handleCountryChange(e) {
		setCountry(e.value);
	};

	function handleLocalityChange(e) {
		setLocality(e.target.value);
	};

	function handleSubmit() {
		if (!country) {
			alert("Choose country");
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

		navigate(`/catalog?country=${country}&locality=${locality}`
			+ `&fromDate=${fromDate}&toDate=${toDate}&adultNum=${adultNum}&childNum=${childNum}`);
		//this.props.setSearchParameters({
		//	country: this.state.country,
		//	locality: this.state.locality,
		//	from: this.state.from,
		//	to: this.state.to,
		//	adult: this.state.adult,
		//	child: this.state.child
		//});
		//this.props.fetchHotels(this.props.search);
    }


	return <Search
		countries={countries}
        onCountryChange={handleCountryChange}
        onLocalityChange={handleLocalityChange}
        onFromDateChange={handleFromDateChange}
        onToDateChange={handleToDateChange}
        onAdultNumChange={handleAdultNumChange}
        onChildNumChange={handleChildNumChange}
        onSubmit={handleSubmit}
        country={country}
        locality={locality}
        fromDate={fromDate}
        toDate={toDate}
        adultNum={adultNum}
        childNum={childNum}
    />;
}

//const mapState = (state) => {
//	return { search: state.search };
//}

//const mapDispatch = dispatch => ({
//	fetchHotels: (params) => { dispatch(fetchHotelsAction(params)); },
//	setSearchParameters: (params) => { dispatch(setSearchParametersAction(params)); }
//});

export default SearchContainer;