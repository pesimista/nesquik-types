import { Model } from './model.type'

export type CategoryObject<T> = {
  ids: string[]
  categoriesDescriptions: T[]
}

export type Category = Model & {
  categoryID: string
  parent: string
  image?: string
  name: string

  order?: string
  shape?: string
  banner?: string
}

export type MarketCategory = Model & {
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
