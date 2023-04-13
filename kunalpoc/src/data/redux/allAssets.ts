import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Root} from '../model/assets';
import {allAssetsObserver} from '../../domain/rx-observables/allAssetsObservables';

export const fetchAllAssets = createAsyncThunk(
  'allAssets/fetchAllAssets',
  async (userId: number, thunkApi) => {
    thunkApi.dispatch(fetchStarted());
    axios
      .get<Root>(
        'https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/2E553D81-94BB-4B9D-8F62-C77CFA74DCEB/F9F04572-D201-4FDC-813F-ECA88DB83CE7/containers?pageNumber=1&pageSize=10&policy_evaluate=false&reg=ca&acl=ta&dt=androidtv',
      )
      .then(function (response) {
        thunkApi.dispatch(fetchSuccess());
        allAssetsObserver.next(response.data);
      })
      .catch(function (error) {
        thunkApi.dispatch(fetchFailed());
        console.log(error);
      });
  },
);
// Slice
const slice = createSlice({
  name: 'allAssets',
  initialState: {
    carouselData: [],
    bannerData: [],
    loading: false,
  },
  reducers: {
    fetchSuccess: state => {
      state.loading = false;
    },
    fetchFailed: state => {
      state.loading = false;
    },
    fetchStarted: state => {
      state.loading = true;
    },
  },
});

// Actions
export const {fetchSuccess, fetchFailed, fetchStarted} = slice.actions;

export default slice.reducer;
