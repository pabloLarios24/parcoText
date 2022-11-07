import React, { useState } from 'react'
import ProductListScreen from './ProductListScreen'
import {useAppSelector, RootState, useAppDispatch} from '../../rtk/store'
import { ProductInterface } from '../../rtk/types';
import { addProductSlice, editTotalNutriotion, removeProductSlice } from '../../rtk/slices/user.slice';
import { View } from 'react-native';
import ModalProduct from '../../components/modalProducts';

const ProductListController: React.FC = () => {
    const { user } = useAppSelector((state: RootState) => state);
    const [showProductModal, setShowProductModal] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductInterface>()
    const dispatch = useAppDispatch();

    const closeModal = () => {
        setShowProductModal(false)
    }

    const selectProduct = (productTem: ProductInterface)=>{
        setProduct(productTem);
        setShowProductModal(true)
    }

    const addProduct = (product: ProductInterface) => {
        let products: ProductInterface[] = [];
        let cal: number = user.cal ? user.cal : 0;
        let car: number = user.car ? user.car : 0;
        let pro: number = user.pro ? user.pro : 0;
        if(user.products?.length){
            const index = user.products.findIndex((item)=> item.name === product.name);
            if(index>=0){
                products = user.products.concat(products);
                cal = (cal - products[index].cal ) + (product.cal * product.portion);
                car = (car - products[index].car ) + (product.car * product.portion);
                pro = (pro - products[index].pro ) + (product.pro * product.portion);
                products[index].cal = (product.cal * product.portion);
                products[index].car = (product.car * product.portion);
                products[index].pro = (product.pro * product.portion);
                products[index].portion = product.portion;
            }else{
                cal = cal + (product.cal * product.portion);
                car = car + (product.car * product.portion);
                pro = pro+ (product.pro * product.portion);
                products = user.products.concat(products);
                products.push(product)
            }
        }else{
            cal = cal + (product.cal * product.portion);
            car = car + (product.car * product.portion);
            pro = pro+ (product.pro * product.portion);
            products.push(product)
        }
        dispatch(editTotalNutriotion({cal, car, pro}))
        dispatch(addProductSlice(products));
        closeModal();
        setProduct(null);
    }

    const removeProduct = (productTem: ProductInterface)=>{
        const cal: number = user.cal - (productTem.cal * productTem.portion);
        const car: number = user.car - (productTem.car * productTem.portion);
        const pro: number = user.pro - (productTem.pro * productTem.portion);
        dispatch(editTotalNutriotion({cal, car, pro}))
        dispatch(removeProductSlice(productTem))
        closeModal();
        setProduct(null);
    }

    return(
        <View style={{flex: 1}}>
            <ProductListScreen selectProduct={selectProduct} removeProduct={removeProduct} />  
            {
                showProductModal &&
                    <ModalProduct removeProduct={removeProduct} addProduct={addProduct} productToRender={product} closeModal={closeModal} isNew={false} />
            }
        </View>
    )

}

export default ProductListController