// /api/productApi.js
import { apiRequest } from './Centerlised_ApiRequest';
 

export const getAllProducts = ({ limit, skip }) => apiRequest({ url: '/products',data: {},params: { limit, skip } });

// export const getProductById = (id) =>
//   apiRequest({ url: `/products/${id}`, method: 'get' });