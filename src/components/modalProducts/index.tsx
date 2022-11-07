import React from 'react'
import { useState } from 'react'
import { View, Text, Modal , TouchableOpacity } from 'react-native'
import { ProductInterface } from '../../rtk/types'
import { verticalScale } from '../../utils/scaleMetrics'
import InputLabel from '../inputLabel'

import styles from './styles'

interface ModalProductProps {
    closeModal: () => void;
    isNew: boolean,
    productToRender: ProductInterface,
    addProduct: (product: ProductInterface) => void;
    removeProduct: (product: ProductInterface) => void;
}

const ModalProduct = ({closeModal, isNew, productToRender, addProduct, removeProduct}: ModalProductProps) => {

    const [portion, setPortion] = useState<string>(productToRender.portion + '');

    const buttonCancelFunction = ()=> {
        if(isNew){
            closeModal()
        }else{
            removeProduct(productToRender)
        }
    }

    const buttonSaveFunction = ()=> {
        productToRender.portion = Number.parseInt(portion);
        addProduct(productToRender)
    }

    return (
        <Modal visible={true} transparent onRequestClose={()=> closeModal()} >
            <View style={styles.container}>
                <View style={styles.containerModal}>
                    <Text style={styles.textTitle}>Producto: prueba</Text>
                    <View style={styles.containerInputs}>
                        <InputLabel name='Porciones' onChangeText={setPortion} value={portion + ""} keyboardType={'number-pad'} />
                        <InputLabel name='Calorias' value={(productToRender.cal * Number.parseInt(portion)) + ""} isNotDisable keyboardType={'number-pad'} />
                        <InputLabel name='Carbohidratos' value={(productToRender.car * Number.parseInt(portion) )+ ""} isNotDisable keyboardType={'number-pad'} />
                        <InputLabel name='Proteinas' value={(productToRender.pro * Number.parseInt(portion)) + ""} isNotDisable keyboardType={'number-pad'} />
                    </View>
                    <View style={[styles.containerInputs, { marginTop: verticalScale(50) }]}>
                        <TouchableOpacity onPress={buttonCancelFunction} style={styles.containerButtonDelete}>
                            <Text style={styles.textButton}>{isNew ? 'Cancelar' : 'Eliminar'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={buttonSaveFunction} style={styles.containerButton}>
                            <Text style={styles.textButton}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalProduct;
