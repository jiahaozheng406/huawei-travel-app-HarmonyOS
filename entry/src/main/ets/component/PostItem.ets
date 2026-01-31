// 用户帖子item(card

@Component
export default struct PostCard {
  // 是否显示关注按钮
  show_btn?: boolean = true
  // 头像
  avator: Resource = $r('app.media.DT4')
  // 封面
  img: Resource = $r('app.media.DT4')
  // 标题
  title: string | Resource = 'title'
  // 文章描述|简介
  desc: string | Resource = 'desc'
  // 用户名称
  uname: string | Resource = 'user1'
  // 发布时间
  pub_date: string | Resource = '2025-10-18'

  build() {
    Column({ space: 10 }) {
      // 头像|时间|用户名|关注按钮
      Row({ space: 12 }) {
        Row({ space: 8 }) {
          Image(this.avator)
            // 裁剪为圆
            .clip(new Circle({ width: '48vp', height: '48vp' }))
            .width(48)
            .height(48)
          // .objectFit(ImageFit.Cover)
          Column({ space: 6 }) {
            Text(this.uname)
              .fontSize(28)
              .fontWeight(600)
            Text(this.pub_date)
              .fontSize(16)
          }
          // 顶着左边
          .alignItems(HorizontalAlign.Start)
        }

        Button('+关注')
          .height(30)
          .width(64)
          .borderRadius(8)
          .fontColor(Color.Black)
          .backgroundColor($r('app.color.primary_color'))
          .type(ButtonType.Normal) // 方型
          .visibility(this.show_btn ? Visibility.Visible : Visibility.None)
      }
      // 垂直居中
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)
      .width('100%')
      .padding({ left: 12, right: 12 })

      // 标题|描述
      Row() {
        Column({ space: 6 }) {
          Text(this.title)
            .fontSize(24)
            .fontWeight(600)
          Text(this.desc)
            .fontSize(16)
            .fontColor(Color.Gray)
        }
        .alignItems(HorizontalAlign.Start)
      }
      .height(40)
      .width('100%')
      .margin({ bottom: 4 })
      // .padding({ top: 2 })
      .alignItems(VerticalAlign.Top)

      // 图
      Image(this.img)
        .objectFit(ImageFit.Cover)
        .width('100%')
        .borderRadius({ bottomLeft: 14, bottomRight: 14 })
        .height(160)
    }
    // .border({ style: BorderStyle.Solid, width: 1, color: Color.Black })
    .clip(true)
    .width('100%')
    .borderRadius(14)
    .backgroundColor(Color.White)
  }
}