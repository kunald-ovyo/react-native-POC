import {ThunkDispatch} from '@reduxjs/toolkit';
import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAllAssets} from '../redux/AllAssets';

export default function UseAssetRepository() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const pageReference = useRef<number>(0);
  const getAssetsForHomeScreen = () => {
    pageReference.current = pageReference.current + 1;
    dispatch(fetchAllAssets(pageReference.current));
  };
  return [getAssetsForHomeScreen];
}
