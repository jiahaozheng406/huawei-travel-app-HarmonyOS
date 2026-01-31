import CommonConstants from '../common/constants/CommonConstants';
import Home from "../view/Home"
import Setting from "../view/Setting"
import SPOT from "../view/Community"
import CommunityPage from '../view/Community';
import router from '@ohos.router';
import Scenic from './ScenicPage';

/**
 * 首页
 */
@Entry
@Component
struct MainPage {
  @State currentIndex: number = CommonConstants.HOME_TAB_INDEX;
  private tabsController: TabsController = new TabsController();

  @Builder TabBuilder(title: string, index: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === index ? selectedImg : normalImg)
        .width($r('app.float.mainPage_baseTab_size'))
        .height($r('app.float.mainPage_baseTab_size'))
      Text(title)
        .margin({ top: $r('app.float.mainPage_baseTab_top') })
        .fontSize($r('app.float.main_tab_fontSize_me'))
        .fontColor(this.currentIndex === index ? $r('app.color.mainPage_selected') : $r('app.color.mainPage_normal'))
    }
    .justifyContent(FlexAlign.Center)
    .height($r('app.float.mainPage_barHeight'))
    .width(CommonConstants.FULL_PARENT)
    .onClick(() => {
      this.currentIndex = index;
      this.tabsController.changeIndex(this.currentIndex);
    })
  }

  build() {
    Tabs({
      // 底部导航
      barPosition: BarPosition.End,
      controller: this.tabsController
    }) {
      // 导航内容
      TabContent() {
        Home()
      }
      .padding({ left: $r('app.float.mainPage_padding'), right: $r('app.float.mainPage_padding') })
      // .backgroundColor($r('app.color.mainPage_backgroundColor'))
      .backgroundColor($r('app.color.primary_color_bg'))
      // 底部导航的元素
      .tabBar(this.TabBuilder(
        CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX,
        $r('app.media.home_selected'), $r('app.media.home_normal')))

      TabContent() {
        Scenic()
      }
      .padding({ left: $r('app.float.mainPage_padding'), right: $r('app.float.mainPage_padding') })
      // .backgroundColor($r('app.color.mainPage_backgroundColor'))
      .backgroundColor($r('app.color.primary_color_bg'))
      .tabBar(this.TabBuilder('规划', 1, $r('app.media.logo_1'), $r('app.media.logo_2')))

      TabContent() {
        CommunityPage()
      }
      .padding({ left: $r('app.float.mainPage_padding'), right: $r('app.float.mainPage_padding') })
      .backgroundColor($r('app.color.primary_color_bg'))
      // .backgroundColor($r('app.color.mainPage_backgroundColor'))
      .tabBar(this.TabBuilder('社区', 2, $r('app.media.shequ_2'), $r('app.media.shequ_1')))

      TabContent() {
        Setting()
      }
      .padding({ left: $r('app.float.mainPage_padding'), right: $r('app.float.mainPage_padding') })
      // .backgroundColor($r('app.color.mainPage_backgroundColor'))
      .backgroundColor($r('app.color.primary_color_bg'))
      .tabBar(this.TabBuilder('我的', 3, $r('app.media.mine_selected'), $r('app.media.mine_normal')))
    }
    .scrollable(false)
    .width(CommonConstants.FULL_PARENT)
    // .backgroundColor(Color.White)
    .backgroundColor($r('app.color.primary_color_bg'))
    // 底部导航height
    .barHeight($r('app.float.mainPage_barHeight'))
    .barMode(BarMode.Fixed)
    .onChange((index: number) => {
      this.currentIndex = index;
    })
  }
}