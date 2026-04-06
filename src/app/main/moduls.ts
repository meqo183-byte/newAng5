
export class Product {
  id! : number;
  name? : string;
  price! : number;
  nuts? : boolean;
  image? : string;
  vegeterian? : boolean;
  spiciness? : spicinessEnum;
  categoryId? : number
}


export enum spicinessEnum {
  noSpice =0,
  lessSpice = 1,
  medSpice = 2,
  moreSpice = 3,
  maxSpice = 4
}

export class Categories{
    id! : number;
    name! : string

}