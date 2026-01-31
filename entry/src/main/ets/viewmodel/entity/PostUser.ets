// 发帖的用户的信息
export default class PostUser {
  id: string
  name: string
  // 头像
  avator: Resource

  constructor(id: string, name: string,avator:Resource) {
    this.id = id
    this.name = name
    this.avator = avator
  }
}