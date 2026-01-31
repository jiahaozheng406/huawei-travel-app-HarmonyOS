// 给路线规划页面提供数据和操作方法
export class ScenicViewModel {
  /**
   * 获取路径规划
   * @param cur_idx 当前算法索引(时间最短|路径最短|最多人走)
   * @returns
   */
  getLocations(cur_idx:number): Array<card_data> {
    switch (cur_idx) {
      case 0:
        return [
          new card_data(
            $r("app.media.start"),
            "沙坡尾艺术西街"
          ),
          new card_data(
            $r("app.media.one"),
            "南普陀寺"
          ),
          new card_data(
            $r("app.media.two"),
            "厦门大学"
          ),
          new card_data(
            $r("app.media.three"),
            "白城沙滩"
          ),
          new card_data(
            $r("app.media.end"),
            "厦门园林植物园"
          ),
        ]
      case 1:
        return [
          new card_data(
            $r("app.media.start"),
            "沙坡尾艺术西街"
          ),
          new card_data(
            $r("app.media.one"),
            "xxx1"
          ),
          new card_data(
            $r("app.media.two"),
            "厦门大学"
          ),
          new card_data(
            $r("app.media.three"),
            "白城沙滩"
          ),
          new card_data(
            $r("app.media.end"),
            "xxx植物园"
          ),
        ]
      case 2:
        return [
          new card_data(
            $r("app.media.start"),
            "沙坡尾艺术西街"
          ),
          new card_data(
            $r("app.media.one"),
            "xxx1"
          ),
          new card_data(
            $r("app.media.two"),
            "xx大学"
          ),
          new card_data(
            $r("app.media.three"),
            "xx沙滩"
          ),
          new card_data(
            $r("app.media.end"),
            "xxx植物园"
          ),
        ]
      case 3:
        return [
          new card_data(
            $r("app.media.start"),
            "沙坡尾艺术西街2121"
          ),
          new card_data(
            $r("app.media.one"),
            "sdfasdfer"
          ),
          new card_data(
            $r("app.media.two"),
            "xx大学"
          ),
          new card_data(
            $r("app.media.three"),
            "xx沙滩"
          ),
          new card_data(
            $r("app.media.end"),
            "xxx植物园"
          ),
        ]
      default:
        break;
    }
  }
}

export class card_data {
  // 左侧的图标
  icon: Resource
  // 景点名称
  name: string

  constructor(icon: Resource, name: string) {
    this.icon = icon
    this.name = name
  }
}

export default new ScenicViewModel()