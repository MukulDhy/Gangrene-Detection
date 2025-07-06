import axios from "axios";
import {
  IMG_DETAIL_FAIL,
  IMG_DETAIL_REQUEST,
  IMG_DETAIL_SUCCESS,
  IMAGE_ML_DETAIL_FAIL,
  IMAGE_ML_DETAIL_SUCCESS,
  IMAGE_ML_DETAIL_REQUEST,
} from "../../constant/img/imgConstant";

export const imgUploadDetailAction = (file, imgUrl) => async (dispatch) => {
  dispatch({ type: IMG_DETAIL_REQUEST });

  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const { data } = await axios.post("/api/image/new", formData, config);

    dispatch({
      type: IMG_DETAIL_SUCCESS,
      imgId: data.imageId,
    });
  } catch (error) {
    dispatch({
      type: IMG_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    alert("Error uploading image: " + error.message);
  }
};

export const imageMlDataAction = (id, task) => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_ML_DETAIL_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    // const token = await Cookies.get("token");
    const response = await axios.post(`/api/ml/${task}/${id}`, config);
    console.log(response.data);
    dispatch({ type: IMAGE_ML_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: IMAGE_ML_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
