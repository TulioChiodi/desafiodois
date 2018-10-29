import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input:{
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Styles;
