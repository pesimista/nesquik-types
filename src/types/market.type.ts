import { Banner } from './banner.type'
import { Category } from './categories.type'
import { Coordinates } from './coordinates.type'
import { Model } from './model.type'

export type Schedule = {
  initialTime: string
  finalTime: string
}

export type MarketImages = {
  profile: string
  header: string
  showcaseBackgroundImage: string
  backgroundImage: string
  marketing: string[]
  headerBackgroundColor: string
}

export type Market = Model & {
  address: string
  addressID: string
  addressName: string
  bikeDistance: number
  coordinates: Coordinates
  email: string
  estimatedTime: number
  hasFreeDelivery: boolean
  hasPromo: boolean
  images: MarketImages
  isDeliveryOnly: boolean
  isOnlyQuik: boolean
  isPremium: boolean
  logo: string
  marketID: string
  marketing: Partial<Banner>[]
  marketRanking: number
  maxDeliveryRange: number
  name: string
  radiusDistance: number
  ranking: number
  rating: number
  schedule: Partial<Schedule>[]
  status: string
  categories: Category[]
}
