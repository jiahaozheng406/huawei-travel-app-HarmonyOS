// 搜索结果卡片
@Component
@Preview
export default struct SearchResultCard {
  build() {
    Row() {
      Image($r('app.media.Dt4'))
        .width(110)
        .height(160)
        .borderRadius(8)
        .margin({ left: 6, right: 6 })

      Column({ space: 12 }) {
        // 景点|酒店|旅游团 名称
        Row({ space: 5 }) {
          Text('南山文化旅游区')
            .fontSize(20)
            .fontWeight(FontWeight.Medium)
          Text('5A')
        }
        .padding({ top: 5 })
        .width('100%')
        .justifyContent(FlexAlign.Start)

        // 评分 + 地点
        Row({ space: 5 }) {
          Text('4.9')
            .padding({ left: 5, right: 5, bottom: 3, top: 3 })
            .borderRadius(18)
            .fontColor(Color.White)
            .backgroundColor(Color.Orange)
          Text('1000+点评')
          Text('三亚 崖州')
        }
        .width('100%')
        .justifyContent(FlexAlign.Start)

        // 介绍|推荐语
        Row() {
          Text('"素斋自助菜肴, 观盛唐风格寺院"')
        }
        .width('100%')
        .margin({ bottom: 6 })
        .justifyContent(FlexAlign.Start)

        // 价格
        Row() {
          Text('¥240起')
            .height(50)
            .fontSize(24)
            .fontColor(Color.Orange)
            .align(Alignment.Center)
        }
        .width('65%')
        .justifyContent(FlexAlign.End)
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
      .height(160)
      // .justifyContent(FlexAlign.SpaceBetween)
      .alignItems(HorizontalAlign.Start)
    }
    .padding({ top: 5, bottom: 5, right: 8 })
    .margin({ top: 16 })
    .justifyContent(FlexAlign.SpaceBetween)
    .alignItems(VerticalAlign.Center)
    .height(160)
    .width("100%")
    // .backgroundColor($r('app.color.primary_color_bg'))
  }
}