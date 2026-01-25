import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAll",
  async ({ page, limit }, { rejectWithValue }) => {
    const baseUrl =
      import.meta.env.VITE_API_URL ||
      "https://portfolio-backend-79t2.onrender.com";
    const url = `${baseUrl}/admin/all-projects?page=${page}&limit=${limit}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalResult: 0,
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.pagination.currentPage = action.payload.currentPage;
        state.pagination.totalPages = action.payload.totalPages;
        state.pagination.totalResult = action.payload.totalResult;
      })
      .addCase(fetchAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
