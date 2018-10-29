import { StackNavigator, TabNavigator } from 'react-navigation';

import Lista from 'pages/lista';
import Issues from 'pages/issues';
import { colors } from 'styles';

const Routes = StackNavigator({
  Issues: { screen: Issues },
//  Lista: {
//    screen: TabNavigator({
//      Todas:  { screen: Todas },
//      Abertas: { screen: Abertas },
//      Fechadas: { screen: Fechadas },
//    }),
//  }
}, {
  initialRouteName: 'Issues',

});


export default Routes;
