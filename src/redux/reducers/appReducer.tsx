import {
  GET_PHOTOS,
  GET_CURRENT_PHOTO,
  SET_LOADING,
  GET_PHOTOS_ERROR,
  CLEAR_STATE,
} from '../constants/types';

interface stateType {
  photo: Record<string, any>;
  photos: any;
  photosError: any;
  loading: boolean;
}

const initialState = {
  photo: [],
  photosError: null,
  photos: [],
  loading: false,
} as stateType;

interface types {
  type: string;
  payload: any;
}

export const appReducer = (state = initialState, {type, payload}: types) => {
  switch (type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...payload.hits],
        loading: false,
      };
    case GET_PHOTOS_ERROR:
      return {
        ...state,
        photosError: payload,
        loading: false,
      };
    case GET_CURRENT_PHOTO:
      return {
        ...state,
        photo: payload.hits,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_STATE:
      return {
        ...state,
        photos: [],
        loading: false,
      };
    default:
      return state;
  }
};
