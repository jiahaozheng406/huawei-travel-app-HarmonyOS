// 帖子展示的实体类
import Location from './Location';
import PostUser from './PostUser';

export default class PostEntity {
  title: Resource | string;
  user: PostUser
  desc: Resource | string;
  content: Resource | string;
  pub_date: Resource | string;
  imgs: Resource[];
  // 可选: 文章关联的景点 -> 结尾处会展示为card
  locations?: Location;

  constructor(
    title: Resource | string, desc: Resource | string,
    content: Resource | string, pub_date: Resource | string,
    imgs: Resource[],
    user: PostUser
  ) {
    // 标题
    this.title = title;
    // 描述
    this.desc = desc;
    // 内容
    this.content = content;
    // 发布时间
    this.pub_date = pub_date;
    this.imgs = imgs;
    this.user = user;
  }
}