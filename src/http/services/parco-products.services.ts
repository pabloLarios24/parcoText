import { ParcoApi } from '../api-parco'

async function getProductApi(productId: string ): Promise<any> {
  const response = await ParcoApi.getInstance().getRequest(`product/${productId}.json`);
  const { data } = response;
  return data;
}


export const parcoServices = {
  getProductApi
};
