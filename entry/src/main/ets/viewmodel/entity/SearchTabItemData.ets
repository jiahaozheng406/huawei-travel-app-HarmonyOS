export default class TabItemData {
  // 小标签的图标
  icon: Resource
  // 小标签对应的搜索页面名
  name: string

  constructor(icon: Resource, name: string) {
    this.icon = icon
    this.name = name
  }
}