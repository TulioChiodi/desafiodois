import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';


const styles = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding/4,
        marginTop: metrics.baseMargin,
    },

    repoTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    infoContainer: {
        flexDirection: 'row',
        marginTop: metrics.baseMargin,
    },

    info:{
        marginRight: metrics.baseMargin,
        alignItems: 'center',
    },

});




export default styles;