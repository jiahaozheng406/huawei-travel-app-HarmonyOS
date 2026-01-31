import Location from './Location'

// 景区卡片信息 -> 景区下有多个景点
export default class Scenic {
  name: string
  // 封面
  cover: Resource
  // 门票价格
  price: number
  // 景点
  locations: Location[]
}