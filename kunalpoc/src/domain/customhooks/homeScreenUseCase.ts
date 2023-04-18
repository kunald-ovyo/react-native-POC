import {useCallback, useEffect, useRef, useState} from 'react';
import UseAssetRepository from '../../data/customhooks/AllAssetsRepository';
import {assetEntity} from '../../data/model/Assets';
import {allAssetsObserver} from '../rx-observables/AllAssetsObservables';

export type HomeScreenData = {
  allAssetsData: HomeScrenObjectList[];
  carouselData: assetEntity[];
  bannerData: assetEntity[];
  loading: boolean;
};

type HomeScrenObjectList = {name: {}; data: assetEntity[]};

const UsehomeScreenCase = () => {
  const [getAssetsForHomeScreen] = UseAssetRepository();
  const tempReferenceAllAssets = useRef<HomeScrenObjectList[]>([]);

  const [homeScreenData, setHomeScreenData] = useState<HomeScreenData>({
    allAssetsData: [],
    carouselData: [],
    bannerData: [],
    loading: false,
  });

  const getNextPageAssets = useCallback(() => {
    getAssetsForHomeScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    allAssetsObserver.subscribe((value: any) => {
      let bannerList: HomeScrenObjectList[] = [];

      if (value !== undefined && value !== null) {
        value.forEach((element: any) => {
          let workingObject: HomeScrenObjectList = {
            name: '',
            data: [],
          };
          let carouselList: assetEntity[] = [];
          workingObject.name = element.lon;
          if (element.cd !== undefined) {
            element.cd.forEach((asset: any) => {
              const rating = asset.rat !== undefined ? asset?.rat[0]?.v : '+UA';
              carouselList.push({
                contentType: asset.cty,
                id: asset.id,
                genres: asset.log,
                title: asset.lon,
                rating: rating,
              });
            });
          }
          workingObject.data = carouselList;
          bannerList.push(workingObject);
        });

        tempReferenceAllAssets.current = [
          ...tempReferenceAllAssets.current,
          ...bannerList,
        ];

        console.log(
          'cheking length of tempReferenceAllAssets',
          tempReferenceAllAssets.current.length,
        );

        setHomeScreenData(value => {
          return {
            ...value,
            allAssetsData: tempReferenceAllAssets.current,
          };
        });
      } else {
        console.log('Logging failed pagination data ', value);
      }
    });
    getAssetsForHomeScreen();
    return () => {
      allAssetsObserver.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [homeScreenData, getNextPageAssets];
};

export default UsehomeScreenCase;
