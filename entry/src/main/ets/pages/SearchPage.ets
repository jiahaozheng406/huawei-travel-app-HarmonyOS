import router from '@ohos.router'
import SearchViewModel from '../viewmodel/SearchViewModel'
import TabItem from '../viewmodel/entity/SearchTabItemData'
import SmallScenicCard from '../component/SmallScenicCard'

@Entry
@Component
export default struct SearchPage {
  @State search_txt: string = ''
  search_controller: SearchController = new SearchController()
  @State list_data: string[] = []

  onPageShow() {
    this.list_data = SearchViewModel.getRecommondItemData()
  }

  build() {
    Column() {
      // 搜索
      Row({ space: 16 }) {
        // 搜索框
        TextInput({
          placeholder: '搜索景点...',
          controller: this.search_controller
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
            router.pushUrl({
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

      // 小标签, 点击跳转 搜索: 酒店|机票|火车票|跟团
      Row() {
        ForEach(SearchViewModel.getTabItemDate(), (item: TabItem, index: number) => {
          Row() {
            Image(item.icon)
              .width(30)
              .height(30)
            Text(item.name)
              .margin({ left: 4 })
          }
          .onClick((e) => {
            router.replaceUrl({
              url: 'pages/TicketPage',
              params: {
                index
              }
            })
          })
          .margin(6)
          .height(36)
          .width(80)
        }, (item: TabItem) => JSON.stringify(item))
      }

      // 热门推荐 文字
      Row() {
        Text('热门推荐')
          .fontWeight(FontWeight.Medium)
          .fontSize(20)
        Row() {
          Text('换一换')
            .fontSize(15)
          Image($r('app.media.shuaxin'))
            .width(16)
            .height(16)
            .onClick((e) => {
              this.list_data = SearchViewModel.getRecommondItemData()
            })
        }
      }
      .width('100%')
      .height(28)
      .margin(12)
      .padding({ left: 24, right: 24 })
      .justifyContent(FlexAlign.SpaceBetween)

      // 热门推荐 小标签 16个中随机展示8个
      List({ space: 20, initialIndex: 0 }) {
        ForEach(this.list_data, (item) => {
          ListItem() {
            Text(item)
              // .width('25%')
              .height(32)
              .padding(5)
              .fontSize(16)
              .textAlign(TextAlign.Center)
              .borderRadius(12)
              .backgroundColor($r('app.color.primary_color_bg'))
          }
        }, (item) => item)
      }
      .listDirection(Axis.Horizontal)
      .lanes(2) // 两列
      .padding({ left: 24, right: 24 })
      .width('100%')
      .height(74)

      // 推荐景区 文字
      Row() {
        Text('景区推荐')
          .fontWeight(FontWeight.Medium)
          .fontSize(20)
      }
      .width('100%')
      .height(28)
      .margin({ left: 12, right: 12, top: 12 })
      .padding({ left: 24, right: 24 })
      .justifyContent(FlexAlign.SpaceBetween)

      // 推荐景区卡片
      ForEach([0, 1, 2], (item) => {
        SmallScenicCard()
          .margin({ left: 22, right: 22 })
          .onClick((e) => {
            router.pushUrl({
              url: 'pages/ScenicDetailPage'
            })
          })
      }, item => item)

      // 热搜
      Row() {
        Text('热搜')
          .fontWeight(FontWeight.Medium)
          .fontSize(20)
      }
      .width('100%')
      .height(28)
      .margin({ left: 12, right: 12, top: 12 })
      .padding({ left: 24, right: 24 })
      .justifyContent(FlexAlign.SpaceBetween)

      // todo: 无法滚动
      // Scroll() {
      Row() {
        Column() {
          ForEach(['江苏', '湖北', '福建', '江西', '湖南'], (item) => {
            Text(item)
              .padding(8)
              .fontSize(24)
              .height(36)
          }, item => item)
        }
        // .height('100%')
        .margin({ left: 12, right: 12, top: 12 })
        .borderRadius(12)
        .border({ width: 1, radius: 5, color: Color.Orange })
        .width('80%')
        .alignItems(HorizontalAlign.Start)
        .padding({ left: 12 })
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
      // }
    }
    .width('100%')
    .height('100%')
  }
}