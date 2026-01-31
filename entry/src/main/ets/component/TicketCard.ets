// 购票展示卡片
@Component
export default struct TicketCard {
  build() {
    Column({ space: 8 }) {
      Column({ space: 8 }) {
        Text('大门票')
          .fontSize(20)
          .fontWeight(FontWeight.Medium)
        Text('全网身份证限购一张')
          .fontColor(Color.Green)
          .fontSize(14)
        Text('成人票')
          .fontWeight(FontWeight.Medium)
          .fontSize(16)
      }
      // .padding({ left: 12 })
      .width('100%')
      .alignItems(HorizontalAlign.Start)

      Row({ space: 3 }) {
        Text('可订今日')
          .fontSize(12)
          .fontColor(Color.Orange)
          .border({ width: 1, radius: 3, color: Color.Orange })
        Text('可订今日')
          .fontSize(12)
          .fontColor(Color.Orange)
          .border({ width: 1, radius: 3, color: Color.Orange })
        Text('可订今日')
          .fontSize(12)
          .fontColor(Color.Orange)
          .border({ width: 1, radius: 3, color: Color.Orange })
      }
      // .padding({ left: 12 })
      .width('100%')
      .justifyContent(FlexAlign.Start)

      Row({ space: 5 }) {
        Text('¥129起')
          .fontWeight(FontWeight.Medium)
          .fontSize(18)
          .fontColor(Color.Orange)
        Text('订')
          .fontColor(Color.White)
          .fontSize(18)
          .fontWeight(FontWeight.Medium)
          .borderRadius(8)
          .padding(8)
          .backgroundColor(Color.Orange)
      }
      // .padding({ right: 12 })
      .width('100%')
      .justifyContent(FlexAlign.End)
    }
    .backgroundColor(Color.White)
    .borderRadius(12)
    .padding({ top: 8, right: 12, left: 12 })
    .width('90%')
    .height(160)
  }
}