import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
  },

  Avatar: {
   // marginHorizontal: metrics.basePadding,
   // marginTop: metrics.baseMargin,
    margin: metrics.baseMargin,
  },

  repoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  infoContainer: {
    flexDirection: 'column',
    marginTop: metrics.baseMargin,
  },

  // info: {
  //   marginRight: metrics.baseMargin,
  //   alignItems: 'center',
  // },

  avatar: {
    width: 50,
    height: 50,
  },

});


export default styles;
