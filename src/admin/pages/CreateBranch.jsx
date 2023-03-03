import React from "react";
import { useFormik } from "formik";
import "../scss/adminadvocates.scss";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { createBranch } from "../../features/branchSlice";
const CreateBranch = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      image: "",
      website: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log("val", values);
      var req = new FormData();
      req.append("name", values.name);
      req.append("email", values.email);
      req.append("telephone", values.telephone);
      req.append("website", values.website);
      req.append("address", values.address);
      req.append("image", values.image)
      dispatch(
        createBranch({
          name: req.get("name"),
          email: req.get("email"),
          telephone: req.get("telephone"),
          image: req.get("image"),
          website: req.get("website"),
          address: req.get("address"),
        })
      );
    },
  });
  const [fullnumber, setFullNumber] = useState();
console.log(formik.values.image);
  return (
    <div className="createadvocates">
      <div>
        <Toaster />
      </div>
      <form className="createadvocates__forms" onSubmit={formik.handleSubmit}>
        <label className="createadvocates__forms__label" htmlFor="image">
          şəkil
        </label>
        <input
          className="createadvocates__forms__input"
          id="image"
          name="imageFile"
          accept="image/*"
          type="file"
          onChange={(e) => {
            formik.setFieldValue("image", e.currentTarget.files[0]);
          }}
        />
        <label className="createadvocates__forms__label" htmlFor="name">
          ad
        </label>
        <input
          className="createadvocates__forms__input"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          defaultValue={formik.values.name}
        />
        <label className="createadvocates__forms__label" htmlFor="email">
          Email
        </label>
        <input
          className="createadvocates__forms__input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          defaultValue={formik.values.email}
        />{" "}
        <label className="createadvocates__forms__label" htmlFor="telephone">
          nömrə
        </label>
        <div className="phonenumber__div">
          <input
            className="createadvocates__forms__input"
            id="telephone"
            name="telephone"
            type="telephone"
            onChange={formik.handleChange}
            defaultValue={formik.values.telephone}
            maxLength={9}
          />
        </div>
        <label className="createadvocates__forms__label" htmlFor="address">
          ünvan
        </label>
        <input
          className="createadvocates__forms__input"
          id="address"
          name="address"
          type="address"
          onChange={formik.handleChange}
          defaultValue={formik.values.address}
        />
        <label className="createadvocates__forms__label" htmlFor="website">
          website
        </label>
        <input
          className="createadvocates__forms__input"
          id="website"
          name="website"
          type="website"
          onChange={formik.handleChange}
          defaultValue={formik.values.website}
        />
        <button className="createadvocates__forms__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBranch;
