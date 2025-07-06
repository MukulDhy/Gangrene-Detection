import {
  IMG_DETAIL_FAIL,
  IMG_DETAIL_REQUEST,
  IMG_DETAIL_SUCCESS,
  IMAGE_ML_DETAIL_FAIL,
  IMAGE_ML_DETAIL_SUCCESS,
  IMAGE_ML_DETAIL_REQUEST
} from "../../constant/img/imgConstant.js";

export const imageReducer = (state = { img: null, imageId: null }, action) => {
  switch (action.type) {
    case IMG_DETAIL_REQUEST:
      return { loading: true, message: "wait..." };
    case IMG_DETAIL_SUCCESS:
      return {
        loading: false,
        imageId: action.imgId,
      };
    case IMG_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export const imageMlDetailsReducer = (state = {prediction : null},action) => {
  switch (action.type){
    case IMAGE_ML_DETAIL_REQUEST : 
      return {loading : true}
    case IMAGE_ML_DETAIL_SUCCESS : 
      return {loading : false,success : true,prediction : action.payload.result,orgResponse : action.payload.orgResponse }
    case IMAGE_ML_DETAIL_FAIL :
      return {loading : false,success : false,message : action.payload.message, error : action.payload.error}    
    default:
      return state  
  }
}
