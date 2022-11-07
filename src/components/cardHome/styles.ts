import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from '../../utils/scaleMetrics'
import theme from '../../components/theme/theme'

const styles = StyleSheet.create({
    container: {
        width: moderateScale(160),
        height: verticalScale(230),
        borderRadius: moderateScale(10),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(10)
    },
    textValue: {
        ...theme.textStyles.h1,
        marginBottom: verticalScale(10)
    },
})

export default styles;