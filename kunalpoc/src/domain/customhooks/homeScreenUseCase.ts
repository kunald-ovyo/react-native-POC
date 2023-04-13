import {useEffect, useState} from 'react';
import UseAssetRepository from '../../data/customhooks/allAssetsRepository';
import {assetEntity} from '../../data/model/assets';
import {allAssetsObserver} from '../rx-observables/allAssetsObservables';

type HomeScreenData = {
  carouselData: assetEntity[];
  bannerData: assetEntity[];
  loading: boolean;
};

const UsehomeScreenCase = () => {
  const [getAssetsForHomeScreen] = UseAssetRepository();

  useEffect(() => {
    allAssetsObserver.subscribe(value => {
      let carouselList: assetEntity[] = [];
      let bannerList: assetEntity[] = [];
      value.forEach(element => {
        if (element.cd !== undefined) {
          console.log('Kunal 1', element.lo);
          element.cd.forEach(asset => {
            if (element.lo === 'carousel') {
              carouselList.push(asset);
            } else {
              bannerList.push(asset);
            }
          });
        }
      });

      console.log(
        'Kunal checking carousel length , banner count',
        carouselList.length,
        bannerList.length,
      );
    });
    getAssetsForHomeScreen();
    return () => {
      allAssetsObserver.unsubscribe();
    };
  }, [getAssetsForHomeScreen]);

  const [homeScreenData, setHomeScreenData] = useState<HomeScreenData>({
    carouselData: ['One', 'Two', 'Three', 'Four'],
    bannerData: ['One', 'Two', 'Three', 'Four'],
    loading: false,
  });

  return [homeScreenData];
};

export default UsehomeScreenCase;
