// 景区详情
import TicketCard from '../component/TicketCard';
import Home from '../view/Home';

@Entry
@Component
export default struct ScenicDetailPage {
  // 视频相关
  private controller: VideoController = new VideoController();
  private previewUris: Resource = $r('app.media.gly');
  private innerResource: Resource = $rawfile('hai.mp4');

  build() {
    Column({ space: 12 }) {
      // 轮播, 第一个是视频 后面是图
      Swiper() {
        Video({
          src: this.innerResource,
          previewUri: this.previewUris,
          controller: this.controller
        })
          .onFinish(() => {
            // 重新播放
            // this.controller.start()
          })
          .autoPlay(false)
          .muted(true)
          .borderRadius(12)
          .controls(true)
        Image($r('app.media.gly_1'))
          .objectFit(ImageFit.Cover)
          .width('100%')
        Image($r('app.media.gly_2'))
          .objectFit(ImageFit.Cover)
          .width('100%')
        Image($r('app.media.gly_3'))
          .objectFit(ImageFit.Cover)
          .width('100%')
      }
      .onChange((e) => {
        // 切换轮播时停止播放
        this.controller.pause()
      })
      .width('100%')
      .height('30%')

      // 信息卡片
      Column({ space: 8 }) {
        // 名称 评分
        Row() {
          Text('鼓浪屿')
            .fontSize(24)
          Text('4.9分')
            .fontColor(Color.Orange)
            .fontWeight(FontWeight.Regular)
        }
        .width('100%')
        .padding({ left: 5, right: 5 })
        .justifyContent(FlexAlign.SpaceBetween)

        // 标签
        Row({ space: 6 }) {
          Text('海滨')
            .padding({ left: 8, right: 8, bottom: 5, top: 5 })
            .fontSize(12)
            .borderRadius(18)
            .fontColor(Color.White)
            .backgroundColor(Color.Blue)
          Text('热门')
            .fontSize(12)
            .padding({ left: 8, right: 8, bottom: 5, top: 5 })
            .borderRadius(18)
            .fontColor(Color.White)
            .backgroundColor(Color.Red)
        }
        .width('100%')
        .padding({ left: 5, right: 5 })
        .justifyContent(FlexAlign.Start)

        // 位置
        Row() {
          Text('厦门市思明区鼓浪屿')
            .fontSize(14)
        }
        .width('100%')
        .padding({ left: 5, right: 5 })
        .justifyContent(FlexAlign.Start)
      }
      .borderRadius(12)
      .width('95%')
      .height('12%')
      .backgroundColor(Color.White)
      .padding(8)
      .alignItems(HorizontalAlign.Center)

      // tab 订票 评论 攻略
      Tabs() {
        TabContent() {
          Scroll() {
            Column({ space: 8 }) {
              TicketCard()
              TicketCard()
              TicketCard()
              TicketCard()
              TicketCard()
            }
          }
          .padding({ top: 12, bottom: 12 })
          .width('100%')
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        .padding({ left: 8, right: 8 })
        .tabBar('订票')

        TabContent() {
          Text('111')
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        .padding({ left: 8, right: 8 })
        .tabBar('评论')

        TabContent() {
          Text('111')
        }
        .backgroundColor($r('app.color.primary_color_bg'))
        .padding({ left: 8, right: 8 })
        .tabBar('攻略')
      }
      .padding({ left: 8, right: 8 })
      .width('100%')
      .height('58%')
      .vertical(false)
      .backgroundColor(Color.White)
      .borderRadius(12)
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.primary_color_bg'))
  }
}