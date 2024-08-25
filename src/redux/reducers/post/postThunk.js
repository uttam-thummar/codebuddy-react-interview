export const getPostsThunk = async (_, thunkAPI) => {
  try {
    const endpoint = "https://codebuddy.review/posts";

    const response = await fetch(endpoint);
    if (!response.ok) {
      return thunkAPI.rejectWithValue("Something went wrong, please try again later.");
    }

    const responseResult = await response.json();
    if (responseResult.data) {
      return responseResult;
    } else {
      return thunkAPI.rejectWithValue("Something went wrong, please try again later.");
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Something went wrong, please try again later.",
    );
  }
};
