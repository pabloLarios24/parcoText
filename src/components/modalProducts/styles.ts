import { StyleSheet } from 'react-native'
import { moderateScale } from '../../utils/scaleMetrics'
import theme from '../../components/theme/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerModal:{
        width: moderateScale(300),
        borderRadius: moderateScale(10),
        backgroundColor: 'white',
        padding: moderateScale(15),
    },
    textTitle:{
        ...theme.textStyles.h2
    },
    containerInputs:{
        width: '100%',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: moderateScale(20)
    },
    containerButtonDelete:{
        backgroundColor: theme.brandColor.parco_secondary,
        width: moderateScale(120),
        height: moderateScale(50),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton:{
        backgroundColor: theme.brandColor.parco_primary,
        width: moderateScale(120),
        height: moderateScale(50),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        ...theme.textStyles.h3,
        color: theme.brandColor.parco_white,
        fontWeight: 'bold'
    }
    
})

export default styles;