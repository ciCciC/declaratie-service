import {IProduct} from './imodels/IProduct';

export class Product implements IProduct {
  id: number;
  name: string;
  type: string;
  price: number;
}
