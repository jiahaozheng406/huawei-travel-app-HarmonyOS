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
            Column.debugLine("pages/MainPage.ets(20:5)");
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777363, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
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
            Image.debugLine("pages/MainPage.ets(21:7)");
            Image.width({ "id": 16777365, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height({ "id": 16777365, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/MainPage.ets(24:7)");
            Text.margin({ top: { "id": 16777366, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777371, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777419, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777418, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
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
            Tabs.debugLine("pages/MainPage.ets(39:5)");
            Tabs.scrollable(false);
            Tabs.width(CommonConstants.FULL_PARENT);
            Tabs.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Tabs.barHeight({ "id": 16777363, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
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
            TabContent.padding({ left: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX, { "id": 16777313, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777283, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPage.ets(45:7)");
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
                            ViewPU.create(new CommunityPage(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '社区', 1, { "id": 16777318, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777294, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPage.ets(56:7)");
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
                            ViewPU.create(new Scenic(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '规划', 2, { "id": 16777219, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777323, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPage.ets(64:7)");
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
            TabContent.padding({ left: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, right: { "id": 16777367, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777423, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, '我的', 3, { "id": 16777437, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { "id": 16777297, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPage.ets(72:7)");
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