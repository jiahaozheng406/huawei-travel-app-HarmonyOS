import SearchResultCard from '../../component/SearchResultCard'
import router from '@ohos.router'

@Component
export default struct Location {
  build() {
    Scroll() {
      Column({ space: 8 }) {
        ForEach([1, 2, 3, 4, 5, 6, 7, 8, 89, 9, 90, 0, 0, 0, 8, 5, 67, 3], (item) => {
          SearchResultCard()
            .onClick((e) => {
              router.pushUrl({
                url: "pages/ScenicDetailPage",
              })
            })
        })
      }
      .alignItems(HorizontalAlign.Start)
      .justifyContent(FlexAlign.Start)
    }
    .scrollable(ScrollDirection.Vertical)
    .width('100%')
    .height('100%')
    .align(Alignment.Top)
    // .backgroundColor(Color.Yellow)
    .padding({ left: 16, right: 16 })
  }
}