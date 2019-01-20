import { Product } from '.';

export interface Shop {
    id: number;
    title?: string;
    address?: string;
    schedule?: string; // to prevent typo
    coordinates: any[],
    goods: Product[]
}