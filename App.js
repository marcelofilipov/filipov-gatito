import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Reactotron from 'reactotron-react-native';

import Routes from './src/Routes';
import DefaultScreen from './src/components/DefaultScreen';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

const App = () => {
  console.tron.log('Isto é apenas um testes...');
  return (
    <DefaultScreen>
      <Routes />
    </DefaultScreen>
  );
}

export default App;
