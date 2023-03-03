import React, { useEffect, useReducer } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loader: true };
    case "FETCH_SUCCES":
      return { ...state, branch: action.payload, loader: false };
    case "FETCH_FAIL":
      return { ...state, error: true };
    default:
      return state;
  }
};

const EditBranch = () => {
  const [{ loading, error, branch }, dispatch] = useReducer(reducer, {
    advocate: {},
    loading: true,
    error: false,
  });
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const getBranch = async () => {
      dispatch({ type: "FETCH_REQ" });
      try {
        const resp = await axios.get(
          `https://alishancompany.az/api/branch/${id}`
        );
        dispatch({ type: "FETCH_SUCCES", payload: resp.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL" });
        alert("err");
      }
    };
    getBranch();
  }, []);

  const formik = useFormik(
    {
      enableReinitialize: true,
      initialValues: {
        name: branch && branch.name,
        email: branch && branch.email,
        telephone: branch && branch.telephone,
        image: branch && branch.image,
        website: branch && branch.website,
        address: branch && branch.address,
      },

      onSubmit: async (values) => {
        const { token } = localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : "";
        console.log("values", values);

        try {
          await axios.put(
            `https://alishancompany.az/api/branch/${id}`,
            {
              name: values.name,
              email: values.email,
              telephone: values.telephone,
              website: values.website,
              image: values.image,
              address: values.address,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("filial dəyişildi");

          window.location = "/admindfnd001907/branches";
        } catch (error) {
          toast.error("sonra cəhd edin!");
        }
      },
    });
  // console.log("values", formik.values);
  return (
    <div>
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
            name="image"
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
            defaultValue={branch && branch.name}
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
            // value={formik.values.email}
            defaultValue={branch && branch.email}
          />{" "}
          <label
            className="createadvocates__forms__label"
            htmlFor="telephone"
          >
            nömrə
          </label>
          <input
            className="createadvocates__forms__input"
            id="telephone"
            name="telephone"
            type="telephone"
            onChange={formik.handleChange}
            // value={formik.values.phoneNumber}
            defaultValue={branch && branch.telephone}
          />
          <label className="createadvocates__forms__label" htmlFor="address">
            ünvan
          </label>
          <input
            className="createadvocates__forms__input"
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            defaultValue={branch && branch.address}
          />
          <label
            className="createadvocates__forms__label"
            htmlFor="website"
          >
            website
          </label>
          <input
            className="createadvocates__forms__input"
            id="website"
            name="website"
            type="website"
            onChange={formik.handleChange}
            defaultValue={branch && branch.webSite}
          />
          <button className="createadvocates__forms__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBranch;
