import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  //using useForm (much easier)
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Form
        </label>
        <input
          {...register("name", {required:true, minLength: 3})}
          id="name"
          type="text"
          className="form-control"
        />
        {/* optional chaining is used here since errors.name object could be empty */}
        {errors.name?.type === 'required' && <p className="text-danger">The name field is required.</p>}
        {errors.name?.type === 'minLength' && <p className="text-danger">The name must be atleast 3 characters</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
