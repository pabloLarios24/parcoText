import React from 'react'
import ScanBarCode from './ScanBarCode'
import {useAppSelector, RootState} from '../../rtk/store'

const ProductListController: React.FC = () => {
    // const { user } = useAppSelector((state: RootState) => state);
    // console.log({user})
    return <ScanBarCode />

}

export default ProductListController