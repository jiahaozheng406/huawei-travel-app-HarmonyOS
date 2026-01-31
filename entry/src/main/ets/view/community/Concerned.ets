import CommonConstants from '../../common/constants/CommonConstants'
import PostCard from '../../component/PostItem'
import CommunityViewModel from '../../viewmodel/CommunityViewModel'
import PostEntity from '../../viewmodel/entity/PostEntity'

@Component
export default struct Concern {
  build() {
    Scroll() {
      // 用户帖子
      Column({ space: 12 }) {
        ForEach(CommunityViewModel.getPostEntities(), (item: PostEntity) => {
          PostCard({
            show_btn: false,
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
    .height('100%')
    .align(Alignment.Top)
    .height(CommonConstants.FULL_PARENT)
  }
}