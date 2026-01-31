import CommonConstants from '../../common/constants/CommonConstants';
import PostCard from '../../component/PostItem';
import CommunityViewModel from '../../viewmodel/CommunityViewModel';
import PostEntity from '../../viewmodel/entity/PostEntity';

@Component
export default struct Find {
  // 滚动列的控制器
  main_scroller: Scroller = new Scroller()
  // 视频相关
  private controller: VideoController = new VideoController();
  private previewUris: Resource = $r('app.media.cover');
  private innerResource: Resource = $rawfile('ly.mp4');
  // 搜索框控制器
  private search_controller: TextInputController = new TextInputController()

  build() {
    Scroll(this.main_scroller) {
      Column({ space: 24 }) {
        // 搜索框
        Row({ space: 16 }) {
          // 搜索框
          TextInput({
            placeholder: '搜索攻略...',
            controller: this.search_controller
          })
            .width(240)

          Button('搜索')
            .borderRadius(8)
            .type(ButtonType.Normal) // 方型
              // .margin({ left: 14 })
            .height(32)
            .fontColor(Color.Black)
            .backgroundColor($r('app.color.primary_color'))
        }
        .width(CommonConstants.FULL_PARENT)
        // .margin({ top: 12, bottom: 12 })
        .justifyContent(FlexAlign.Center)

        // 今日推荐 视频
        Column({ space: 12 }) {
          Column() {
            Text('今日推荐')
              .fontSize(20)
              .fontWeight(600)
            Text('圆梦西湖畔, 杭州4天3晚路线美食详细攻略')
              .fontSize(14)
              .fontColor($r('app.color.primary_color_txt'))
          }
          .width('100%')
          .alignItems(HorizontalAlign.Start)

          Video({
            src: this.innerResource,
            previewUri: this.previewUris,
            controller: this.controller
          })
            .onFinish(() => {
              // 重新播放
              this.controller.start()
            })
            .autoPlay(true)
            .muted(true)
            .borderRadius(12)
            .controls(false)
        }
        .borderRadius(12)
        .width('100%')
        .height('36%')
        .clip(true)

        // 热力图
        Image($r('app.media.rlt'))
          .width('100%')
          .height('45%')
          .borderRadius(12)
          .objectFit(ImageFit.Cover)

        // 用户帖子
        Column({ space: 12 }) {
          ForEach(CommunityViewModel.getPostEntities(), (item: PostEntity) => {
            PostCard({
              avator: item.user.avator,
              uname: item.user.name,
              title: item.title,
              pub_date: item.pub_date,
              desc: item.desc,
              img: item.imgs[0]
            })
              .width('100%')
          }, (item: PostEntity) => JSON.stringify(item))
        }
      }
    }
    .height('100%')
    .align(Alignment.Top)
    .height(CommonConstants.FULL_PARENT)
  }
}