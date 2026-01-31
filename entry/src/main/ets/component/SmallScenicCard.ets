// 简单的景区卡片
@Component
export default struct SmallScenicCard {
  build() {
    Row() {
      Row() {
        Image($r('app.media.Dt3'))
          .width(56)
          .height(56)
          .borderRadius(6)
          .margin({ left: 6, right: 6 })

        Column({ space: 12 }) {
          Text('xxx景区')
            .fontSize(15)
            .fontWeight(FontWeight.Medium)
          Row() {
            Text('4.9分')
              .fontSize(12)
            Text('|')
              .margin(2)
            Text('水上乐园, 和家人一起欢乐玩耍')
              .fontSize(12)
          }
        }
        .justifyContent(FlexAlign.Center)
        .height(56)
        // .justifyContent(FlexAlign.SpaceBetween)
        .alignItems(HorizontalAlign.Start)
      }
      .justifyContent(FlexAlign.Start)

      Text('¥240起')
        .height(50)
        .fontColor(Color.Orange)
        .align(Alignment.Center)
    }
    .padding({ top: 5, right: 8 })
    .margin({ top: 16 })
    .justifyContent(FlexAlign.SpaceAround)
    .alignItems(VerticalAlign.Center)
    .height(72)
    .width("100%")
    .backgroundColor($r('app.color.primary_color_bg'))
  }
}