import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const onSubForm = (data) => {
    delete data.repeatEmail;
    console.log(data);
    setValue("name", "");
    setValue("email", "");
    setValue("repeatEmail", "");
  };

  // let emailRef = register("email", {
  //   required: true,
  //   pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  // });

  // let passwordRef = register("password", { required: true, minLength: 6 });
  return (
    <div className="container">
      <h1>Form signup</h1>
      <form onSubmit={handleSubmit(onSubForm)} className="col-md-6">
        <label>Name:</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          className="form-control"
        />{" "}
        {errors.name && (
          <div className="text-danger">
            Enter valid name (minimun 2 letters)
          </div>
        )}
        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
          type="text"
          className="form-control"
        />
        {errors.email && <div className="text-danger">Enter valid email!</div>}
        <label>Repeat Email:</label>
        <input
          {...register("repeatEmail", {
            required: true,
            validate: (val) => val === getValues("email"),
          })}
          type="text"
          className="form-control"
        />{" "}
        {errors.repeatEmail && (
          <div className="text-danger">Email inputs dont match!</div>
        )}
        <button className="btn btn-info mt-4">Send</button>
      </form>
        
    </div>
  );
}
