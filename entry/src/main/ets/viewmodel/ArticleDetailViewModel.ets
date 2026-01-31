
// 给文章(攻略)详情页面提供数据和操作方法
export class ArticleDetailViewModel {
  // 获取文章详情
  getSwiper(): Array<Resource> {
    let swiper: Resource[] = [
    $r('app.media.Dt5'),
    $r('app.media.Dt2'),
    $r('app.media.Dt3'),
    $r('app.media.DT4'),
    ]
    return swiper;
  }
}

export default new ArticleDetailViewModel()