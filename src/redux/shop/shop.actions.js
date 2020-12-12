
import { ShopActionTypes } from './shop.types';

export const getByCategoryByName = (name) =>({
    type: ShopActionTypes.GET_ITEMS_BY_NAME,
    payload:name
});
