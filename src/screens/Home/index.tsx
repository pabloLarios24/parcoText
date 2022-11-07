import React, { useEffect, useState } from 'react'
import HomeScreen from './HomeScreen'
import {useAppSelector, RootState, useAppDispatch} from '../../rtk/store'
import { HomeStackParams } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import ModalProduct from '../../components/modalProducts';
import { parcoServices } from '../../http/services/parco-products.services';
import { ProductInterface } from '../../rtk/types';
import { addProductSlice, editTotalNutriotion } from '../../rtk/slices/user.slice'

const HomeController: React.FC = () => {
    const { user } = useAppSelector((state: RootState) => state);
    const [showProductModal, setShowProductModal] = useState<boolean>(false);
    const [product, setProduct] = useState<ProductInterface>()
    const route = useRoute<RouteProp<HomeStackParams, 'Home'>>();
    const { barcode } = route.params;
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(barcode?.displayValue){
            getProduct();
        }
        console.log({barcode})
    },[barcode])

    const getProduct = async () =>{
        const productRequest = await parcoServices.getProductApi(barcode.displayValue + '')
        if(productRequest?.product){
            const productTem: ProductInterface = {
                name: productRequest?.product?.product_name,
                img: productRequest?.product?.image_url,
                portion: 1,
                cal: productRequest?.product?.nutriments?.carbohydrates_100g,
                car: productRequest?.product?.nutriments['energy-kcal_100g'],
                gra: productRequest?.product?.nutriments.fat_100g,
                pro: productRequest?.product?.nutriments.proteins_100g
            }
            setProduct(productTem)
        }
    }

    useEffect(()=>{
        if(product && product.name){
            setShowProductModal(true)
        }
    }, [product])

    const closeModal = () => {
        setShowProductModal(false)
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
                products = user.products.concat(products);
                cal = cal + (product.cal * product.portion);
                car = car + (product.car * product.portion);
                pro = pro+ product.pro;
                products.push(product)
            }
        }else{
            cal = cal + (product.cal * product.portion);
            car = car + (product.car * product.portion);
            pro = pro+ product.pro;
            products.push(product)
        }
        dispatch(editTotalNutriotion({cal, car, pro}))
        dispatch(addProductSlice(products));
        closeModal();
        setProduct(null);
    }
    
    return(
        <View style={{flex: 1}}>
            <HomeScreen />  
            {
                showProductModal &&
                    <ModalProduct addProduct={addProduct} productToRender={product} closeModal={closeModal} isNew={true} />
            }
        </View>
    )

}

export default HomeController