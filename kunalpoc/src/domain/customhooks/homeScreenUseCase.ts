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
      let carouselList: any[][] = [];
      let bannerList: any[][] = [];
      value.forEach(element => {
        if (element.cd !== undefined) {
          element.cd.forEach(asset => {
            if (asset.lo !== undefined) {
              if (asset.lo === 'carousel') {
                carouselList.push(asset);
              } else {
                bannerList.push(asset);
              }
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
