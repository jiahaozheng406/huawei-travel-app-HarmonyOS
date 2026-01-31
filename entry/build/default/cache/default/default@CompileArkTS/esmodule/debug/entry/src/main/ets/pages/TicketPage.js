import router from '@ohos:router';
import Hotel from '@bundle:org.malred.TravelApplication/entry/ets/view/ticket/Hotel';
import Plane from '@bundle:org.malred.TravelApplication/entry/ets/view/ticket/Plane';
import Train from '@bundle:org.malred.TravelApplication/entry/ets/view/ticket/Train';
import Travel from '@bundle:org.malred.TravelApplication/entry/ets/view/ticket/Travel';
import TicketViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/TicketViewModel';
export default class TicketPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__current_index = new ObservedPropertySimplePU(0, this, "current_index");
        this.tabs_controller = new TabsController();
        this.swiper_controller = new SwiperController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.current_index !== undefined) {
            this.current_index = params.current_index;
        }
        if (params.tabs_controller !== undefined) {
            this.tabs_controller = params.tabs_controller;
        }
        if (params.swiper_controller !== undefined) {
            this.swiper_controller = params.swiper_controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__current_index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__current_index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get current_index() {
        return this.__current_index.get();
    }
    set current_index(newValue) {
        this.__current_index.set(newValue);
    }
    onPageShow() {
        // const params = router.getParams(); // 获取传递过来的参数对象
        this.current_index = router.getParams()['index'];
        this.tabs_controller.changeIndex(this.current_index);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 轮播
            Swiper.create(this.swiper_controller);
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
                    Image.height(160);
                    Image.width('100%');
                    Image.objectFit(ImageFit.Cover);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, TicketViewModel.getSwiper(), forEachItemGenFunction, (img) => JSON.stringify(img.id), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 轮播
        Swiper.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({
                // 底部导航
                barPosition: BarPosition.Start,
                controller: this.tabs_controller
            });
            Tabs.vertical(false);
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
                            ViewPU.create(new Hotel(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar('酒店');
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
                            ViewPU.create(new Plane(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar('飞机票');
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
                            ViewPU.create(new Train(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar('火车票');
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
                            ViewPU.create(new Travel(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.tabBar('旅游');
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new TicketPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=TicketPage.js.map