import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
const initialState = {
  items: [],
  status: null,
  isDeleting: false,
};

const { token } = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

export const branchFetch = createAsyncThunk("branch/branchFetch", async () => {
  const resp = await axios.get("https://alishancompany.az/api/branch");
  return resp?.data;
});

export const deleteBranch = createAsyncThunk(
  "branch/deleteApi",
  async (payload) => {
    try {
      const response = await axios.delete(
        `https://alishancompany.az/api/branch/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location = "/adminalshn001907/branches"
      toast.success("silindi");

      return response.data;
    } catch (error) {
      toast.error("yenidən cəhd edin!");
    }
  }
);

export const createBranch = createAsyncThunk(
  "branch/postApi",
  async (payload) => {
    const response = await axios
      .post(`https://alishancompany.az/api/branch`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("yaradıldı");
        window.location = "/adminalshn001907/branches";
      })
      .catch((err) => {
        toast.error("yenidən cəhd edin!");
      });
    return response.data;
  }
);

const branchSlice = createSlice({
  name: "branches",
  initialState,
  reducers: {},
  extraReducers: {
    [branchFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [branchFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [branchFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export const getAllBranches = (state) => state.branches.items;

export const getStatus = (state) => state.branches.status;
export const getIsDeleting = (state) => state.branches.isDeleting;

export default branchSlice.reducer;
