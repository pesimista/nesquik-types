import { Model } from './model.type'

export type Banner = Model & {
  bannerID: string
  image: string
  largeImage: string
  largeImagesArray: string[]
  type: 'lead' | 'category' | 'promo' | 'service'
  name: string
  order: number // priority
  isHidden: boolean
  url: string
  queryParams: BannerQueryParams
  disabled: boolean
  caption: string
  isDelivery: boolean
  radiusDistance: number
  col: string
  backgroundColor: string
  exclusiveFor: 'mobile' | 'desktop' | 'both'
}

type BannerQueryParams = {
  storeid: string
  productID: string
}
