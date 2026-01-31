// 给买票页面提供数据和操作方法
export class TicketViewModel {

  // 获取轮播
  getSwiper(): Array<Resource> {
    let swiper: Resource[] = [
    $r('app.media.Dt1'),
    $r('app.media.Dt2'),
    $r('app.media.Dt3'),
    $r('app.media.Dt4'),
    ]
    return swiper;
  }
}

export default new TicketViewModel()