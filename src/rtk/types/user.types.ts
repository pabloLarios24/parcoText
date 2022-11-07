export interface UserInterface {
    products?: ProductInterface[];
    weight?: number;
    pro?: number;
    car?: number;
    cal?: number;
    gra?: number;
}

export interface ProductInterface {
    name: string;
    img: string;
    portion: number;
    pro?: number;
    car?: number;
    cal?: number;
    gra?: number;
}

  