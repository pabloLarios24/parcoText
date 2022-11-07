import React from 'react'
import { View, Text } from 'react-native'
import CardProduct from '../../components/cardProduct'
import ModalProduct from '../../components/modalProducts'
import { RootState, useAppSelector } from '../../rtk/store'
import { ProductInterface } from '../../rtk/types'


import styles from './styles'

interface ProductListProps {
    selectProduct: (product: ProductInterface) => void;
    removeProduct: (product: ProductInterface) => void;
}

const ProductListScreen: React.FC<ProductListProps> = ({selectProduct, removeProduct}) => {
    const { user } = useAppSelector((state: RootState) => state);

    return(
        <View style={styles.container}>
            <Text style={styles.textWelcome}>
                {`Total productos encontrados: ${user.products ? user.products.length : 0 }`}
            </Text>
            {
                user.products ?
                    user.products.map((product)=>(
                        <CardProduct product={product} selectProduct={selectProduct} removeProduct={removeProduct} />
                    ))
                :
                    null
            }
        </View>
    )

}

export default ProductListScreen