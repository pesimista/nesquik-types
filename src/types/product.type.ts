import { Category } from './categories.type'
import { Market } from './market.type'
import { Model } from './model.type'

export type Product = Model & {
  isSubproduct: boolean
  stock: number
  rating: number
  market: string | Market
  isExclusive: boolean
  tags?: string[]
  description: string
  shortDescription: string
  pictures: string
  isAvailable: boolean
  priority: number
  magnitude: number
  measure: string
  name: string
  productID: string
  price: number
  promoValue: number
  categories: Category[] | string[]
  isPromo: boolean
  options: ProductOption[]
}

export type ProductOption = {
  type: string
  label: string
  iterable: boolean
  min: number
  max: number
  usesPrice: boolean
  required: boolean
  elements: Product[] | string[]
  selected: OptionValues[]
}

export type OptionValues = {
  elementID: string | Product
  values: number
}
