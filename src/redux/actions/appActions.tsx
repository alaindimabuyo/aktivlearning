/*jshint -W065 */
import type {Dispatch} from 'redux';
import {
  GET_CURRENT_PHOTO,
  GET_PHOTOS,
  GET_PHOTOS_ERROR,
  CLEAR_STATE,
  SET_LOADING,
} from '../constants/types';
import {PIXABAY_APP_KEY} from '@aktivlearningtest/env/env-setup';
export const getPixabayImages =
  ({search, page}: {search?: string; page?: number}) =>
  async (dispatch: Dispatch) => {
    try {
      setLoading();
      const res = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_APP_KEY}&q=${search}&image_type=photo&page=${page}`,
      );
      const data = await res.json();
      if (data) {
        dispatch({type: GET_PHOTOS, payload: data});
      }
    } catch (err) {
      dispatch({
        type: GET_PHOTOS_ERROR,
        payload: err,
      });
    }
  };

export const getCurrentImage =
  ({id}: {id: number}) =>
  async (dispatch: Dispatch) => {
    try {
      setLoading();
      const res = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_APP_KEY}&id=${id}`,
      );
      const data = await res.json();

      if (data) {
        dispatch({type: GET_CURRENT_PHOTO, payload: data});
      }
    } catch (err) {
      dispatch({
        type: GET_PHOTOS_ERROR,
        payload: err,
      });
    }
  };

export const clearState = () => async (dispatch: Dispatch) => {
  dispatch({type: CLEAR_STATE});
};

export const setLoading = () => async (dispatch: Dispatch) => {
  dispatch({type: SET_LOADING});
};
