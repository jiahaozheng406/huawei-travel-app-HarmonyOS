import PostEntity from './entity/PostEntity';
import PostUser from './entity/PostUser';

// 给社区页面提供数据和操作方法
export class CommunityViewModel {

  // 获取帖子列表(10条) -> 后端分页获取...
  getPostEntities(): Array<PostEntity> {
    let posts: PostEntity[] = []
    for (let i = 0; i < 10; i++) {
      posts.push(
        new PostEntity(
          '你不能错过的夏天旅游胜地',
          '不能错过的夏天旅游圣地推荐top5',
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' +
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' +
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' +
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
          '2025-10-1' + i,
          [
          $r('app.media.cover'),
          $r('app.media.cover'),
          $r('app.media.cover'),
          ],
          new PostUser('1', 'xxx', $r('app.media.Dt4'))
        )
      )
    }
    return posts;
  }
}

export default new CommunityViewModel()