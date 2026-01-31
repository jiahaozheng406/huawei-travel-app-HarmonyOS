import router from '@ohos.router';
import CommonConstants from '../common/constants/CommonConstants';
import ScenicViewModel, { card_data } from '../viewmodel/ScenicViewModel';

// 路线规划
@Entry
@Component
export default struct ScenicPage {
  @State tip: string = '收起'
  // 是否展开 -> 不同路线规划算法
  @State extended: boolean = true
  // 当前选择的路线算法
  @State cur_idx: number = 0
  search_controller: TextInputController = new TextInputController()

  build() {
    Column() {
      // Column() {
      // Text("欢迎您来到美丽的厦门")
      //   .margin({ top: 20 })
      // }
      // .height(20)
      // .backgroundColor($r('app.color.primary_color'))

      Row({ space: 16 }) {
        // 搜索框
        TextInput({
          placeholder: '搜索路线...',
          controller: this.search_controller
        })
          .width(280)

        Button('搜索')
          // .margin({ left: 14 })
          .height(32)
          .borderRadius(8)
          .type(ButtonType.Normal) // 方型
          .fontColor(Color.Black)
          .backgroundColor($r('app.color.primary_color'))
      }
      .width(CommonConstants.FULL_PARENT)
      .margin({ top: 18, left: 20, right: 16 })
      .justifyContent(FlexAlign.Center)

      Image($r('app.media.LXT'))
        .width("100%")
        .height("35%")
        .borderRadius(10)
        .padding(5)
        .margin(10)

      // 旅游指南
      Row() {
        Text('旅游指南')
          // .align(Alignment.TopStart)
          .height(40)
          .width('90%')
          .fontSize($r('app.float.page_title_text_size'))
          .fontWeight(FontWeight.Medium)
          .fontColor($r('app.color.title_text_color'))

        Text(this.tip)
          .fontSize(20)
          .onClick((e) => {
            this.extended = !this.extended

            this.extended ?
              this.tip = '收起' :
              this.tip = '展开'
          })
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .margin({ bottom: 6, left: 12, right: 16 })

      // 4个小tag
      Row() {
        Text('时间最短')
          .backgroundColor(
              this.cur_idx == 0 ?
            $r('app.color.primary_color') :
            $r('app.color.tab_color_bg')
          )
          .padding(8)
          .borderRadius(8)
          .onClick((e) => {
            this.cur_idx = 0
          })
        Text('路径最短')
          .backgroundColor(
              this.cur_idx == 1 ?
            $r('app.color.primary_color') :
            $r('app.color.tab_color_bg')
          )
          .padding(8)
          .borderRadius(8)
          .onClick((e) => {
            this.cur_idx = 1
          })
        Text('最多人走')
          .backgroundColor(
              this.cur_idx == 2 ?
            $r('app.color.primary_color') :
            $r('app.color.tab_color_bg')
          )
          .padding(8)
          .borderRadius(8)
          .onClick((e) => {
            this.cur_idx = 2
          })
        Text('智能推荐')
          .backgroundColor(
              this.cur_idx == 3 ?
            $r('app.color.primary_color') :
            $r('app.color.tab_color_bg')
          )
          .padding(8)
          .borderRadius(8)
          .onClick((e) => {
            this.cur_idx = 3
          })
      }
      .justifyContent(FlexAlign.SpaceAround)
      .width('100%')
      .height(40)
      .margin({ bottom: 4 })
      .animation({
        duration: 500,
        curve: Curve.ExtremeDeceleration
      })
      .visibility(this.extended ? Visibility.Visible : Visibility.None)

      // 路径规划的结果
      // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
      Column() {
        ForEach(ScenicViewModel.getLocations(this.cur_idx), (item: card_data) => {
          Row() {
            Row({ space: 8 }) {
              Image(item.icon)
                .width("10%")
                .margin({ right: 10, left: 5, top: 8, bottom: 8 })

              Text(item.name)
                .fontSize(20)
                .fontWeight(FontWeight.Medium)
            }

            Image($r("app.media.RLT_kll"))
              .width("10%")
              .margin({ right: 10, top: 8, bottom: 8 })
              .onClick(() => {
                router.pushUrl({ url: 'pages/relitu', })
              })
          }
          .margin({ top: 10, left: 25 })
          .border({ width: 1, radius: 5, color: "grey" })
          .backgroundColor('#FBFCFE')
          .justifyContent(FlexAlign.SpaceBetween)
          .width('85%')
          .onClick((e) => {
            router.pushUrl({
              url: "pages/HotValuePage"
            })
          })
        })
      }
      .margin({ top: 5 })
      .padding({ right: 15, bottom: 20, left: -10, top: 10 })
      // .border({ width: 1, radius: 10 })
      .borderRadius(12)
      .backgroundColor(Color.White)
    }
    // .backgroundColor("#F6F7F9")
    .height("100%")
  }
}