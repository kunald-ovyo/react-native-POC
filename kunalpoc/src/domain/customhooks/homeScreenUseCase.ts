import {useEffect, useState} from 'react';
import UseAssetRepository from '../../data/customhooks/allAssetsRepository';
import {allAssetsObserver} from '../rx-observables/allAssetsObservables';

type HomeScreenData = {
  carouselData: any[];
  bannerData: any[];
  loading: boolean;
};

const UsehomeScreenCase = () => {
  const [getAssetsForHomeScreen] = UseAssetRepository();
  useEffect(() => {
    allAssetsObserver.subscribe(value => {
      console.log('The value received is', value);
    });
    getAssetsForHomeScreen();
    return () => {
      allAssetsObserver.unsubscribe();
    };
  }, []);

  const [homeScreenData, setHomeScreenData] = useState<HomeScreenData>({
    carouselData: ['One', 'Two', 'Three', 'Four'],
    bannerData: ['One', 'Two', 'Three', 'Four'],
    loading: false,
  });

  return [homeScreenData];
};

export default UsehomeScreenCase;
