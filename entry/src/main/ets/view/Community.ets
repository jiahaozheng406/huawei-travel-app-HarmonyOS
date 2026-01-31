import CommonConstants from '../common/constants/CommonConstants';
import mainViewModel from '../viewmodel/MainViewModel';
import ItemData from '../viewmodel/entity/ItemData';
import Find from './community/find';
import Concern from './community/Concerned';

@Component
export default struct Community {
  // tab的控制器
  tab_controller: TabsController = new TabsController()
  // 当前选中tab的索引
  @State currentIndex: number = 0;

  // 构建tab项
  @Builder TabBuilder(title: string, index: number) {
    Column() {
      Text(title)
        // .fontSize($r('app.float.main_tab_fontSize_me'))
        .fontSize(16)
        .fontColor(this.currentIndex === index ?
        $r('app.color.mainPage_selected') : $r('app.color.mainPage_normal'))
    }
    .justifyContent(FlexAlign.Center)
    .height(56)
    .width(CommonConstants.FULL_PARENT)
    .onClick(() => {
      this.currentIndex = index;
      this.tab_controller.changeIndex(this.currentIndex);
    })
  }

  build() {
    Tabs({ barPosition: BarPosition.Start, controller: this.tab_controller }) {
      TabContent() {
        Find()
      }
      .padding({ top: 12 })
      // .tabBar('发现')
      .tabBar(this.TabBuilder("发现", 0))

      TabContent() {
        Concern()
      }
      .padding({ top: 12 })
      .tabBar(this.TabBuilder('关注', 1))
    }
    .vertical(false) // 横向
    // 滚动切换
    .scrollable(false)
    .barMode(BarMode.Fixed)
    .barWidth(120)
    .barHeight(40)
    .animationDuration(400)
    // .onChange((index: number) => {
    //   console.info(index.toString())
    // })
    .width('100%')
    // .backgroundColor(0xF5F5F5)
  }
}