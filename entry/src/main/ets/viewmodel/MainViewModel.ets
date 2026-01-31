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

import ItemData from './entity/ItemData';

/**
 * Binds data to components and provides interfaces.
 * viewmodel 类似redux的状态提供?
 * 提供数据和操作数据的方法
 */
export class MainViewModel {

  /**
   *
   */
  getRandomPicture(): Resource {
    // 获取随机索引
    let index: number = Math.floor(Math.random() * 24)

    let imgs = [
    $r('app.media.1'), $r('app.media.2'),$r('app.media.3'),$r('app.media.4'),$r('app.media.5'),$r('app.media.6'),$r('app.media.7'),
    $r('app.media.gly'),
    $r('app.media.gly_1'),
    $r('app.media.gly_2'),
    $r('app.media.gly_3'),
    $r('app.media.DT1'),
    $r('app.media.DT2'),
    $r('app.media.DT3'),
    $r('app.media.DT4'),
    $r('app.media.Dt1'),
    $r('app.media.Dt2'),
    $r('app.media.Dt3'),
    $r('app.media.Dt4'),
    $r('app.media.Dt5'),
    $r('app.media.v1'),
    $r('app.media.v2'),
    $r('app.media.v3'),
    $r('app.media.v4'),
    $r('app.media.v5'),
    $r('app.media.v6'),
    $r('app.media.v7'),
    $r('app.media.v8'),
    $r('app.media.v9'),
    $r('app.media.v10'),
    $r('app.media.v11'),
    $r('app.media.v12'),
    $r('app.media.v13'),
    ]
    return imgs[index]
  }

  /**
   * Get swiper image data.
   * 首页轮播图图片
   *
   * @return {Array<Resource>} swiperImages.
   */
  getSwiperImages(): Array<Resource> {
    let swiperImages: Resource[] = [
    $r('app.media.Dt1'),
    $r('app.media.Dt2'),
    $r('app.media.1'),
    $r('app.media.2'),
    $r('app.media.3'),
    $r('app.media.7'),
    ];
    return swiperImages;
  }

  /**
   * Get data of the first grid.
   * 首页搜索栏下的4个图标+文字
   *
   * @return {Array<PageResource>} firstGridData.
   */
  getFirstGridData(): Array<ItemData> {
    let firstGridData: ItemData[] = [
    // new ItemData($r('app.string.my_love'), $r('app.media.love')),
    // new ItemData($r('app.string.history_record'), $r('app.media.record')),
    // new ItemData($r('app.string.favorites'), $r('app.media.favorite')),
    // new ItemData($r('app.string.recycle_bin'), $r('app.media.recycle'))
      new ItemData('酒店', $r('app.media.hotel_ly')),
      new ItemData('机票', $r('app.media.plane_ly')),
      new ItemData('火车票', $r('app.media.train_ly')),
      new ItemData('旅游', $r('app.media.home_ly')),
    ];
    return firstGridData;
  }


  /**
   * Get data of the second grid.
   *
   * @return {Array<PageResource>} secondGridData.
   */
  getSecondGridData(): Array<ItemData> {
    // let secondGridData: ItemData[] = [
    //   new ItemData($r('app.string.mainPage_top'), $r('app.media.DT1'), $r('app.string.mainPage_text_top')),
    //   new ItemData($r('app.string.mainPage_new'), $r('app.media.DT2'), $r('app.string.mainPage_text_new')),
    //   new ItemData($r('app.string.mainPage_brand'), $r('app.media.DT3'), $r('app.string.mainPage_text_brand')),
    //   new ItemData($r('app.string.mainPage_found'), $r('app.media.DT4'), $r('app.string.mainPage_text_found'))
    // ];
    let secondGridData: ItemData[] = [
      new ItemData('热门城市', $r('app.media.1'), $r('app.string.mainPage_text_top')),
      new ItemData('美食攻略', $r('app.media.7'), $r('app.string.mainPage_text_new')),
      new ItemData('旅游资讯', $r('app.media.8'), $r('app.string.mainPage_text_brand')),
    ];

    return secondGridData;
  }


  /**
   * Get data of the setting list.
   *
   * @return {Array<PageResource>} settingListData.
   */
  getSettingListData(): Array<ItemData> {
    let settingListData: ItemData[] = [
      new ItemData($r('app.string.setting_list_news'), $r('app.media.news'), $r("app.string.setting_toggle")),
      new ItemData($r('app.string.setting_list_data'), $r('app.media.data')),
      new ItemData($r('app.string.setting_list_menu'), $r('app.media.menu')),
      new ItemData($r('app.string.setting_list_about'), $r('app.media.about')),
      new ItemData($r('app.string.setting_list_storage'), $r('app.media.storage')),
      new ItemData($r('app.string.setting_list_privacy'), $r('app.media.privacy'))
    ];
    return settingListData;
  }
}

export default new MainViewModel();