import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from '../../utils/scaleMetrics'
import theme from '../../components/theme/theme'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: verticalScale(80),
        borderRadius: moderateScale(10),
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        padding: moderateScale(10)
    },
    imageContainer: {
        width: moderateScale(70),
        height: moderateScale(70),
        borderRadius: moderateScale(10),
        overflow: 'hidden',
        backgroundColor: 'gray'
    },
    textTitle: {
        ...theme.textStyles.h2
    },
    textPortions: {
        ...theme.textStyles.h1
    },
    textInfo: {
        ...theme.textStyles.h3,
        marginTop: verticalScale(5)
    },
    containerLeft:{
        flex:.3
    },
    containerCenter:{
        flex:.5,
        paddingHorizontal: moderateScale(5)
    },
    containerRight:{
        flex:.2,
        justifyCenter: 'center',
        alignItems: 'center'
    },
    rightAction:{
        minHeight: verticalScale(80),
        justifyCenter: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10)
    },
    icon:{
        fontSize: verticalScale(25), 
        color: 'white', 
        marginTop: verticalScale(25)
    },
    containerHeader:{
        marginTop: verticalScale(10)
    }
})

export default styles;