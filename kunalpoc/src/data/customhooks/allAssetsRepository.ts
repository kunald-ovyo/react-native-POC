import {ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {fetchAllAssets} from '../redux/AllAssets';

export default function UseAssetRepository() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const getAssetsForHomeScreen = () => {
    console.log('Kunal checking ');
    dispatch(fetchAllAssets(123));
  };
  return [getAssetsForHomeScreen];
}
