import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from '../../utils/scaleMetrics'
import theme from '../../components/theme/theme'

const styles = StyleSheet.create({
    container: {
        width: moderateScale(120),
        marginTop: moderateScale(15)
    },
    textTitle:{
        ...theme.textStyles.h3
    },
    input:{
        width: '100%',
        height: verticalScale(35),
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: theme.brandColor.parco_black,
        padding: moderateScale(10)
    }
})

export default styles;