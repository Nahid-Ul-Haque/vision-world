import { CircularProgress } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./AddProducts.css"

const AddProducts = () => {
    const { isLoading } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://protected-mesa-72956.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-danger">Please Add a Product</h1>
                <div className=" w-25 m-auto mt-5">
                    <div className=" ">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name")}
                                    placeholder="Name"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />

                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-info w-50"
                                />
                            </form>
                            {isLoading && <CircularProgress />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
