import { StackNavigator, TabNavigator } from 'react-navigation';

import Lista from 'pages/lista';
import Issues from 'pages/issues';

const Routes = StackNavigator({
  Lista: { screen: Lista },
}, {
  initialRouteName: 'Lista',
});

export default Routes;
