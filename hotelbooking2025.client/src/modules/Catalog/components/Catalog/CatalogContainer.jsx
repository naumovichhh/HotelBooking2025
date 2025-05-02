import { useNavigate, Navigate, useSearchParams, useParams } from 'react-router-dom';
import Catalog from './Catalog';
//import { fetchHotels as fetchHotelsAction } from '../../../actions';
import { useContext, useEffect } from 'react';
import HotelsContext from '@/store/contexts/HotelsContext';
import { fetchHotelsSearch } from '@/store/actions/hotels';

function CatalogContainer() {
    //componentDidMount() {
    //    if (this.props.search.country)
    //        this.props.fetchHotels(this.props.search);
    //}
    const navigate = useNavigate();
    const hotelsContext = useContext(HotelsContext);
    const [searchParams, setSearchParams] = useSearchParams();
    //useEffect(() => {
    //    if (searchCountry) {
    //        const params = getSearchParams(searchParams);
    //        fetchHotels(hotelsContext.dispatch, params);
    //    }
    //}, []);
    useEffect(() => {
        if (searchCountry) {
            const params = getSearchParams(searchParams);
            fetchHotelsSearch(hotelsContext.dispatch, params);
        }
    }, [searchParams]);

    function handleClick(id) {
        navigate(`/hotel/${id}`);
    }


    const searchCountry = searchParams.get("country");
    if (!searchCountry)
        return <Navigate to="/home" />;

    return <Catalog
        hotelsList={hotelsContext.state.list}
        fulfilled={hotelsContext.state.fulfilled}
        failed={hotelsContext.state.failed}
        inProcess={hotelsContext.state.inProcess}
        onClick={handleClick} />;
}

function getSearchParams(searchParams) {
    return {
        country: searchParams.get("country"),
        locality: searchParams.get("locality"),
        fromDate: searchParams.get("fromDate"),
        toDate: searchParams.get("toDate"),
        adultNum: searchParams.get("adultNum"),
        childNum: searchParams.get("childNum")
    };
}

//const mapState = (state) => ({ ...state.hotels, search: state.search });
//const mapDispatch = dispatch => ({
//    fetchHotels: (params) => { dispatch(fetchHotelsAction(params)); }
//});

//export default connect(mapState, mapDispatch)(CatalogContainer);
export default CatalogContainer;