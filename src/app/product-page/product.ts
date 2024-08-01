export default interface Product {
  id: Number
  title: string,
  price: number,
  description: string,
  image: string
  category: string
  rating: rating
}
interface rating {
  rate: Number
  count: Number
}
