// 热力图
import router from '@ohos.router'

@Entry
@Component
export default struct HotValuePage {
  @State widthSize: number = 10
  @State heightSize: number = 30
  // @State rotateAngle: number = 0
  // private flag: boolean = false
  @State value: number = 0 // 热力值
  @State like: boolean = false
  @State unlike: boolean = false

  onPageShow() {
    setTimeout(() => {
      this.value += 20
    }, 800)
    setTimeout(() => {
      this.value += 20
    }, 900)
    setTimeout(() => {
      this.value += 20
    }, 1000)
    setTimeout(() => {
      this.value += 20
    }, 1100)
  }

  build() {
    Scroll() {
      Column({ space: 18 }) {
        Image($r('app.media.Gl'))
          .width("100%")
          .height("40%")
        // .margin({ bottom: 24 })
        // 父容器设置direction为Direction.Ltr，子元素从左到右排列

        // 进度条
        Text('当前热力值').fontSize(12).fontColor(0xCCCCCC).width('90%')
        Progress({
          // value 应该是初始值的意思
          value: 0, total: 100, type: ProgressType.Linear })
          .animation({
            // delay: 800,
            duration: 2000,
            curve: Curve.EaseInOut
          })
            // 进度条进度 这里才能动态改变
          .value(this.value)
            // .onClick((e) => this.value = 0)
          .width('90%')
          .height(24)
          .color(Color.Orange)

        // 信息
        Row() {
          Column({ space: 5 }) {
            Row({ space: 8 }) {
              Text('厦门园林博览苑')
                .fontWeight(FontWeight.Medium)
                .fontSize(24)
              Text('4A')
                .backgroundColor(Color.Grey)
                .fontColor(Color.White)
                .padding(5)
                .borderRadius(6)
                .fontSize(14)
              Text('官方售票')
                .backgroundColor(Color.Orange)
                .borderRadius(6)
                .height(26)
                .padding(5)
                .fontSize(14)
            }
            // .justifyContent(FlexAlign.Start)
            .alignItems(VerticalAlign.Center)

            Row({ space: 5 }) {
              Text('4.9分')
                .fontColor(Color.Blue)
                .fontSize(18)
              Text('1.3万人想去')
                .backgroundColor(Color.Orange)
                .fontColor(Color.White)
                .padding(5)
                .borderRadius(6)
                .fontSize(14)
            }
            // .justifyContent(FlexAlign.Start)
            .alignItems(VerticalAlign.Center)
          }
          .alignItems(HorizontalAlign.Start)

          Row({ space: 5 }) {
            Image(this.like ? $r('app.media.like_y') : $r('app.media.like_g'))
              .width(36)
              .height(36)
              .onClick((e) => {
                this.like = !this.like
                // 再次点击like，切换为unlike
                if (!this.unlike && !this.like) {
                  this.unlike = true
                }
                // unlike点亮，再点击like，则切换为like
                if (this.unlike && this.like) {
                  this.unlike = false
                }
              })
            Image(this.unlike ? $r('app.media.unlike_y') : $r('app.media.unlike_g'))
              .width(36)
              .height(36)
              .onClick((e) => {
                this.unlike = !this.unlike
                // 再次点击unlike，切换到like
                if (!this.unlike && !this.like) {
                  this.like = true
                }
                // like点亮，再点击unlike，则切换为unlike
                if (this.unlike && this.like) {
                  this.like = false
                }
                if (this.unlike) {
                  AlertDialog.show(
                    {
                      title: '反馈',
                      message: '是否填写反馈信息',
                      autoCancel: true,
                      alignment: DialogAlignment.Bottom,
                      gridCount: 4,
                      offset: { dx: 0, dy: -20 },
                      primaryButton: {
                        value: '以后再说',
                        action: () => {
                          console.info('Callback when the first button is clicked')
                        }
                      },
                      secondaryButton: {
                        value: '填写反馈',
                        action: () => {
                          router.pushUrl({ url: 'pages/FeedBackPage' })
                          console.info('Callback when the second button is clicked')
                        }
                      },
                      cancel: () => {
                        console.info('Closed callbacks')
                      }
                    }
                  )
                }
              })
          }
        }
        .justifyContent(FlexAlign.SpaceBetween)
        .width('100%')
        .padding({ left: 16, right: 16, bottom: 12 })

        Row() {
          Text("目前人数较少景区")
            .width('100%')
            .fontColor(Color.White)
            .fontWeight(FontWeight.Medium)
            .fontSize(24)
        }
        .width('50%')
        .borderRadius(6)
        .backgroundColor(Color.Orange)
        .alignSelf(ItemAlign.Start)
        .padding(5)
        .margin({ left: 16 })

        Row({ space: 5 }) {
          Column() {
            Text('芙蓉隧道')
              .height(32)
              .fontWeight(FontWeight.Medium)
              .fontSize(24)
            Image($r('app.media.Fr')).height(200).width('100%')
              .padding(5)
              .borderRadius(4)
            Text('位于厦大内部，芙蓉餐厅旁，是中国最文艺、最长的涂鸦隧道，也是厦门大学主要景点之一。该隧道于2005年开始施工，西起厦大校区芙蓉园学生食堂，沿途穿越狮山，东至厦大学生公寓门口，全长1.01公里，主要供行人及非机动车辆通行。建成之后，隧道内逐渐多了很多涂鸦，这些漂亮的涂鸦是厦大学子一笔一笔描绘而成。')
              .width('100%')
              .padding(4)
          }
        }
        .margin(12)

        Row() {
          Column() {
            Text('情人谷')
              .height(32)
              .fontWeight(FontWeight.Medium)
              .fontSize(24)
            Image($r('app.media.Qr')).height(200).width('100%')
              .borderRadius(4)
            Text('厦大情人谷原来不叫情人谷。它是厦大北面五老峰地势造就的一个山谷。山谷里有个人工水库。在厦门还未引进九龙江水之前，全厦大的用水几乎都靠这个水库供应。水库有五老峰的秀峰灵石为屏，奇花异草为锦，山光水色就美得恍若仙境。')
              .width('100%')
              .padding(4)
          }
        }
        .margin(12)

        Row() {
          Column() {
            Text('颂恩楼群')
              .height(32)
              .fontWeight(FontWeight.Medium)
              .fontSize(24)
            Image($r('app.media.Sh')).height(200).width('100%')
              .borderRadius(4)
            Text('厦门大学颂恩楼群是目前厦大的最气派的建筑群，其主楼是印尼校友死后由其妻子捐建，也没有冠名，由于是天主教友，所以取其颂主恩德之义。')
              .width('100%')
              .padding(4)
          }
        }
        .margin(12)

        Button("返回")
          .onClick((e) => {
            router.replaceUrl({ url: 'pages/ScenicPage' })
          })
      }
      .width('100%')
    }
    .width('100%')
    .scrollable(ScrollDirection.Vertical)
    .height('100%')
  }
}