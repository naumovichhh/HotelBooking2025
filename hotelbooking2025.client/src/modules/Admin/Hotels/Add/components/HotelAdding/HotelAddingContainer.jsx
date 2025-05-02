import HotelAdding from './HotelAdding';
import countries from '@/common/data/countries.json';
import request from '@/common/utils/request';
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function HotelAddingContainer() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
        locality: yup.string().required("Locality is required"),
        address: yup.string().required("Address is required"),
        picture: yup.mixed().required("Picture is required")
            .test("fileSize", "Maximum picture file size is 2 MB", value => {
                return value && value[0] && value[0].size <= 2 * 1024 * 1024
            }),
        country: yup.object().shape({ value: yup.string().required(), label: yup.string().required() })
            .required("Country is required"),
        stars: yup.number().min(1, "Minimum stars value is 1").max(5, "Maximum stars value is 5"),
        description: yup.string().required("Description is required")
    });
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            stars: 1,
            picture: null
        }
    }
    );
    //const [name, setName] = useState("");
    //const [locality, setLocality] = useState("");
    //const [country, setCountry] = useState("");
    //const [countryErrors, setCountryErrors] = useState(null);
    //const [stars, setStars] = useState(1);
    //const [description, setDescription] = useState("");
    //const [address, setAddress] = useState("");
    //const [pictureFile, setPictureFile] = useState(null);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLocalityChange(e) {
        setLocality(e.target.value);
    }

    function handleCountryChange(option) {
        setCountry(option);
    }

    function handleStarsChange(e) {
        if (e.target.value > 5)
            setStars(5);
        else if (e.target.value < 1)
            setStars(1);
        else setStars(e.target.value);
    }

    function handleAddressChange(e) {
        setAddress(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handlePictureFileChange(e) {
        setPictureFile(e.target.files[0]);
    }

    //function checkCountry(f) {
    //    if (country == "") {
    //        setCountryErrors({ message: "Country is required" });
    //        return;
    //    }
    //    else {
    //        setCountryErrors(null);
    //    }

    //    return f();
    //}

    async function submit(data) {
        const sendData = {...data};
        sendData.country = sendData.country.value;
        //const body = JSON.stringify(sendData);
        //const response = await request("/api/hotels", {
        //    body: body,
        //    method: "POST",
        //    headers: { 'Content-Type': 'application/json;charset=utf-8' }
        //});

        const formData = new FormData();
        formData.append("name", sendData.name);
        formData.append("country", sendData.country);
        formData.append("locality", sendData.locality);
        formData.append("description", sendData.description);
        formData.append("stars", sendData.stars);
        formData.append("address", sendData.address);
        //formData.append("image", sendData.image[0]);
        formData.append("image", sendData.picture[0]);
        const response = await request("/api/hotels", {
            body: formData,
            method: "POST"
        });
        if (response.ok) {
            const result = await response.json();
            navigate("/admin/hotels/details/" + result.id);
        }
        else {
            alert("Error: " + response.status);
        }
    }

    return <HotelAdding
        //name={name}
        //onNameChange={handleNameChange}
        //locality={locality}
        //onLocalityChange={handleLocalityChange}
        //country={country}
        //onCountryChange={handleCountryChange}
        //countryErrors={countryErrors}
        countries={countries.map(c => ({ value: c, label: c }))}
        //stars={stars}
        //onStarsChange={handleStarsChange}
        //description={description}
        //onDescriptionChange={handleDescriptionChange}
        //address={address}
        //onAddressChange={handleAddressChange}
        //onPictureChange={handlePictureFileChange}
        control={control}
        onSubmit={handleSubmit(submit)}
        errors={errors}
        register={register}
    />
}

export default HotelAddingContainer;