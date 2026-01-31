import SearchResultCard from '../component/SmallScenicCard'
import router from '@ohos.router'
import Location from '../view/search/Location'

// 搜索
@Entry
@Component
export default struct SearchResultPage {
  tabs_controller: TabsController = new TabsController()
  search_controller: TextInputController = new TextInputController()
  @State search_txt: string = ''
  @State current_index: number = 0

  @Builder TabBuilder(title: string, index: number, selectedImg: Resource, normalImg: Resource) {
    Row() {
      Image(this.current_index === index ? selectedImg : normalImg)
        .width(32)
        .height(32)
      Text(title)
        .margin({ top: 4 })
        .fontSize(16)
        .fontColor(
            this.current_index === index ?
          $r('app.color.tab_item_selected') : $r('app.color.mainPage_normal'))
    }
    .margin({ left: 8, right: 8 })
    .justifyContent(FlexAlign.Center)
    .height($r('app.float.mainPage_barHeight'))
    // .width('100%')
    .width(80)
    .onClick(() => {
      this.current_index = index;
      this.tabs_controller.changeIndex(this.current_index);
    })
  }

  onPageShow() {
    // 从买票搜索跳转过来
    this.current_index = router.getParams()['index']
  }

  build() {
    Column() {
      Row({ space: 16 }) {
        // 搜索框
        TextInput({
          placeholder: '搜索景点...',
          controller: this.search_controller,
        })
          .onChange((value) => {
            this.search_txt = value
          })
          .width(280)

        Button('搜索')
          // .margin({ left: 14 })
          .height(32)
          .borderRadius(8)
          .type(ButtonType.Normal) // 方型
          .fontColor(Color.Black)
          .backgroundColor($r('app.color.primary_color'))
          .onClick((e) => {
            router.replaceUrl({
              url: "pages/SearchResultPage",
              params: {
                search_txt: this.search_txt
              }
            })
          })
      }
      // .height(40)
      .width('100%')
      .margin({ top: 20, left: 20, right: 20, bottom: 12 })
      .justifyContent(FlexAlign.Center)

      // 搜索结果
      Tabs({
        // 底部导航
        barPosition: BarPosition.Start,
        controller: this.tabs_controller
      }) {
        TabContent() {
          Location()
        }
        .padding({ left: 6, right: 6 })
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar(this.TabBuilder(
          '景点', 0, $r('app.media.jingdian_selected'), $r('app.media.jingdian_normal')
        ))

        TabContent() {
          Location()
        }
        .padding({ left: 6, right: 6 })
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar(this.TabBuilder(
          '酒店', 1, $r('app.media.jingdian_selected'), $r('app.media.jingdian_normal')
        ))

        TabContent() {
          Location()
        }
        .padding({ left: 6, right: 6 })
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar(this.TabBuilder(
          '旅游', 2, $r('app.media.jingdian_selected'), $r('app.media.jingdian_normal')
        ))

        TabContent() {
          Location()
        }
        .padding({ left: 6, right: 6 })
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar(this.TabBuilder(
          '攻略', 3, $r('app.media.jingdian_selected'), $r('app.media.jingdian_normal')
        ))
      }
      .scrollable(false)
      .barMode(BarMode.Scrollable)
      .barWidth('100%')
      .barHeight(56)
    }
    .width('100%')
    .height('100%')
  }
}