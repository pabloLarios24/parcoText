import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { moderateScale, verticalScale } from '../../utils/scaleMetrics';
import { themeType } from '../types/theme';

const isIphone = Platform.OS === 'ios';
const isIphoneWithNotch = isIphone && DeviceInfo.hasNotch();

const theme: themeType = {
  brandColor: {
    parco_black: '#000',
    parco_primary:  '#008060',
    parco_secondary:  '#dd0000',
    parco_white:  '#FFF',
  },
  textStyles:{ 
    h1: {
      fontSize: moderateScale(20),
    },
    h2: {
      fontSize: moderateScale(18),
    },
    h3: {
      fontSize: moderateScale(16),
    },
  },
  paddingHorizontal: moderateScale(15),
  bottomStickyViewBottomPadding: isIphoneWithNotch ? Math.round(verticalScale(10)) : 0

};
export default theme;
