import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from '../../utils/scaleMetrics'
import theme from '../../components/theme/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: verticalScale(10),
        paddingHorizontal: theme.paddingHorizontal,
        paddingBottom: theme.bottomStickyViewBottomPadding
    },
    textWelcome: {
        ...theme.textStyles.h1,
        marginBottom: verticalScale(5)
    },
    containerCards:{
        widht: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    containerProducts:{
        widht: '100%',
        alignItems: 'center',
        marginTop: verticalScale(20)
    },
    textProducts: {
        ...theme.textStyles.h2,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "blue",
        color: 'blue'
    },
    buttonOver:{
        width: moderateScale(70),
        height: moderateScale(70),
        borderRadius: moderateScale(35),
        backgroundColor: theme.brandColor.parco_primary,
        position: 'relative',
        bottom: verticalScale(30),
        left: moderateScale(250),
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;