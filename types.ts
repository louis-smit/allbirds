export interface Product {
  name: string
  description: string
  styles: ProductStyles[]
}

export interface ProductStyles {
  name: string
  price: string
  colors: string[]
}

export type Category = string
