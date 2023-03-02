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
      var req = new FormData();
      req.append("name", values.name);
      req.append("email", values.email);
      req.append("telephone", values.telephone);
      req.append("image", values.image);
      req.append("website", values.website);
      req.append("address", values.address);
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
        <label className="createadvocates__forms__label" htmlFor="firstName">
          ad
        </label>
        <input
          className="createadvocates__forms__input"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
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
          value={formik.values.email}
        />{" "}
        <label className="createadvocates__forms__label" htmlFor="phoneNumber">
          nömrə
        </label>
        <div className="phonenumber__div">
          <input
            className="createadvocates__forms__input"
            id="phoneNumber"
            name="phoneNumber"
            type="phoneNumber"
            placeholder="0555555555"
            onChange={formik.handleChange}
            defaultValue={formik.values.telephone}
            maxLength={9}
          />
        </div>
        <label className="createadvocates__forms__label" htmlFor="role">
          ünvan
        </label>
        <input
          className="createadvocates__forms__input"
          id="role"
          name="role"
          type="role"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <label className="createadvocates__forms__label" htmlFor="role">
          website
        </label>
        <input
          className="createadvocates__forms__input"
          id="role"
          name="role"
          type="role"
          onChange={formik.handleChange}
          value={formik.values.website}
        />
        <button className="createadvocates__forms__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBranch;
