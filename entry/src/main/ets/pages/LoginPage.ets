
import prompt from '@ohos.promptAction';
import router from '@ohos.router';
import CommonConstants from '../common/constants/CommonConstants';
import featureAbility from '@ohos.ability.featureAbility';

// 定义特定样式, 作为TextInput的扩展(装饰)
// 自定义TextInput
@Extend(TextInput) function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.big_text_size'))
  // .backgroundColor($r('app.color.background'))
  // .width(CommonConstants.FULL_PARENT)
  .width(300)
  // 文字的padding
  // .padding({ left: CommonConstants.INPUT_PADDING_LEFT })
  .padding({ left: 8 })
  .margin({ top: $r('app.float.input_margin_top'), bottom: 8 })
}

@Extend(Line) function lineStyle() {
  // .width(CommonConstants.FULL_PARENT)
  .width(300)
  .height($r('app.float.line_height'))
  .backgroundColor($r('app.color.line_color'))
}

@Extend(Text) function blueTextStyle() {
  .fontColor($r('app.color.login_blue_text_color'))
  .fontSize($r('app.float.small_text_size'))
  .fontWeight(FontWeight.Medium)
}

/**
 * Login page
 */
@Entry // page入口点?
@Component
struct LoginPage {
  @State account: string = '';
  @State password: string = '';
  @State isShowProgress: boolean = false;
  private timeOutId: number = -1;

  // 禁用转场
  // pageTransition() {
  //   PageTransitionEnter({ type: RouteType.None, duration: 0 })
  //   PageTransitionExit({ type: RouteType.None, duration: 0 })
  // }

  @Builder
  imageButton(src: Resource) {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image(src)
    }
    .height($r('app.float.other_login_image_size'))
    .width($r('app.float.other_login_image_size'))
    .backgroundColor($r('app.color.background'))
  }

  login(): void {
    if (this.account === '' || this.password === '') {
      prompt.showToast({
        message: $r('app.string.input_empty_tips')
      })
    } else {
      this.isShowProgress = true;
      if (this.timeOutId === -1) {
        // 设置定时
        this.timeOutId = setTimeout(() => {
          this.isShowProgress = false;
          this.timeOutId = -1;
          // 用replace而不是push, 防止用户按返回键返回
          router.replaceUrl({ url: 'pages/MainPage' });
        }, CommonConstants.LOGIN_DELAY_TIME);
      }
    }
  }

  // 退出页面时清除定时器
  aboutToDisappear() {
    clearTimeout(this.timeOutId);
    this.timeOutId = -1;
  }

  build() {
    Column() {
      // Image($r('app.media.logo'))
      Image($r('app.media.yh'))
        .width($r('app.float.logo_image_size'))
        .height($r('app.float.logo_image_size'))
        .margin({
          // top: $r('app.float.logo_margin_top'),
          top: 200,
          bottom: 24
        })
      Text($r('app.string.login_page'))
        .fontSize($r('app.float.page_title_text_size'))
        .fontWeight(FontWeight.Medium)
        .fontColor($r('app.color.title_text_color'))
      Text($r('app.string.login_more'))
        .fontSize($r('app.float.normal_text_size'))
          // .fontColor($r('app.color.login_more_text_color'))
        .fontColor($r('app.color.login_more_text_color_me'))
        .margin({ bottom: $r('app.float.login_more_margin_bottom'), top: $r('app.float.login_more_margin_top') })

      TextInput({ placeholder: $r('app.string.account') })
        .maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH)
        .type(InputType.Number)
        .inputStyle()
        .onChange((value: string) => {
          this.account = value;
        })
      // Line().lineStyle()

      TextInput({ placeholder: $r('app.string.password') })
        .maxLength(CommonConstants.INPUT_PASSWORD_LENGTH)
        .type(InputType.Password)
        .inputStyle()
        .onChange((value: string) => {
          this.password = value;
        })
      // Line().lineStyle()

      // Row() {
      //   Text($r('app.string.message_login')).blueTextStyle()
      //   Text($r('app.string.forgot_password')).blueTextStyle()
      // }
      // .justifyContent(FlexAlign.SpaceBetween)
      // .width(CommonConstants.FULL_PARENT)
      // .margin({
      //   top: $r('app.float.forgot_margin_top'),
      //   bottom: 120
      // })

      // 空白
      // Blank()
      //   .margin(80)

      Button($r('app.string.login'), { type: ButtonType.Capsule })
        // .width(CommonConstants.BUTTON_WIDTH)
        .width(300)
        .height($r('app.float.login_button_height'))
        .fontSize($r('app.float.normal_text_size'))
        .fontColor(Color.Black)
        .fontWeight(FontWeight.Medium)
          // .backgroundColor($r('app.color.login_button_color'))
        .backgroundColor($r('app.color.primary_color'))
        .margin({ top: $r('app.float.login_button_margin_top'), bottom: $r('app.float.login_button_margin_bottom') })
        .onClick(() => {
          this.login();
        })
      // txt 注册账号
      Text($r('app.string.register_account'))
        .fontColor($r('app.color.login_blue_text_color'))
        // .fontColor($r('app.color.primary_color'))
        .fontSize($r('app.float.normal_text_size'))
        .fontWeight(FontWeight.Medium)

      if (this.isShowProgress) {
        // 表示加载的小球 -> 我觉得没啥用
        LoadingProgress()
          .color($r('app.color.loading_color'))
          .width($r('app.float.login_progress_size'))
          .height($r('app.float.login_progress_size'))
          .margin({ top: $r('app.float.login_progress_margin_top') })
      }

      // Text($r('app.string.other_login_method'))
      //   .fontColor($r('app.color.other_login_text_color'))
      //   .fontSize($r('app.float.little_text_size'))
      //   .fontWeight(FontWeight.Medium)
      //   .margin({ top: $r('app.float.other_login_margin_top'), bottom: $r('app.float.other_login_margin_bottom') })
      // Row({ space: CommonConstants.LOGIN_METHODS_SPACE }) {
      //   this.imageButton($r('app.media.login_method1'))
      //   this.imageButton($r('app.media.login_method2'))
      //   this.imageButton($r('app.media.login_method3'))
      // }
    }
    // .backgroundColor($r('app.color.background'))
    .backgroundImage($r('app.media.background'), ImageRepeat.NoRepeat)
    .backgroundImageSize({
      width: CommonConstants.FULL_PARENT,
      height: CommonConstants.FULL_PARENT,
    })
    .height(CommonConstants.FULL_PARENT)
    .width(CommonConstants.FULL_PARENT)
    .padding({
      left: $r('app.float.page_padding_hor'),
      right: $r('app.float.page_padding_hor'),
      bottom: $r('app.float.login_page_padding_bottom')
    })
  }
}