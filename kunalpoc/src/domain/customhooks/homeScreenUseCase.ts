import {useEffect, useState} from 'react';
import UseAssetRepository from '../../data/customhooks/AllAssetsRepository';
import {assetEntity} from '../../data/model/Assets';
import {allAssetsObserver} from '../rx-observables/AllAssetsObservables';

type HomeScreenData = {
  allAssetsData: HomeScrenObjectList[];
  carouselData: assetEntity[];
  bannerData: assetEntity[];
  loading: boolean;
};

type HomeScrenObjectList = {name: {}; data: assetEntity[]};

const UsehomeScreenCase = () => {
  const [getAssetsForHomeScreen] = UseAssetRepository();

  const [homeScreenData, setHomeScreenData] = useState<HomeScreenData>({
    allAssetsData: [],
    carouselData: [],
    bannerData: [],
    loading: false,
  });

  useEffect(() => {
    allAssetsObserver.subscribe(value => {
      console.log('THis is testing ');
      let carouselList: assetEntity[] = [];
      let bannerList: HomeScrenObjectList[] = [];

      value.forEach(element => {
        let workingObject: HomeScrenObjectList = {
          name: '',
          data: [],
        };
        console.log('Kunal checking name', element.lon[0].n);
        workingObject.name = element.lon;
        if (element.cd !== undefined) {
          element.cd.forEach(asset => {
            carouselList.push({
              contentType: asset.cty,
              id: asset.id,
              genres: asset.log,
              title: asset.lon,
              rating: asset.rat[0].v,
            });
          });
        }
        workingObject.data = carouselList;
        bannerList.push(workingObject);
      });

      setHomeScreenData(value => {
        return {...value, allAssetsData: bannerList};
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
