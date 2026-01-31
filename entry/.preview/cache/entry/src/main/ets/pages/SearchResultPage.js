import router from '@ohos:router';
import Location from '@bundle:org.malred.TravelApplication/entry/ets/view/search/Location';
export default class SearchResultPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.tabs_controller = new TabsController();
        this.search_controller = new TextInputController();
        this.__search_txt = new ObservedPropertySimplePU('', this, "search_txt");
        this.__current_index = new ObservedPropertySimplePU(0, this, "current_index");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tabs_controller !== undefined) {
            this.tabs_controller = params.tabs_controller;
        }
        if (params.search_controller !== undefined) {
            this.search_controller = params.search_controller;
        }
        if (params.search_txt !== undefined) {
            this.search_txt = params.search_txt;
        }
        if (params.current_index !== undefined) {
            this.current_index = params.current_index;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__search_txt.purgeDependencyOnElmtId(rmElmtId);
        this.__current_index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__search_txt.aboutToBeDeleted();
        this.__current_index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get search_txt() {
        return this.__search_txt.get();
    }
    set search_txt(newValue) {
        this.__search_txt.set(newValue);
    }
    get current_index() {
        return this.__current_index.get();
    }
    set current_index(newValue) {
        this.__current_index.set(newValue);
    }
    TabBuilder(title, index, selectedImg, normalImg, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/SearchResultPage.ets(15:5)");
            Row.margin({ left: 8, right: 8 });
            Row.justifyContent(FlexAlign.Center);
            Row.height({ "id": 16777363, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Row.width(80);
            Row.onClick(() => {
                this.current_index = index;
                this.tabs_controller.changeIndex(this.current_index);
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.current_index === index ? selectedImg : normalImg);
            Image.debugLine("pages/SearchResultPage.ets(16:7)");
            Image.width(32);
            Image.height(32);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/SearchResultPage.ets(19:7)");
            Text.margin({ top: 4 });
            Text.fontSize(16);
            Text.fontColor(this.current_index === index ? { "id": 16777429, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777418, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    onPageShow() {
        // 从买票搜索跳转过来
        this.current_index = router.getParams()['index'];
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/SearchResultPage.ets(43:5)");
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 16 });
            Row.debugLine("pages/SearchResultPage.ets(44:7)");
            Row.width('100%');
            Row.margin({ top: 20, left: 20, right: 20, bottom: 12 });
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
                controller: this.search_controller,
            });
            TextInput.debugLine("pages/SearchResultPage.ets(46:9)");
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
            Button.debugLine("pages/SearchResultPage.ets(55:9)");
            Button.height(32);
            Button.borderRadius(8);
            Button.type(ButtonType.Normal);
            Button.fontColor(Color.Black);
            Button.backgroundColor({ "id": 16777422, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.onClick((e) => {
                router.replaceUrl({
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
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索结果
            Tabs.create({
                // 底部导航
                barPosition: BarPosition.Start,
                controller: this.tabs_controller
            });
            Tabs.debugLine("pages/SearchResultPage.ets(77:7)");
            // 搜索结果
            Tabs.scrollable(false);
            // 搜索结果
            Tabs.barMode(BarMode.Scrollable);
            // 搜索结果
            Tabs.barWidth('100%');
            // 搜索结果
            Tabs.barHeight(56);
            if (!isInitialRender) {
                // 搜索结果
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new Location(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: 6, right: 6 });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '景点', 0, { "id": 16777326, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777320, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/SearchResultPage.ets(82:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new Location(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: 6, right: 6 });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '酒店', 1, { "id": 16777326, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777320, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/SearchResultPage.ets(91:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new Location(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: 6, right: 6 });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '旅游', 2, { "id": 16777326, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777320, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/SearchResultPage.ets(100:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new Location(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: 6, right: 6 });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '攻略', 3, { "id": 16777326, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777320, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/SearchResultPage.ets(109:9)");
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        // 搜索结果
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new SearchResultPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=SearchResultPage.js.map