import React from 'react';
import { useTranslation } from 'react-i18next';
import cloudy from '../../assets/icons/cloudy.svg';
import Temperature from '../../components/Atoms/Temperature';
import WeatherIcon from '../../components/Atoms/WeatherIcon';
import AutoComplete from '../../components/Molecules/AutoComplete';
import CityTitle from './../../components/Atoms/CityTitle';
import GroupInfos from './../../components/Molecules/GroupInfos/index';
import * as S from './styles';

const arrayTest = [
  { name: 'São Paulo' },
  { name: 'Rio de Janeiro' },
  { name: 'Belo Horizonte' },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <AutoComplete
        placeholder={t('Home.InputSearchCity')}
        optionsArray={arrayTest}
      />
      <WeatherIcon svg={cloudy} />
      <CityTitle text="São Paulo" />
      <Temperature value={31} />
      <GroupInfos />
    </S.Container>
  );
};

export default Home;
