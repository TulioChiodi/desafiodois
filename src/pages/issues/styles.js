import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
    alignItems: 'stretch',
  },

  form: {
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
  },

  icons: {
    paddingLeft: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Styles;
