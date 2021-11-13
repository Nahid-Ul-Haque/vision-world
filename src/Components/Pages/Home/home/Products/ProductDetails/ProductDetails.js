import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../Footer/Footer';

const ProductDetails = () => {
    const [detail, setDetail] = useState({});
    const { detailsId } = useParams();
    const { user } = useAuth()
    console.log(detailsId);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        // data.status = "pending";
        fetch("https://protected-mesa-72956.herokuapp.com/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data)
    };

    useEffect(() => {
        fetch(`https://protected-mesa-72956.herokuapp.com/singleDetails/${detailsId}`)
            .then((res) => res.json())
            .then((data) => setDetail(data));
    }, [detailsId]);
    return (
        <div>
            <Navigation></Navigation>
            <div className="details-container">
                <div className="row container">
                    <div className="col-md-6">
                        <img className="w-50" src={detail.image} alt="" />
                        <p>{detail?.description}</p>
                        <h1>{detail?.name}</h1>
                        <h1> {detail?.price}</h1>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={detail?.name}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("description")}
                                defaultValue={detail?.description}
                                placeholder="Description"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                defaultValue={detail?.image}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                defaultValue={detail?.price}
                                type="number"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Order now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;