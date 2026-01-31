/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import CommonConstants from '../common/constants/CommonConstants';
import mainViewModel from '../viewmodel/MainViewModel';
import ItemData from '../viewmodel/entity/ItemData';
import { WaterFlowDataSource } from '../common/constants/WaterFlowDataSource';
import router from '@ohos.router';

/**
 * Home tab content
 */
@Component
export default struct Home {
  private swiperController: SwiperController = new SwiperController();
  // 搜索框的控制器
  private searchController: TextInputController = new TextInputController();
  // 滚动列的控制器
  main_scroller: Scroller = new Scroller()
  // 搜索框文字
  @State search_txt: string = ''

  // 瀑布流相关
  @State minSize: number = 240
  @State maxSize: number = 300
  @State fontSize: number = 24
  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F]
  scroller: Scroller = new Scroller()
  datasource: WaterFlowDataSource = new WaterFlowDataSource()
  private itemWidthArray: number[] = []
  private itemHeightArray: number[] = []

  // 计算flow item宽/高
  getSize() {
    let ret = Math.floor(Math.random() * this.maxSize)
    return (ret > this.minSize ? ret : this.minSize)
  }

  // 保存flow item宽/高
  getItemSizeArray() {
    for (let i = 0; i < 100; i++) {
      this.itemWidthArray.push(this.getSize())
      this.itemHeightArray.push(this.getSize())
    }
  }

  aboutToAppear() {
    this.getItemSizeArray()
  }

  build() {
    Scroll(this.main_scroller) {
      // Column({ space: CommonConstants.COMMON_SPACE }) {
      Column({ space: 24 }) {
        Row({ space: 16 }) {
          // 搜索框
          TextInput({
            placeholder: '搜索景点...',
            controller: this.searchController
          })
            .onChange((value) => {
              this.search_txt = value
            })
            .width(280)
            .onClick((e) => {
              router.pushUrl({
                url: "pages/SearchPage",
              })
            })

          Button('搜索')
            // .margin({ left: 14 })
            .height(32)
            .borderRadius(8)
            .type(ButtonType.Normal) // 方型
            .fontColor(Color.Black)
            .backgroundColor($r('app.color.primary_color'))
            .onClick((e) => {
              router.pushUrl({
                url: "pages/SearchPage",
                params: {
                  search_txt: this.search_txt
                }
              })
            })
        }
        // .height(40)
        .width(CommonConstants.FULL_PARENT)
        .margin({ left: 20, right: 20 })
        // .backgroundColor($r('app.color.primary_color'))
        // .alignItems(VerticalAlign.Top)
        .justifyContent(FlexAlign.Center)
        // .borderRadius({ bottomLeft: 12, bottomRight: 12 })

        // 酒店|机票|火车票|旅游
        Grid() {
          ForEach(mainViewModel.getFirstGridData(), (item: ItemData, index: number) => {
            GridItem() {
              Column() {
                Image(item.img)
                  // .width($r('app.float.home_homeCell_size'))
                  // .height($r('app.float.home_homeCell_size'))
                  .width(36)
                  .height(36)
                Text(item.title)
                  // .fontSize($r('app.float.little_text_size'))
                  .fontSize(16)
                  .margin({ top: $r('app.float.home_homeCell_margin') })
              }
              .onClick((e) => {
                router.pushUrl({
                  url: 'pages/TicketPage',
                  params: {
                    index
                  }
                })
              })
            }
          },
            // key
            (item: ItemData) => JSON.stringify(item))
        }
        .backdropBlur(6) // 背景模糊
        // 阴影
        .shadow({
          radius: 2,
          // color: Color.Grey,
          color: $r('app.color.bg_shadow_color'),
          // y偏移 -> 下
          offsetY: 3
        })
        // 列数
        .columnsTemplate('1fr 1fr 1fr 1fr')
        // .rowsTemplate('1fr 1fr')
        // 行数
        .rowsTemplate('1fr')
        // 元素间隔(列)
        // .columnsGap($r('app.float.home_grid_columnsGap'))
        .columnsGap(4)
        // 元素间隔(行)
        // .rowsGap($r('app.float.home_grid_rowGap'))
        .rowsGap(4)
        // .padding({ top: $r('app.float.home_grid_padding'), bottom: $r('app.float.home_grid_padding') })
        .padding({ top: 5, bottom: 5 })
        // .height($r('app.float.home_grid_height'))
        // 高度
        .height(72)
        .backgroundColor(Color.White)
        // .borderRadius($r('app.float.home_grid_borderRadius'))
        // 圆角
        .borderRadius(12)

        // 轮播
        Swiper(this.swiperController) {
          ForEach(mainViewModel.getSwiperImages(), (img: Resource) => {
            Image(img)
              .borderRadius($r('app.float.home_swiper_borderRadius'))
              .height(100)
              .width(CommonConstants.FULL_PARENT)
                // 保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。
              .objectFit(ImageFit.Cover)
          }, (img: Resource) => JSON.stringify(img.id))
        }
        // .margin({ top: $r('app.float.home_swiper_margin') })
        // .margin({ top: 12 })
        .autoPlay(true)

        // Text($r('app.string.home_list'))
        //   .fontSize($r('app.float.normal_text_size'))
        //   .fontWeight(FontWeight.Medium)
        //   .width(CommonConstants.FULL_PARENT)
        //   .margin({ top: $r('app.float.home_text_margin') })

        // 三个小标题
        Grid() {
          ForEach(mainViewModel.getSecondGridData(), (secondItem: ItemData) => {
            GridItem() {
              Column() {
                Text(secondItem.title)
                  .fontSize($r('app.float.page_title_text_size'))
                  .fontWeight(FontWeight.Bold)   // 改为 Bold 加粗
                  .fontColor(Color.Black)        // 改为黑色
                Text(secondItem.others)
                  .margin({ top: $r('app.float.home_list_margin') })
                  .fontSize($r('app.float.big_text_size'))
                  .fontColor(Color.Black)        // 添加：设置为黑色
                  .fontWeight(FontWeight.Bold)   // 添加：设置为加粗
                  .backdropBlur(10) // 背景模糊 [0,+∞)
                  .fontColor(Color.White)
              }
              .alignItems(HorizontalAlign.Start)
            }
            .padding({ top: $r('app.float.home_list_padding'), left: $r('app.float.home_list_padding') })
            .borderRadius($r('app.float.home_backgroundImage_borderRadius'))
            .align(Alignment.TopStart)
            .backgroundImage(secondItem.img)
            .backgroundImageSize(ImageSize.Cover)
            .width(CommonConstants.FULL_PARENT)
            .height(CommonConstants.FULL_PARENT)
          }, (secondItem: ItemData) => JSON.stringify(secondItem))
        }
        .width(CommonConstants.FULL_PARENT)
        // .height($r('app.float.home_secondGrid_height'))
        .height(120)
        // 列数
        .columnsTemplate('1fr 1fr 1fr')
        // 行数
        .rowsTemplate('1fr')
        .columnsGap($r('app.float.home_grid_columnsGap'))
        .rowsGap($r('app.float.home_grid_rowGap'))
        // .margin({ bottom: $r('app.float.setting_button_bottom') })

        // 瀑布流
        // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
        WaterFlow({ scroller: this.scroller }) {
          LazyForEach(this.datasource, (item: number, index: number) => {
            FlowItem() {
              Column() {
                // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                //   .objectFit(ImageFit.Fill)
                Image(
                  mainViewModel.getRandomPicture()
                )
                  .height(this.itemHeightArray[item] - 42)
                  .borderRadius({ topLeft: 12, topRight: 12 })
                  .width('100%')
                  .objectFit(ImageFit.Cover)
                Row({ space: 20 }) {
                  // 用户头像
                  Image($r('app.media.cover'))
                    // 裁剪为圆
                    .clip(new Circle({ width: '32vp', height: '32vp' }))
                    .width(32)
                    .height(32)
                  // 标题
                  Text("N" + item).fontSize(15)
                }
                .width('100%')
                // 如这里不设置clip为true，则Row组件的圆角不会限制其中的Image组件，Image组件的四个角会超出Row
                .clip(true)
                .justifyContent(FlexAlign.Start)
                .height('42')
              }
              // 如这里不设置clip为true，则Row组件的圆角不会限制其中的Image组件，Image组件的四个角会超出Row
              .clip(true)
            }
            // 阴影
            .shadow({
              radius: 2,
              // color: Color.Grey,
              color: $r('app.color.bg_shadow_color'),
              // y偏移 -> 下
              offsetY: 3,
              offsetX: 3
            })
            .width(this.itemWidthArray[item] - 12)
            .height(this.itemHeightArray[item])
            .borderRadius(12)
            // .backgroundColor(this.colors[item % 5])
            .backgroundColor(0xFAEEE0)
            .onClick((e) => {
              router.pushUrl({ url: 'pages/ArticleDetailPage' })
            })
          }, item => item)
        }
        .columnsTemplate("1fr 1fr")
        .itemConstraintSize({
          minWidth: 0,
          maxWidth: '100%',
          minHeight: 0,
          maxHeight: '100%'
        })
        .columnsGap(16)
        .rowsGap(12)
        .onReachStart(() => {
          // 瀑布流划到顶就滚动到首页的顶部
          this.main_scroller.scrollTo({
            xOffset: 0, yOffset: 0,
            // 滚动动画
            animation: {
              duration: 600, // ms?
              curve: Curve.EaseInOut
            }
          })
          console.info("onReachStart")
        })
        .onReachEnd(() => {
          console.info("onReachEnd")
          // 瀑布流划到底就滚动到首页的顶部 -> todo: 请求新数据
          this.main_scroller.scrollTo({
            xOffset: 0, yOffset: 0,
            // 滚动动画
            animation: {
              duration: 800, // ms?
              curve: Curve.EaseInOut
            }
          })
        })
        // .backgroundColor(0xFAEEE0)
        .width('100%')
        // .height('80%')
        .height('100%')
        // 方向
        .layoutDirection(FlexDirection.Column)
        // .padding({ bottom: this.maxSize })
      }
      .padding({ top: 24 })
    }
    .align(Alignment.Top)
    // .backgroundColor($r('app.color.primary_color_bg'))
    .height(CommonConstants.FULL_PARENT)
  }
}

