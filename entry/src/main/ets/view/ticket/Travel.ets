import BuyCard from './BuyCard'
import hilog from '@ohos.hilog'
import router from '@ohos.router'
import systemDateTime from '@ohos.systemDateTime'

@Component
export default struct Travel {
  @State start: string = "2010-1-1"
  @State end: string = "2010-1-2"
  index: number = 3

  build() {
    Column() {
      BuyCard({ start: $start, end: $end, custom_click: () => {
        // hilog.info(0x0000, 'testTag', '%{public}s', this.start)
        hilog.info(0x0000, 'testTag', '%{public}s', this.end)
        // router.pushUrl({
        //   url: "pages/SearchResultPage",
        //   params: {
        //     index: this.index
        //   }
        // })
      } })
      // 推荐等
    }
    .alignItems(HorizontalAlign.Center)
    .width('100%')
    .height('100%')
  }
}