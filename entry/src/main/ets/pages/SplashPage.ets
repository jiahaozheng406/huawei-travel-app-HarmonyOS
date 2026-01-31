import CommonConstants from '../common/constants/CommonConstants'
import router from '@ohos.router'

// 闪屏页
@Entry
@Component
export default struct SlashPage {
  // 展示页面1秒后跳转
  onPageShow() {
    setTimeout(() => {
      // 用replace而不是push, 防止用户按返回键返回
      router.replaceUrl({
        url: 'pages/LoginPage'
      })
    }, 1000)
  }

  // page A
  // pageTransition() {
  //   // 定义页面进入时的效果，从左侧滑入，时长为1200ms，无论页面栈发生push还是pop操作均可生效
  //   PageTransitionEnter({ type: RouteType.None, duration: 500 })
  //     .slide(SlideEffect.Left)
  //   // 定义页面退出时的效果，向左侧滑出，时长为1000ms，无论页面栈发生push还是pop操作均可生效
  //   PageTransitionExit({ type: RouteType.None, duration: 500 })
  //     .slide(SlideEffect.Left)
  // }
  // 禁用转场
  // pageTransition() {
  //   PageTransitionEnter({ type: RouteType.None, duration: 0 })
  //   PageTransitionExit({ type: RouteType.None, duration: 0 })
  // }

  build() {
    Column() {
      // logo
      Image($r('app.media.yh'))
        .width($r('app.float.logo_image_size'))
        .height($r('app.float.logo_image_size'))
        .margin({
          top: $r('app.float.logo_margin_top'),
          // bottom: $r('app.float.logo_margin_bottom')
          bottom: 16
        })
      // 提示文字
      Text('Travel')
        .textAlign(TextAlign.Center)
        .width(CommonConstants.FULL_PARENT)
        .height(40)
        .fontWeight(600)
        .fontSize(40)
    }
    // 宽高都盛满
    .height(CommonConstants.FULL_PARENT)
    .width(CommonConstants.FULL_PARENT)
    .backgroundColor($r('app.color.primary_color'))
  }
}