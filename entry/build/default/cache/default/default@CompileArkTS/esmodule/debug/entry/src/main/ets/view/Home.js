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
import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
import mainViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/MainViewModel';
import { WaterFlowDataSource } from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/WaterFlowDataSource';
import router from '@ohos:router';
export default class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.swiperController = new SwiperController();
        this.searchController = new TextInputController();
        this.main_scroller = new Scroller();
        this.__search_txt = new ObservedPropertySimplePU(''
        // 瀑布流相关
        , this, "search_txt");
        this.__minSize = new ObservedPropertySimplePU(240, this, "minSize");
        this.__maxSize = new ObservedPropertySimplePU(300, this, "maxSize");
        this.__fontSize = new ObservedPropertySimplePU(24, this, "fontSize");
        this.__colors = new ObservedPropertyObjectPU([0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F], this, "colors");
        this.scroller = new Scroller();
        this.datasource = new WaterFlowDataSource();
        this.itemWidthArray = [];
        this.itemHeightArray = [];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.searchController !== undefined) {
            this.searchController = params.searchController;
        }
        if (params.main_scroller !== undefined) {
            this.main_scroller = params.main_scroller;
        }
        if (params.search_txt !== undefined) {
            this.search_txt = params.search_txt;
        }
        if (params.minSize !== undefined) {
            this.minSize = params.minSize;
        }
        if (params.maxSize !== undefined) {
            this.maxSize = params.maxSize;
        }
        if (params.fontSize !== undefined) {
            this.fontSize = params.fontSize;
        }
        if (params.colors !== undefined) {
            this.colors = params.colors;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.datasource !== undefined) {
            this.datasource = params.datasource;
        }
        if (params.itemWidthArray !== undefined) {
            this.itemWidthArray = params.itemWidthArray;
        }
        if (params.itemHeightArray !== undefined) {
            this.itemHeightArray = params.itemHeightArray;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__search_txt.purgeDependencyOnElmtId(rmElmtId);
        this.__minSize.purgeDependencyOnElmtId(rmElmtId);
        this.__maxSize.purgeDependencyOnElmtId(rmElmtId);
        this.__fontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__colors.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__search_txt.aboutToBeDeleted();
        this.__minSize.aboutToBeDeleted();
        this.__maxSize.aboutToBeDeleted();
        this.__fontSize.aboutToBeDeleted();
        this.__colors.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get search_txt() {
        return this.__search_txt.get();
    }
    set search_txt(newValue) {
        this.__search_txt.set(newValue);
    }
    get minSize() {
        return this.__minSize.get();
    }
    set minSize(newValue) {
        this.__minSize.set(newValue);
    }
    get maxSize() {
        return this.__maxSize.get();
    }
    set maxSize(newValue) {
        this.__maxSize.set(newValue);
    }
    get fontSize() {
        return this.__fontSize.get();
    }
    set fontSize(newValue) {
        this.__fontSize.set(newValue);
    }
    get colors() {
        return this.__colors.get();
    }
    set colors(newValue) {
        this.__colors.set(newValue);
    }
    // 计算flow item宽/高
    getSize() {
        let ret = Math.floor(Math.random() * this.maxSize);
        return (ret > this.minSize ? ret : this.minSize);
    }
    // 保存flow item宽/高
    getItemSizeArray() {
        for (let i = 0; i < 100; i++) {
            this.itemWidthArray.push(this.getSize());
            this.itemHeightArray.push(this.getSize());
        }
    }
    aboutToAppear() {
        this.getItemSizeArray();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create(this.main_scroller);
            Scroll.align(Alignment.Top);
            Scroll.height(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Column({ space: CommonConstants.COMMON_SPACE }) {
            Column.create({ space: 24 });
            // Column({ space: CommonConstants.COMMON_SPACE }) {
            Column.padding({ top: 24 });
            if (!isInitialRender) {
                // Column({ space: CommonConstants.COMMON_SPACE }) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 16 });
            Row.width(CommonConstants.FULL_PARENT);
            Row.margin({ left: 20, right: 20 });
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索框
            TextInput.create({
                placeholder: '搜索景点...',
                controller: this.searchController
            });
            // 搜索框
            TextInput.onChange((value) => {
                this.search_txt = value;
            });
            // 搜索框
            TextInput.width(280);
            // 搜索框
            TextInput.onClick((e) => {
                router.pushUrl({
                    url: "pages/SearchPage",
                });
            });
            if (!isInitialRender) {
                // 搜索框
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('搜索');
            Button.height(32);
            Button.borderRadius(8);
            Button.type(ButtonType.Normal);
            Button.fontColor(Color.Black);
            Button.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.onClick((e) => {
                router.pushUrl({
                    url: "pages/SearchPage",
                    params: {
                        search_txt: this.search_txt
                    }
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.create();
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.backdropBlur(6);
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.shadow({
                radius: 2,
                // color: Color.Grey,
                color: { "id": 16777276, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                // y偏移 -> 下
                offsetY: 3
            });
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.columnsTemplate('1fr 1fr 1fr 1fr');
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.rowsTemplate('1fr');
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.columnsGap(4);
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.rowsGap(4);
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.padding({ top: 5, bottom: 5 });
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.height(72);
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.backgroundColor(Color.White);
            // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
            // 酒店|机票|火车票|旅游
            Grid.borderRadius(12);
            if (!isInitialRender) {
                // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
                // 酒店|机票|火车票|旅游
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.onClick((e) => {
                                router.pushUrl({
                                    url: 'pages/TicketPage',
                                    params: {
                                        index
                                    }
                                });
                            });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item.img);
                            Image.width(36);
                            Image.height(36);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.title);
                            Text.fontSize(16);
                            Text.margin({ top: { "id": 16777310, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.onClick((e) => {
                                router.pushUrl({
                                    url: 'pages/TicketPage',
                                    params: {
                                        index
                                    }
                                });
                            });
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item.img);
                            Image.width(36);
                            Image.height(36);
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item.title);
                            Text.fontSize(16);
                            Text.margin({ top: { "id": 16777310, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getFirstGridData(), forEachItemGenFunction, 
            // key
            (item) => JSON.stringify(item), true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // .borderRadius({ bottomLeft: 12, bottomRight: 12 })
        // 酒店|机票|火车票|旅游
        Grid.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 轮播
            Swiper.create(this.swiperController);
            // 轮播
            Swiper.autoPlay(true);
            if (!isInitialRender) {
                // 轮播
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const img = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(img);
                    Image.borderRadius({ "id": 16777317, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                    Image.height(100);
                    Image.width(CommonConstants.FULL_PARENT);
                    Image.objectFit(ImageFit.Cover);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSwiperImages(), forEachItemGenFunction, (img) => JSON.stringify(img.id), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 轮播
        Swiper.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.create();
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.width(CommonConstants.FULL_PARENT);
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.height(120);
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.columnsTemplate('1fr 1fr 1fr');
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.rowsTemplate('1fr');
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.columnsGap({ "id": 16777304, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Text($r('app.string.home_list'))
            //   .fontSize($r('app.float.normal_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .width(CommonConstants.FULL_PARENT)
            //   .margin({ top: $r('app.float.home_text_margin') })
            // 三个小标题
            Grid.rowsGap({ "id": 16777308, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                // Text($r('app.string.home_list'))
                //   .fontSize($r('app.float.normal_text_size'))
                //   .fontWeight(FontWeight.Medium)
                //   .width(CommonConstants.FULL_PARENT)
                //   .margin({ top: $r('app.float.home_text_margin') })
                // 三个小标题
                Grid.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const secondItem = _item;
                {
                    const isLazyCreate = true && (Grid.willUseProxy() === true);
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        GridItem.create(deepRenderFunction, isLazyCreate);
                        GridItem.padding({ top: { "id": 16777314, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, left: { "id": 16777314, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
                        GridItem.borderRadius({ "id": 16777302, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        GridItem.align(Alignment.TopStart);
                        GridItem.backgroundImage(secondItem.img);
                        GridItem.backgroundImageSize(ImageSize.Cover);
                        GridItem.width(CommonConstants.FULL_PARENT);
                        GridItem.height(CommonConstants.FULL_PARENT);
                        if (!isInitialRender) {
                            GridItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        GridItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.fontSize({ "id": 16777349, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Bold);
                            Text.fontColor(Color.Black);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.others);
                            Text.margin({ top: { "id": 16777313, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777300, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                            Text.fontColor(Color.Black);
                            Text.fontWeight(FontWeight.Bold);
                            Text.backdropBlur(10);
                            Text.fontColor(Color.White);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Column.create();
                            Column.alignItems(HorizontalAlign.Start);
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.title);
                            Text.fontSize({ "id": 16777349, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Bold);
                            Text.fontColor(Color.Black);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(secondItem.others);
                            Text.margin({ top: { "id": 16777313, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777300, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                            Text.fontColor(Color.Black);
                            Text.fontWeight(FontWeight.Bold);
                            Text.backdropBlur(10);
                            Text.fontColor(Color.White);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSecondGridData(), forEachItemGenFunction, (secondItem) => JSON.stringify(secondItem), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // Text($r('app.string.home_list'))
        //   .fontSize($r('app.float.normal_text_size'))
        //   .fontWeight(FontWeight.Medium)
        //   .width(CommonConstants.FULL_PARENT)
        //   .margin({ top: $r('app.float.home_text_margin') })
        // 三个小标题
        Grid.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.create({ scroller: this.scroller });
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.columnsTemplate("1fr 1fr");
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.itemConstraintSize({
                minWidth: 0,
                maxWidth: '100%',
                minHeight: 0,
                maxHeight: '100%'
            });
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.columnsGap(16);
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.rowsGap(12);
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.onReachStart(() => {
                // 瀑布流划到顶就滚动到首页的顶部
                this.main_scroller.scrollTo({
                    xOffset: 0, yOffset: 0,
                    // 滚动动画
                    animation: {
                        duration: 600,
                        curve: Curve.EaseInOut
                    }
                });
                console.info("onReachStart");
            });
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.onReachEnd(() => {
                console.info("onReachEnd");
                // 瀑布流划到底就滚动到首页的顶部 -> todo: 请求新数据
                this.main_scroller.scrollTo({
                    xOffset: 0, yOffset: 0,
                    // 滚动动画
                    animation: {
                        duration: 800,
                        curve: Curve.EaseInOut
                    }
                });
            });
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.width('100%');
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.height('100%');
            // .margin({ bottom: $r('app.float.setting_button_bottom') })
            // 瀑布流
            // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
            WaterFlow.layoutDirection(FlexDirection.Column);
            if (!isInitialRender) {
                // .margin({ bottom: $r('app.float.setting_button_bottom') })
                // 瀑布流
                // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
                WaterFlow.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const __lazyForEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    FlowItem.create();
                    FlowItem.shadow({
                        radius: 2,
                        // color: Color.Grey,
                        color: { "id": 16777276, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                        // y偏移 -> 下
                        offsetY: 3,
                        offsetX: 3
                    });
                    FlowItem.width(this.itemWidthArray[item] - 12);
                    FlowItem.height(this.itemHeightArray[item]);
                    FlowItem.borderRadius(12);
                    FlowItem.backgroundColor(0xFAEEE0);
                    FlowItem.onClick((e) => {
                        router.pushUrl({ url: 'pages/ArticleDetailPage' });
                    });
                    if (!isInitialRender) {
                        FlowItem.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.clip(true);
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                    //   .objectFit(ImageFit.Fill)
                    Image.create(mainViewModel.getRandomPicture());
                    // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                    //   .objectFit(ImageFit.Fill)
                    Image.height(this.itemHeightArray[item] - 42);
                    // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                    //   .objectFit(ImageFit.Fill)
                    Image.borderRadius({ topLeft: 12, topRight: 12 });
                    // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                    //   .objectFit(ImageFit.Fill)
                    Image.width('100%');
                    // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                    //   .objectFit(ImageFit.Fill)
                    Image.objectFit(ImageFit.Cover);
                    if (!isInitialRender) {
                        // Image('res/waterFlowTest(' + item % 5 + ').jpg')
                        //   .objectFit(ImageFit.Fill)
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create({ space: 20 });
                    Row.width('100%');
                    Row.clip(true);
                    Row.justifyContent(FlexAlign.Start);
                    Row.height('42');
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // 用户头像
                    Image.create({ "id": 16777402, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                    // 用户头像
                    Image.clip(new Circle({ width: '32vp', height: '32vp' }));
                    // 用户头像
                    Image.width(32);
                    // 用户头像
                    Image.height(32);
                    if (!isInitialRender) {
                        // 用户头像
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // 标题
                    Text.create("N" + item);
                    // 标题
                    Text.fontSize(15);
                    if (!isInitialRender) {
                        // 标题
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // 标题
                Text.pop();
                Row.pop();
                Column.pop();
                FlowItem.pop();
            };
            const __lazyForEachItemIdFunc = item => item;
            LazyForEach.create("1", this, this.datasource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        // .margin({ bottom: $r('app.float.setting_button_bottom') })
        // 瀑布流
        // WaterFlow({ footer: this.itemFoot.bind(this), scroller: this.scroller }) {
        WaterFlow.pop();
        // Column({ space: CommonConstants.COMMON_SPACE }) {
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Home.js.map