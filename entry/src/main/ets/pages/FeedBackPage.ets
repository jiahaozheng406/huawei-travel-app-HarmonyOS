import router from '@ohos.router'

@Entry // page
@Component
@Preview
struct ArticleDetailPage {
  @State text: string = ''
  controller: TextAreaController = new TextAreaController()

  build() {
    Column() {
      TextArea({
        placeholder: '反馈意见',
        controller: this.controller
      })
        .placeholderFont({ size: 16, weight: 400 })
        .width(336)
        .height(56)
        .margin(20)
        .fontSize(16)
        .fontColor('#182431')
        .backgroundColor('#FFFFFF')
        .onChange((value: string) => {
          this.text = value
        })
      Button('发送反馈')
        .backgroundColor('#007DFF')
        .margin(15)
        .onClick(() => {
          // todo
          router.replaceUrl({ url: 'pages/ScenicPage' })
        })
    }.width('100%').height('100%').backgroundColor('#F1F3F5')
  }
}