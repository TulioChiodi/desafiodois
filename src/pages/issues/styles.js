import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
    alignItems: 'stretch',
  },

  loading: {
    marginTop: metrics.basePadding,
  },

  form: {
    flexDirection: 'row',
  },

  lineStyle: {
    borderWidth: 0.2,
    borderColor: colors.dark,
    marginTop: metrics.basePadding,
    marginBottom: metrics.basePadding,
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingLeft: metrics.basePadding,
  },

  icons: {
    marginLeft: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Styles;
