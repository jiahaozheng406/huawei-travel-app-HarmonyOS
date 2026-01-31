import router from '@ohos:router';
import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
import ScenicViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/ScenicViewModel';
export default class ScenicPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__tip = new ObservedPropertySimplePU('收起'
        // 是否展开 -> 不同路线规划算法
        , this, "tip");
        this.__extended = new ObservedPropertySimplePU(true
        // 当前选择的路线算法
        , this, "extended");
        this.__cur_idx = new ObservedPropertySimplePU(0, this, "cur_idx");
        this.search_controller = new TextInputController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tip !== undefined) {
            this.tip = params.tip;
        }
        if (params.extended !== undefined) {
            this.extended = params.extended;
        }
        if (params.cur_idx !== undefined) {
            this.cur_idx = params.cur_idx;
        }
        if (params.search_controller !== undefined) {
            this.search_controller = params.search_controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tip.purgeDependencyOnElmtId(rmElmtId);
        this.__extended.purgeDependencyOnElmtId(rmElmtId);
        this.__cur_idx.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tip.aboutToBeDeleted();
        this.__extended.aboutToBeDeleted();
        this.__cur_idx.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get tip() {
        return this.__tip.get();
    }
    set tip(newValue) {
        this.__tip.set(newValue);
    }
    get extended() {
        return this.__extended.get();
    }
    set extended(newValue) {
        this.__extended.set(newValue);
    }
    get cur_idx() {
        return this.__cur_idx.get();
    }
    set cur_idx(newValue) {
        this.__cur_idx.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height("100%");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Column() {
            // Text("欢迎您来到美丽的厦门")
            //   .margin({ top: 20 })
            // }
            // .height(20)
            // .backgroundColor($r('app.color.primary_color'))
            Row.create({ space: 16 });
            // Column() {
            // Text("欢迎您来到美丽的厦门")
            //   .margin({ top: 20 })
            // }
            // .height(20)
            // .backgroundColor($r('app.color.primary_color'))
            Row.width(CommonConstants.FULL_PARENT);
            // Column() {
            // Text("欢迎您来到美丽的厦门")
            //   .margin({ top: 20 })
            // }
            // .height(20)
            // .backgroundColor($r('app.color.primary_color'))
            Row.margin({ top: 18, left: 20, right: 16 });
            // Column() {
            // Text("欢迎您来到美丽的厦门")
            //   .margin({ top: 20 })
            // }
            // .height(20)
            // .backgroundColor($r('app.color.primary_color'))
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                // Column() {
                // Text("欢迎您来到美丽的厦门")
                //   .margin({ top: 20 })
                // }
                // .height(20)
                // .backgroundColor($r('app.color.primary_color'))
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索框
            TextInput.create({
                placeholder: '搜索路线...',
                controller: this.search_controller
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
            Button.height(32);
            Button.borderRadius(8);
            Button.type(ButtonType.Normal);
            Button.fontColor(Color.Black);
            Button.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        // Column() {
        // Text("欢迎您来到美丽的厦门")
        //   .margin({ top: 20 })
        // }
        // .height(20)
        // .backgroundColor($r('app.color.primary_color'))
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777392, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.width("100%");
            Image.height("35%");
            Image.borderRadius(10);
            Image.padding(5);
            Image.margin(10);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 旅游指南
            Row.create();
            // 旅游指南
            Row.justifyContent(FlexAlign.SpaceBetween);
            // 旅游指南
            Row.margin({ bottom: 6, left: 12, right: 16 });
            if (!isInitialRender) {
                // 旅游指南
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('旅游指南');
            Text.height(40);
            Text.width('90%');
            Text.fontSize({ "id": 16777349, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777298, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.tip);
            Text.fontSize(20);
            Text.onClick((e) => {
                this.extended = !this.extended;
                this.extended ?
                    this.tip = '收起' :
                    this.tip = '展开';
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 旅游指南
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 4个小tag
            Row.create();
            Context.animation({
                duration: 500,
                curve: Curve.ExtremeDeceleration
            });
            // 4个小tag
            Row.justifyContent(FlexAlign.SpaceAround);
            // 4个小tag
            Row.width('100%');
            // 4个小tag
            Row.height(40);
            // 4个小tag
            Row.margin({ bottom: 4 });
            Context.animation(null);
            // 4个小tag
            Row.visibility(this.extended ? Visibility.Visible : Visibility.None);
            if (!isInitialRender) {
                // 4个小tag
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('时间最短');
            Text.backgroundColor(this.cur_idx == 0 ? { "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777296, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.padding(8);
            Text.borderRadius(8);
            Text.onClick((e) => {
                this.cur_idx = 0;
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('路径最短');
            Text.backgroundColor(this.cur_idx == 1 ? { "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777296, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.padding(8);
            Text.borderRadius(8);
            Text.onClick((e) => {
                this.cur_idx = 1;
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('最多人走');
            Text.backgroundColor(this.cur_idx == 2 ? { "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777296, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.padding(8);
            Text.borderRadius(8);
            Text.onClick((e) => {
                this.cur_idx = 2;
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('智能推荐');
            Text.backgroundColor(this.cur_idx == 3 ? { "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777296, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.padding(8);
            Text.borderRadius(8);
            Text.onClick((e) => {
                this.cur_idx = 3;
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 4个小tag
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 路径规划的结果
            // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
            Column.create();
            // 路径规划的结果
            // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
            Column.margin({ top: 5 });
            // 路径规划的结果
            // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
            Column.padding({ right: 15, bottom: 20, left: -10, top: 10 });
            // 路径规划的结果
            // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
            Column.borderRadius(12);
            // 路径规划的结果
            // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                // 路径规划的结果
                // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
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
                    Row.create();
                    Row.margin({ top: 10, left: 25 });
                    Row.border({ width: 1, radius: 5, color: "grey" });
                    Row.backgroundColor('#FBFCFE');
                    Row.justifyContent(FlexAlign.SpaceBetween);
                    Row.width('85%');
                    Row.onClick((e) => {
                        router.pushUrl({
                            url: "pages/HotValuePage"
                        });
                    });
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Row.create({ space: 8 });
                    if (!isInitialRender) {
                        Row.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item.icon);
                    Image.width("10%");
                    Image.margin({ right: 10, left: 5, top: 8, bottom: 8 });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.name);
                    Text.fontSize(20);
                    Text.fontWeight(FontWeight.Medium);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Row.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777394, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                    Image.width("10%");
                    Image.margin({ right: 10, top: 8, bottom: 8 });
                    Image.onClick(() => {
                        router.pushUrl({ url: 'pages/relitu', });
                    });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, ScenicViewModel.getLocations(this.cur_idx), forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 路径规划的结果
        // 设置state -> 对应当前算法 -> 传给viewModel定义的 方法xxx(算法) 动态获取数据
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ScenicPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ScenicPage.js.map