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
import ItemData from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/entity/ItemData';
/**
 * Binds data to components and provides interfaces.
 * viewmodel 类似redux的状态提供?
 * 提供数据和操作数据的方法
 */
export class MainViewModel {
    /**
     *
     */
    getRandomPicture() {
        // 获取随机索引
        let index = Math.floor(Math.random() * 24);
        let imgs = [
            { "id": 16777373, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777374, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777375, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777376, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777377, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777378, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777379, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777414, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777415, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777416, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777417, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777381, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777382, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777383, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777384, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777385, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777386, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777387, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777388, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777389, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777467, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777472, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777473, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777474, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777475, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777476, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777477, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777478, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777479, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777468, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777469, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777470, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777471, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
        ];
        return imgs[index];
    }
    /**
     * Get swiper image data.
     * 首页轮播图图片
     *
     * @return {Array<Resource>} swiperImages.
     */
    getSwiperImages() {
        let swiperImages = [
            { "id": 16777385, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777386, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777373, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777374, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777375, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777379, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
        ];
        return swiperImages;
    }
    /**
     * Get data of the first grid.
     * 首页搜索栏下的4个图标+文字
     *
     * @return {Array<PageResource>} firstGridData.
     */
    getFirstGridData() {
        let firstGridData = [
            // new ItemData($r('app.string.my_love'), $r('app.media.love')),
            // new ItemData($r('app.string.history_record'), $r('app.media.record')),
            // new ItemData($r('app.string.favorites'), $r('app.media.favorite')),
            // new ItemData($r('app.string.recycle_bin'), $r('app.media.recycle'))
            new ItemData('酒店', { "id": 16777421, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('机票', { "id": 16777445, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('火车票', { "id": 16777463, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('旅游', { "id": 16777418, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
        ];
        return firstGridData;
    }
    /**
     * Get data of the second grid.
     *
     * @return {Array<PageResource>} secondGridData.
     */
    getSecondGridData() {
        // let secondGridData: ItemData[] = [
        //   new ItemData($r('app.string.mainPage_top'), $r('app.media.DT1'), $r('app.string.mainPage_text_top')),
        //   new ItemData($r('app.string.mainPage_new'), $r('app.media.DT2'), $r('app.string.mainPage_text_new')),
        //   new ItemData($r('app.string.mainPage_brand'), $r('app.media.DT3'), $r('app.string.mainPage_text_brand')),
        //   new ItemData($r('app.string.mainPage_found'), $r('app.media.DT4'), $r('app.string.mainPage_text_found'))
        // ];
        let secondGridData = [
            new ItemData('热门城市', { "id": 16777373, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777245, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('美食攻略', { "id": 16777379, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777244, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('旅游资讯', { "id": 16777380, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777242, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
        ];
        return secondGridData;
    }
    /**
     * Get data of the setting list.
     *
     * @return {Array<PageResource>} settingListData.
     */
    getSettingListData() {
        let settingListData = [
            new ItemData({ "id": 16777268, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777443, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777271, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777266, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777403, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777267, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777438, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777265, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777396, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777270, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777459, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777269, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777446, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map