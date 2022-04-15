import { Category, CategoryObject, MarketCategory } from './categories.type'

export type Product = {
  isOrder: boolean
  tags?: string[]

  description: string
  shortDescription: string

  stock: number
  inStock: boolean

  name: string
  price: number
  rating?: number
  mainMarket: string

  productCategory?: CategoryObject<Category>
  marketCategories: CategoryObject<MarketCategory>

  isSubproduct: boolean

  magnitude?: number
  measure?: string

  deliveryType: number
  hasFreeDelivery: boolean
  isOnlyDelivery: boolean

  unitsSold: number
  createdAt: Date

  promoValue: number

  isAvailable: boolean
  pictures: string

  promo: number
  productID: string
  isExclusive: boolean
  priority: number
}
