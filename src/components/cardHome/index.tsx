import React from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale, verticalScale } from '../../utils/scaleMetrics'

import styles from './styles'

const CardHome = ({iconName, value}) => {
    const getIcon = () =>{
        switch(iconName){
            case 'cal':
                return <MaterialCommunityIcons name={'fire'} style={{fontSize: verticalScale(25)}} />;
            break;
            case 'car':
                return <MaterialCommunityIcons name={'bread-slice'} style={{fontSize: verticalScale(25)}} />;
            break;
            case 'pro':
                return <MaterialCommunityIcons name={'food-drumstick'} style={{fontSize: verticalScale(25)}} />;
            break;
            case 'wht':
                return <MaterialCommunityIcons name={'weight'} style={{fontSize: verticalScale(25)}} />;
            break;
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textValue}>
                {value ? value : '--'}
            </Text>
            {getIcon()}
        </View>
    )
}

export default CardHome;
