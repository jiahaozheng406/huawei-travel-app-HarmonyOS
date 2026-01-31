import { Event } from '@ohos.worker'
import systemDateTime from '@ohos.systemDateTime'
import hilog from '@ohos.hilog'

@Component
export default struct BuyCard {
  // link可以父子同步更新
  @Link start: string
  @Link end: string
  // 当前选择的时间
  startDate: Date = new Date("2010-1-1")
  endDate: Date = new Date("2010-1-2")
  // 点击事件
  custom_click: Function

  build() {
    // 卡片占一行
    Column({ space: 12 }) {
      // 输入位置
      Row() {
        TextInput({ placeholder: '地点' })
          .width('100%')
          .height(50)
            // .margin({ bottom: 12 })
          .backgroundColor(Color.White)
          .placeholderFont({ size: 20 })
          .fontSize(20)
          .borderRadius({ topLeft: 5, topRight: 5 })
          .padding({ left: 5, right: 5 })
          .style(TextInputStyle.Inline)
      }
      .width('90%')

      // 时间选择器
      Row({ space: 24 }) {
        Text(this.start)
          .onClick(() => {
            DatePickerDialog.show({
              start: new Date("2000-12-31"),
              end: new Date("2100-12-31"),
              selected: this.startDate,
              onAccept: (value: DatePickerResult) => {
                console.log('malred log!!!: ' +  AppStorage.Get<String>('start'))
                console.log('malred log!!!: ' + new Date(AppStorage.Get<string>('start')))
                // 开始时间不能比系统当前时间早
                if (new Date(value.year + "-" + (value.month + 1) + "-" + value.day).getTime()
                < new Date(AppStorage.Get('start')).getTime()) {
                  AlertDialog.show(
                    {
                      title: '错误!',
                      message: '开始时间不能比系统当前时间早',
                      autoCancel: true,
                      alignment: DialogAlignment.Bottom,
                      offset: { dx: 0, dy: -20 },
                      gridCount: 3,
                      confirm: {
                        value: '确定',
                        action: () => {
                          console.info('Button-clicking callback')
                        }
                      },
                      cancel: () => {
                        console.info('Closed callbacks')
                      }
                    }
                  )
                  return
                }
                this.start = value.year + "-" + (value.month + 1) + "-" + value.day
                this.startDate = new Date(value.year + "-" + value.month + "-" + value.day)
                // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                // this.startDate.setFullYear(value.year, value.month, value.day)
                console.info("DatePickerDialog:onAccept()" + JSON.stringify(value))
              },
              onCancel: () => {
                console.info("DatePickerDialog:onCancel()")
              },
              onChange: (value: DatePickerResult) => {
                console.info("DatePickerDialog:onChange()" + JSON.stringify(value))
              }
            })
          })
          .fontWeight(600)
          .fontSize(18)

        Text(this.end)
          .onClick(() => {
            DatePickerDialog.show({
              start: this.startDate,
              end: new Date("2100-12-31"),
              selected: this.endDate,
              onAccept: (value: DatePickerResult) => {
                console.info("DatePickerDialog:onAccept()" + JSON.stringify(value))
                // 结束时间不能比开始时间早
                if (new Date(value.year + "-" + (value.month + 1) + "-" + value.day).getTime()
                < this.startDate.getTime()) {
                  AlertDialog.show(
                    {
                      title: '错误!',
                      message: '结束时间不能比开始时间早',
                      autoCancel: true,
                      alignment: DialogAlignment.Bottom,
                      offset: { dx: 0, dy: -20 },
                      gridCount: 3,
                      confirm: {
                        value: '确定',
                        action: () => {
                          console.info('Button-clicking callback')
                        }
                      },
                      cancel: () => {
                        console.info('Closed callbacks')
                      }
                    }
                  )
                  return
                }
                this.end = value.year + "-" + (value.month + 1) + "-" + value.day
                // this.endDate = new Date(value.year + "-" + value.month + "-" + value.day)
                // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                // this.endDate.setFullYear(value.year, value.month, value.day)
              },
              onCancel: () => {
                console.info("DatePickerDialog:onCancel()")
              },
              onChange: (value: DatePickerResult) => {
                console.info("DatePickerDialog:onChange()" + JSON.stringify(value))
              }
            })
          })
          .fontWeight(600)
          .fontSize(18)
      }
      .width('90%')
      .padding({ left: 8 })
      .justifyContent(FlexAlign.Start)

      // 按钮
      Button('搜索')
        // 阴影
        .shadow({
          radius: 3,
          // color: $r('app.color.bg_shadow_color'),
          color: Color.Grey,
          // x偏移 -> 右
          offsetX: 3,
          // y偏移 -> 下
          offsetY: 3
        })
        .width('90%')
        .onClick((e) => {
          // 调用父组件传来的用户定义的方法
          this.custom_click.call(this)
        })
        .fontColor(Color.Black)
        .backgroundColor($r('app.color.primary_color'))
    }
    .backdropBlur(6) // 背景模糊
    // 阴影
    .shadow({
      radius: 3,
      color: Color.Grey,
      // color: $r('app.color.bg_shadow_color'),
      // x偏移 -> 右
      offsetX: 3,
      // y偏移 -> 下
      offsetY: 3
    })
    .alignItems(HorizontalAlign.Center)
    // .justifyContent(FlexAlign.Center)
    .width('70%')
    .height('23%')
    .margin({ top: 24, bottom: 24 })
    .padding({ top: 12, bottom: 12 })
    .borderRadius(12)
    // .backgroundColor($r('app.color.primary_color_bg'))
    .backgroundColor(Color.White)
  }
}