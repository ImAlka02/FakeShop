export interface responseProduct {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: categoryResponse
  }

  export interface categoryResponse {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }