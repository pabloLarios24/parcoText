import { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { BrandColorTypes } from './brand-color-type';
import { TextStylesType } from './text-types';


type knownBrandColors = {
  [k in BrandColorTypes]: string;
};

type knownTypes = {
  [k in TextStylesType]: TextStyleProp;
};

export interface themeType {
  brandColor: knownBrandColors;
  paddingHorizontal: number;
  textStyles: knownTypes;
  bottomStickyViewBottomPadding: number;
}
