import React, { useRef } from 'react'
import { View, Text, Animated, TouchableOpacity, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { moderateScale } from '../../utils/scaleMetrics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'
import { ProductInterface } from '../../rtk/types';

interface CardProductProps {
    selectProduct: (product: ProductInterface) => void;
    removeProduct: (product: ProductInterface) => void;
    product: ProductInterface;
}

const CardProduct = ({product, selectProduct, removeProduct}: CardProductProps) => {

    const swipeableRow = useRef(null);


    const renderRightActions = (
        progress: Animated.AnimatedInterpolation,
    ) => (
        <View
        style={{
            width: moderateScale(80)
        }}>
            {renderRightAction('#dd0000', moderateScale(80), progress)}
        </View>
    );

    const renderRightAction = (
        color: string,
        x: number,
        progress: Animated.AnimatedInterpolation
    ) => {
        const trans = progress.interpolate({
          inputRange: [0, 1],
          outputRange: [x, 0],
        });
        const pressHandler = () => {
          close();
          removeProduct(product);
        };
    
        return (
          <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
            <RectButton
              style={[styles.rightAction, { backgroundColor: color }]}
              onPress={pressHandler}>
              <MaterialCommunityIcons name={'delete'} style={styles.icon} />
            </RectButton>
          </Animated.View>
        );
    };

    const close = () => {
        swipeableRow.current?.close();
    };  

    return (
        <View style={styles.containerHeader}>
            <Swipeable ref={swipeableRow} renderRightActions={renderRightActions}>
                <TouchableOpacity onPress={()=>selectProduct(product)} style={styles.container}>
                    <View style={styles.containerLeft}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{uri: product.img}}
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.containerCenter}>
                        <Text style={styles.textTitle}>{product.name}</Text>
                        <Text style={styles.textInfo}>22/10/22</Text>
                    </View>
                    <View style={styles.containerRight}>
                        <Text style={styles.textPortions}>{product.portion}</Text>
                        <Text style={styles.textInfo}>Por</Text>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </View>
    )
}

export default CardProduct;
