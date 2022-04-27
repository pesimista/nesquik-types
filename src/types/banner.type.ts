import { Coordinates } from './coordinates.type'
import { Model } from './model.type'

export type Banner = Model & {
  bannerID: string
  image: string
  largeImage?: string
  largeImagesArray?: string[]
  type: 'lead' | 'category' | 'promo' | 'service'
  name: string
  priority: number
  isHidden: boolean
  url: string
  queryParams?: BannerQueryParams
  disabled?: boolean
  caption?: string
  isDelivery?: boolean
  coordinates?: Coordinates
  radiusDistance?: number
  affiliateID?: string
  col?: string
  dateIn?: string
  dateOut?: string
  schedule?: string[]
  gender?: 'male' | 'female'
  ageRange?: string[]
  backgroundColor?: string
  exclusiveFor: 'mobile' | 'desktop' | 'both'
  gallery?: []
}

type BannerQueryParams = {
  storeid: string
  productID: string
}
