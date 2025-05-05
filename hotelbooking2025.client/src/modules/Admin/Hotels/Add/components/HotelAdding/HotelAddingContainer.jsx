import HotelAdding from './HotelAdding';
import countries from '@/common/data/countries.json';
import request from '@/common/utils/request';
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HotelAddingContainer() {
    const navigate = useNavigate();
    const [submitErrorMessage, setSubmitErrorMessage] = useState(null);

    const schema = yup.object().shape({
        name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
        locality: yup.string().required("Locality is required"),
        address: yup.string().required("Address is required"),
        picture: yup.mixed().nullable().test("required", "Picture is required", value => value && value.length > 0)
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

    async function submit(data) {
        const sendData = {...data};
        sendData.country = sendData.country.value;

        const formData = new FormData();
        formData.append("name", sendData.name);
        formData.append("country", sendData.country);
        formData.append("locality", sendData.locality);
        formData.append("description", sendData.description);
        formData.append("stars", sendData.stars);
        formData.append("address", sendData.address);
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
            setSubmitErrorMessage(response.statusText);
        }
    }

    return <HotelAdding
        countries={countries.map(c => ({ value: c, label: c }))}
        control={control}
        onSubmit={handleSubmit(submit)}
        errors={errors}
        register={register}
        submitErrorMessage={submitErrorMessage}
    />
}

export default HotelAddingContainer;