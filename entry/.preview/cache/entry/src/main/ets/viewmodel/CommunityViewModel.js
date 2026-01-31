import PostEntity from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/entity/PostEntity';
import PostUser from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/entity/PostUser';
// 给社区页面提供数据和操作方法
export class CommunityViewModel {
    // 获取帖子列表(10条) -> 后端分页获取...
    getPostEntities() {
        let posts = [];
        for (let i = 0; i < 10; i++) {
            posts.push(new PostEntity('你不能错过的夏天旅游胜地', '不能错过的夏天旅游圣地推荐top5', 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' +
                'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' +
                'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' +
                'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent', '2022-01-0' + i, [
                { "id": 16777307, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                { "id": 16777307, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                { "id": 16777307, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            ], new PostUser('1', 'xxx', { "id": 16777401, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" })));
        }
        return posts;
    }
}
export default new CommunityViewModel();
//# sourceMappingURL=CommunityViewModel.js.map