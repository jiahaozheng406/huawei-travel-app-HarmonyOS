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
        let index = Math.floor(Math.random() * 8);
        let imgs = [
            { "id": 16777304, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777305, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777310, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777435, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777222, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777441, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777447, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777440, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777307, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
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
            { "id": 16777220, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777227, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777308, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
            { "id": 16777401, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }
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
            new ItemData('酒店', { "id": 16777299, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('机票', { "id": 16777292, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('火车票', { "id": 16777221, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('旅游', { "id": 16777322, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
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
            new ItemData('榜单', { "id": 16777304, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777254, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('攻略', { "id": 16777305, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777253, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData('特价', { "id": 16777310, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777251, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
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
            new ItemData({ "id": 16777276, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777311, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777279, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777274, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777295, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777275, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777223, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777273, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777325, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777278, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777404, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }),
            new ItemData({ "id": 16777277, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777298, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" })
        ];
        return settingListData;
    }
}
export default new MainViewModel();
//# sourceMappingURL=MainViewModel.js.map