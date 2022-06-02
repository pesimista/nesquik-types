import { Market } from './market.type'
import { Model } from './model.type'

export type CategoryObject<T> = {
  ids: string[]
  categoriesDescriptions: T[]
}

export type Category = Model & {
  market: string | Market
  categoryID: string
  image: string
  name: string
  order: number
  shape: string
  banner: string
  parent: string
}
