import {ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {fetchAllAssets} from '../redux/allAssets';

export default function UseAssetRepository() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const getAssetsForHomeScreen = () => {
    dispatch(fetchAllAssets(123));
  };
  return [getAssetsForHomeScreen];
}
