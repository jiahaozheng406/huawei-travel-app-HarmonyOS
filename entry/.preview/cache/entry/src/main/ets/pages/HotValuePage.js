// 热力图
import router from '@ohos:router';
export default class HotValuePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__widthSize = new ObservedPropertySimplePU(10, this, "widthSize");
        this.__heightSize = new ObservedPropertySimplePU(30
        // @State rotateAngle: number = 0
        // private flag: boolean = false
        , this, "heightSize");
        this.__value = new ObservedPropertySimplePU(0 // 热力值
        , this, "value");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.widthSize !== undefined) {
            this.widthSize = params.widthSize;
        }
        if (params.heightSize !== undefined) {
            this.heightSize = params.heightSize;
        }
        if (params.value !== undefined) {
            this.value = params.value;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__widthSize.purgeDependencyOnElmtId(rmElmtId);
        this.__heightSize.purgeDependencyOnElmtId(rmElmtId);
        this.__value.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__widthSize.aboutToBeDeleted();
        this.__heightSize.aboutToBeDeleted();
        this.__value.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get widthSize() {
        return this.__widthSize.get();
    }
    set widthSize(newValue) {
        this.__widthSize.set(newValue);
    }
    get heightSize() {
        return this.__heightSize.get();
    }
    set heightSize(newValue) {
        this.__heightSize.set(newValue);
    }
    get value() {
        return this.__value.get();
    }
    set value(newValue) {
        this.__value.set(newValue);
    }
    onPageShow() {
        setTimeout(() => {
            this.value += 20;
        }, 800);
        setTimeout(() => {
            this.value += 20;
        }, 900);
        setTimeout(() => {
            this.value += 20;
        }, 1000);
        setTimeout(() => {
            this.value += 20;
        }, 1100);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("pages/HotValuePage.ets(29:5)");
            Scroll.width('100%');
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.height('100%');
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 18 });
            Column.debugLine("pages/HotValuePage.ets(30:7)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777296, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("pages/HotValuePage.ets(31:9)");
            Image.width("100%");
            Image.height("40%");
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // .margin({ bottom: 24 })
            // 父容器设置direction为Direction.Ltr，子元素从左到右排列
            // 进度条
            Text.create('当前热力值');
            Text.debugLine("pages/HotValuePage.ets(38:9)");
            // .margin({ bottom: 24 })
            // 父容器设置direction为Direction.Ltr，子元素从左到右排列
            // 进度条
            Text.fontSize(12);
            // .margin({ bottom: 24 })
            // 父容器设置direction为Direction.Ltr，子元素从左到右排列
            // 进度条
            Text.fontColor(0xCCCCCC);
            // .margin({ bottom: 24 })
            // 父容器设置direction为Direction.Ltr，子元素从左到右排列
            // 进度条
            Text.width('90%');
            if (!isInitialRender) {
                // .margin({ bottom: 24 })
                // 父容器设置direction为Direction.Ltr，子元素从左到右排列
                // 进度条
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // .margin({ bottom: 24 })
        // 父容器设置direction为Direction.Ltr，子元素从左到右排列
        // 进度条
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Progress.create({
                // value 应该是初始值的意思
                value: 0, total: 100, type: ProgressType.Linear
            });
            Progress.debugLine("pages/HotValuePage.ets(39:9)");
            Context.animation(null);
            Progress.value(this.value);
            Progress.width('90%');
            Progress.height(24);
            Progress.color(Color.Orange);
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("目前人数较少景区");
            Text.debugLine("pages/HotValuePage.ets(54:9)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 5 });
            Row.debugLine("pages/HotValuePage.ets(55:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/HotValuePage.ets(56:11)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('芙蓉隧道');
            Text.debugLine("pages/HotValuePage.ets(57:13)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777436, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("pages/HotValuePage.ets(60:11)");
            Image.height(200);
            Image.width('100%');
            Image.padding(5);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('位于厦大内部，芙蓉餐厅旁，是中国最文艺、最长的涂鸦隧道，也是厦门大学主要景点之一。该隧道于2005年开始施工，西起厦大校区芙蓉园学生食堂，沿途穿越狮山，东至厦大学生公寓门口，全长1.01公里，主要供行人及非机动车辆通行。建成之后，隧道内逐渐多了很多涂鸦，这些漂亮的涂鸦是厦大学子一笔一笔描绘而成。');
            Text.debugLine("pages/HotValuePage.ets(62:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(65:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/HotValuePage.ets(66:11)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('情人谷');
            Text.debugLine("pages/HotValuePage.ets(67:13)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(71:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("pages/HotValuePage.ets(72:11)");
            Image.height(200);
            Image.width('100%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(76:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('厦大情人谷原来不叫情人谷。它是厦大北面五老峰地势造就的一个山谷。山谷里有个人工水库。在厦门还未引进九龙江水之前，全厦大的用水几乎都靠这个水库供应。水库有五老峰的秀峰灵石为屏，奇花异草为锦，山光水色就美得恍若仙境。');
            Text.debugLine("pages/HotValuePage.ets(77:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(81:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/HotValuePage.ets(82:11)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('颂恩楼群');
            Text.debugLine("pages/HotValuePage.ets(83:13)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(87:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777285, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("pages/HotValuePage.ets(88:11)");
            Image.height(200);
            Image.width('100%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(91:9)");
            Row.width('90%');
            Row.direction(Direction.Ltr);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('厦门大学颂恩楼群是目前厦大的最气派的建筑群，其主楼是印尼校友死后由其妻子捐建，也没有冠名，由于是天主教友，所以取其颂主恩德之义。');
            Text.debugLine("pages/HotValuePage.ets(92:11)");
            Text.height(50);
            Text.width('100%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/HotValuePage.ets(99:9)");
            Row.width('90%');
            Row.direction(Direction.Ltr);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('');
            Text.debugLine("pages/HotValuePage.ets(100:11)");
            Text.height(50);
            Text.width('55%');
            Text.fontSize(16);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("返回", { type: ButtonType.Capsule, stateEffect: true });
            Button.debugLine("pages/HotValuePage.ets(105:9)");
            Button.onClick((e) => {
                router.replaceUrl({ url: '/pages/ScenicPage' });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new HotValuePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=HotValuePage.js.map