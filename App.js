import React from 'react';
import Login from './components/Login';
import Galleries from './components/Galleries';

import { YellowBox } from 'react-native';
import _ from 'lodash';
import { StackNavigator } from 'react-navigation';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const App = StackNavigator({
    Login: { screen: Login, header: null },
    Galleries: { screen: Galleries, title:'Galerias' },
  },
  {
    initialRouteName: 'Login'
  });
/*
export default class App extends React.Component {
  render() {
    return (
      <Login></Login>
    );
  }
}*/
export default App;
