import router from '@ohos.router'
import Hotel from '../view/ticket/Hotel'
import Plane from '../view/ticket/Plane'
import Train from '../view/ticket/Train'
import Travel from '../view/ticket/Travel'
import TicketViewModel from '../viewmodel/TicketViewModel'
import systemDateTime from '@ohos.systemDateTime'

// 预订页面
// 酒店|机票|火车票|旅游团
@Entry
@Component
export default struct TicketPage {
  // 当前tab索引
  @State current_index: number = 0
  tabs_controller: TabsController = new TabsController()
  swiper_controller: SwiperController = new SwiperController()

  onPageShow() {
    // const params = router.getParams(); // 获取传递过来的参数对象
    this.current_index = router.getParams()['index']
    this.tabs_controller.changeIndex(this.current_index)
  }

  build() {
    Column() {
      Row() {
        // 轮播
        Swiper(this.swiper_controller) {
          ForEach(TicketViewModel.getSwiper(), (img: Resource) => {
            Image(img)
              .height(160)
              .width('100%')
                // 保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。
              .objectFit(ImageFit.Cover)
          }, (img: Resource) => JSON.stringify(img.id))
        }
        .autoPlay(true)
      }

      Tabs({
        // 底部导航
        barPosition: BarPosition.Start,
        controller: this.tabs_controller
      }) {
        // 导航内容
        TabContent() {
          Hotel()
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        // 底部导航的元素
        // .tabBar(this.TabBuilder(
        //   CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX,
        //   $r('app.media.home_selected'), $r('app.media.home_normal')))
        .tabBar('酒店')

        TabContent() {
          Plane()
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar('飞机票')

        TabContent() {
          Train()
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar('火车票')

        TabContent() {
          Travel()
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        .tabBar('旅游')
      }
      .vertical(false)
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.primary_color'))
  }
}