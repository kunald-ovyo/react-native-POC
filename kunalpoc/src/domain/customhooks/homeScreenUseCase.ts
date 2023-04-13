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

  const [homeScreenData, setHomeScreenData] = useState<HomeScreenData>({
    carouselData: [],
    bannerData: [],
    loading: false,
  });

  useEffect(() => {
    allAssetsObserver.subscribe(value => {
      let carouselList: assetEntity[] = [];
      let bannerList: assetEntity[] = [];
      value.forEach(element => {
        if (element.cd !== undefined) {
          element.cd.forEach(asset => {
            if (element.lo === 'carousel') {
              carouselList.push({
                contentType: asset.cty,
                id: asset.id,
                genres: asset.log,
                title: asset.lon,
                rating: asset.rat[0].v,
              });
            } else {
              bannerList.push({
                contentType: asset.cty,
                id: asset.id,
                genres: asset.log,
                title: asset.lon,
                rating: asset.rat[0].v,
              });
            }
          });
        }
      });

      setHomeScreenData(value => {
        return {...value, carouselData: carouselList, bannerData: bannerList};
      });
    });
    getAssetsForHomeScreen();
    return () => {
      allAssetsObserver.unsubscribe();
    };
  }, []);

  return [homeScreenData];
};

export default UsehomeScreenCase;
