export declare type CategoryObject<T> = {
  ids: string[]
  categoriesDescriptions: T[]
}
export declare type Category = {
  categoryID: string
  parent: string
  image?: string
  name: string
  affiliateID: string
}
export declare type MarketCategory = {
  marketID: string
  order: number
  name: string
  categoryID: string
  image: string
  schedule: string[]
  affiliateID: string
  banner?: string
  shape?: string
  parent?: string
}
