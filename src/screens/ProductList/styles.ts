import { StyleSheet } from 'react-native'
import { verticalScale } from '../../utils/scaleMetrics'
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
})

export default styles;