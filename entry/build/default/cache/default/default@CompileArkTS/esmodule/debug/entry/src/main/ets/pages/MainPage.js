import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
import Home from '@bundle:org.malred.TravelApplication/entry/ets/view/Home';
import Setting from '@bundle:org.malred.TravelApplication/entry/ets/view/Setting';
import CommunityPage from '@bundle:org.malred.TravelApplication/entry/ets/view/Community';
import Scenic from '@bundle:org.malred.TravelApplication/entry/ets/pages/ScenicPage';
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.HOME_TAB_INDEX, this, "currentIndex");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    TabBuilder(title, index, selectedImg, normalImg, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777335, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_PARENT);
            Column.onClick(() => {
                this.currentIndex = index;
                this.tabsController.changeIndex(this.currentIndex);
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.width({ "id": 16777337, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height({ "id": 16777337, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.margin({ top: { "id": 16777338, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777343, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777287, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777286, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({
                // 底部导航
                barPosition: BarPosition.End,
                controller: this.tabsController
            });
            Tabs.scrollable(false);
            Tabs.width(CommonConstants.FULL_PARENT);
            Tabs.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Tabs.barHeight({ "id": 16777335, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Tabs.barMode(BarMode.Fixed);
            Tabs.onChange((index) => {
                this.currentIndex = index;
            });
            if (!isInitialRender) {
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
                            ViewPU.create(new Home(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX, { "id": 16777420, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777419, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            if (!isInitialRender) {
                // 导航内容
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
                            ViewPU.create(new Scenic(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '规划', 1, { "id": 16777434, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777435, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
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
                            ViewPU.create(new CommunityPage(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '社区', 2, { "id": 16777454, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777453, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
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
                            ViewPU.create(new Setting(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777339, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '我的', 3, { "id": 16777441, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777440, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MainPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MainPage.js.map