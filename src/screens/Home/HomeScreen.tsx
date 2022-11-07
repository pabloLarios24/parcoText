import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CardHome from '../../components/cardHome'
import theme from '../../components/theme/theme'
import { HomeStackParams } from '../../navigation/types'
import { RootState, useAppSelector } from '../../rtk/store'
import { verticalScale } from '../../utils/scaleMetrics'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import styles from './styles'

const HomeScreen: React.FC = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<HomeStackParams>>();
    const { user } = useAppSelector((state: RootState) => state);

    const showProductsView = () => {
        navigate('ProductList');
    }

    const showBarScan = () => {
        navigate('ScanCodeBar');
    }


    return(
        <View style={styles.container}>
            <Text style={styles.textWelcome}>
                Bienvenido Parco!
            </Text>
            <View style={styles.containerCards}>
                <CardHome value={user.weight ? user.weight : 0} iconName={'wht'}/>
                <CardHome value={user.cal ? user.cal : 0} iconName={'cal'} />
                <CardHome value={user.car ? user.car : 0} iconName={'car'}/>
                <CardHome value={user.pro ? user.pro : 0} iconName={'pro'}/>
            </View>
            <View style={styles.containerProducts}>
                <TouchableOpacity onPress={showProductsView} >
                    <Text style={styles.textProducts}>
                        Ver productos
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonOver}>
                <TouchableOpacity onPress={showBarScan}>
                    <MaterialCommunityIcons name={'weight'} style={{fontSize: verticalScale(25), color: theme.brandColor.parco_white}} />
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default HomeScreen