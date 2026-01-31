import TabItem from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/entity/SearchTabItemData';
import hilog from '@ohos:hilog';
// 给搜索页面提供数据和操作方法
export class SearchViewModel {
    // 搜索框下, 不同搜索的tabitem的数据
    getTabItemDate() {
        return [
            new TabItem({ "id": 16777426, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, '酒店'),
            new TabItem({ "id": 16777422, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, '火车票'),
            new TabItem({ "id": 16777408, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, '机票'),
            new TabItem({ "id": 16777437, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, '旅游团'),
        ];
    }
    // list 热门推荐
    getRecommondItemData() {
        let cur_idxs = [];
        while (cur_idxs.length < 8) {
            // 获取随机索引
            let index = Math.floor(Math.random() * 15);
            if (cur_idxs.indexOf(index) == -1) {
                cur_idxs.push(index);
            }
            hilog.info(0x0000, 'testTag', '%{public}s', cur_idxs.length);
        }
        hilog.info(0x0000, 'testTag', '%{public}s', cur_idxs);
        let strings = [
            '鼓浪屿', '厦门大学', '花果山瀑布', '大本钟',
            '鼓浪屿1', '厦门大学1', '花果山瀑布1', '大本钟1',
            '鼓浪屿2', '厦门大学2', '花果山瀑布2', '大本钟2',
            '鼓浪屿3', '厦门大学3', '花果山瀑布3', '大本钟3',
        ];
        let res = [];
        for (let i = 0; i < cur_idxs.length; i++) {
            res.push(strings[cur_idxs[i]]);
        }
        hilog.info(0x0000, 'testTag', '%{public}s', res);
        return res;
    }
}
export default new SearchViewModel();
//# sourceMappingURL=SearchViewModel.js.map