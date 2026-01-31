import router from '@ohos:router';
import SearchViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/SearchViewModel';
import SmallScenicCard from '@bundle:org.malred.TravelApplication/entry/ets/component/SmallScenicCard';
export default class SearchPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__search_txt = new ObservedPropertySimplePU('', this, "search_txt");
        this.search_controller = new SearchController();
        this.__list_data = new ObservedPropertyObjectPU([], this, "list_data");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.search_txt !== undefined) {
            this.search_txt = params.search_txt;
        }
        if (params.search_controller !== undefined) {
            this.search_controller = params.search_controller;
        }
        if (params.list_data !== undefined) {
            this.list_data = params.list_data;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__search_txt.purgeDependencyOnElmtId(rmElmtId);
        this.__list_data.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__search_txt.aboutToBeDeleted();
        this.__list_data.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get search_txt() {
        return this.__search_txt.get();
    }
    set search_txt(newValue) {
        this.__search_txt.set(newValue);
    }
    get list_data() {
        return this.__list_data.get();
    }
    set list_data(newValue) {
        this.__list_data.set(newValue);
    }
    onPageShow() {
        this.list_data = SearchViewModel.getRecommondItemData();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/SearchPage.ets(18:5)");
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索
            Row.create({ space: 16 });
            Row.debugLine("pages/SearchPage.ets(20:7)");
            // 搜索
            Row.width('100%');
            // 搜索
            Row.margin({ top: 20, left: 20, right: 20, bottom: 12 });
            // 搜索
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                // 搜索
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索框
            TextInput.create({
                placeholder: '搜索景点...',
                controller: this.search_controller
            });
            TextInput.debugLine("pages/SearchPage.ets(22:9)");
            // 搜索框
            TextInput.onChange((value) => {
                this.search_txt = value;
            });
            // 搜索框
            TextInput.width(280);
            if (!isInitialRender) {
                // 搜索框
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('搜索');
            Button.debugLine("pages/SearchPage.ets(31:9)");
            Button.height(32);
            Button.borderRadius(8);
            Button.type(ButtonType.Normal);
            Button.fontColor(Color.Black);
            Button.backgroundColor({ "id": 16777422, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.onClick((e) => {
                router.pushUrl({
                    url: "pages/SearchResultPage",
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
        // 搜索
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 小标签, 点击跳转 搜索: 酒店|机票|火车票|跟团
            Row.create();
            Row.debugLine("pages/SearchPage.ets(53:7)");
            if (!isInitialRender) {
                // 小标签, 点击跳转 搜索: 酒店|机票|火车票|跟团
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create();
                    Row.debugLine("pages/SearchPage.ets(55:11)");
                    Row.onClick((e) => {
                        router.replaceUrl({
                            url: 'pages/TicketPage',
                            params: {
                                index
                            }
                        });
                    });
                    Row.margin(6);
                    Row.height(36);
                    Row.width(80);
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item.icon);
                    Image.debugLine("pages/SearchPage.ets(56:13)");
                    Image.width(30);
                    Image.height(30);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.name);
                    Text.debugLine("pages/SearchPage.ets(59:13)");
                    Text.margin({ left: 4 });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, SearchViewModel.getTabItemDate(), forEachItemGenFunction, (item) => JSON.stringify(item), true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 小标签, 点击跳转 搜索: 酒店|机票|火车票|跟团
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 热门推荐 文字
            Row.create();
            Row.debugLine("pages/SearchPage.ets(77:7)");
            // 热门推荐 文字
            Row.width('100%');
            // 热门推荐 文字
            Row.height(28);
            // 热门推荐 文字
            Row.margin(12);
            // 热门推荐 文字
            Row.padding({ left: 24, right: 24 });
            // 热门推荐 文字
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                // 热门推荐 文字
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('热门推荐');
            Text.debugLine("pages/SearchPage.ets(78:9)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(20);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/SearchPage.ets(81:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('换一换');
            Text.debugLine("pages/SearchPage.ets(82:11)");
            Text.fontSize(15);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777284, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("pages/SearchPage.ets(84:11)");
            Image.width(16);
            Image.height(16);
            Image.onClick((e) => {
                this.list_data = SearchViewModel.getRecommondItemData();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        // 热门推荐 文字
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 热门推荐 小标签 16个中随机展示8个
            List.create({ space: 20, initialIndex: 0 });
            List.debugLine("pages/SearchPage.ets(99:7)");
            // 热门推荐 小标签 16个中随机展示8个
            List.listDirection(Axis.Horizontal);
            // 热门推荐 小标签 16个中随机展示8个
            List.lanes(2);
            // 热门推荐 小标签 16个中随机展示8个
            List.padding({ left: 24, right: 24 });
            // 热门推荐 小标签 16个中随机展示8个
            List.width('100%');
            // 热门推荐 小标签 16个中随机展示8个
            List.height(74);
            if (!isInitialRender) {
                // 热门推荐 小标签 16个中随机展示8个
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("pages/SearchPage.ets(101:11)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item);
                            Text.debugLine("pages/SearchPage.ets(102:13)");
                            Text.height(32);
                            Text.padding(5);
                            Text.fontSize(16);
                            Text.textAlign(TextAlign.Center);
                            Text.borderRadius(12);
                            Text.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create(item);
                            Text.debugLine("pages/SearchPage.ets(102:13)");
                            Text.height(32);
                            Text.padding(5);
                            Text.fontSize(16);
                            Text.textAlign(TextAlign.Center);
                            Text.borderRadius(12);
                            Text.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.list_data, forEachItemGenFunction, (item) => item, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 热门推荐 小标签 16个中随机展示8个
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 推荐景区 文字
            Row.create();
            Row.debugLine("pages/SearchPage.ets(120:7)");
            // 推荐景区 文字
            Row.width('100%');
            // 推荐景区 文字
            Row.height(28);
            // 推荐景区 文字
            Row.margin({ left: 12, right: 12, top: 12 });
            // 推荐景区 文字
            Row.padding({ left: 24, right: 24 });
            // 推荐景区 文字
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                // 推荐景区 文字
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('景区推荐');
            Text.debugLine("pages/SearchPage.ets(121:9)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(20);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 推荐景区 文字
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 推荐景区卡片
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    __Common__.create();
                    __Common__.margin({ left: 22, right: 22 });
                    __Common__.onClick((e) => {
                        router.pushUrl({
                            url: 'pages/ScenicDetailPage'
                        });
                    });
                    if (!isInitialRender) {
                        __Common__.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new SmallScenicCard(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                __Common__.pop();
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2], forEachItemGenFunction, item => item, false, false);
            if (!isInitialRender) {
                // 推荐景区卡片
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 推荐景区卡片
        ForEach.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 热搜
            Row.create();
            Row.debugLine("pages/SearchPage.ets(143:7)");
            // 热搜
            Row.width('100%');
            // 热搜
            Row.height(28);
            // 热搜
            Row.margin({ left: 12, right: 12, top: 12 });
            // 热搜
            Row.padding({ left: 24, right: 24 });
            // 热搜
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                // 热搜
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('热搜');
            Text.debugLine("pages/SearchPage.ets(144:9)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(20);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 热搜
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // todo: 无法滚动
            // Scroll() {
            Row.create();
            Row.debugLine("pages/SearchPage.ets(156:7)");
            // todo: 无法滚动
            // Scroll() {
            Row.width('100%');
            // todo: 无法滚动
            // Scroll() {
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                // todo: 无法滚动
                // Scroll() {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/SearchPage.ets(157:9)");
            Column.margin({ left: 12, right: 12, top: 12 });
            Column.borderRadius(12);
            Column.border({ width: 1, radius: 5, color: Color.Orange });
            Column.width('80%');
            Column.alignItems(HorizontalAlign.Start);
            Column.padding({ left: 12 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item);
                    Text.debugLine("pages/SearchPage.ets(159:13)");
                    Text.padding(8);
                    Text.fontSize(24);
                    Text.height(36);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['江苏', '湖北', '福建', '江西', '湖南'], forEachItemGenFunction, item => item, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Column.pop();
        // todo: 无法滚动
        // Scroll() {
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new SearchPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=SearchPage.js.map