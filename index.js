import { YellowBox, AppRegistry } from 'react-native';
import App from './src/index';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('desafiodois', () => App);
