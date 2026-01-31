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
        this.__like = new ObservedPropertySimplePU(false, this, "like");
        this.__unlike = new ObservedPropertySimplePU(false, this, "unlike");
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
        if (params.like !== undefined) {
            this.like = params.like;
        }
        if (params.unlike !== undefined) {
            this.unlike = params.unlike;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__widthSize.purgeDependencyOnElmtId(rmElmtId);
        this.__heightSize.purgeDependencyOnElmtId(rmElmtId);
        this.__value.purgeDependencyOnElmtId(rmElmtId);
        this.__like.purgeDependencyOnElmtId(rmElmtId);
        this.__unlike.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__widthSize.aboutToBeDeleted();
        this.__heightSize.aboutToBeDeleted();
        this.__value.aboutToBeDeleted();
        this.__like.aboutToBeDeleted();
        this.__unlike.aboutToBeDeleted();
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
    get like() {
        return this.__like.get();
    }
    set like(newValue) {
        this.__like.set(newValue);
    }
    get unlike() {
        return this.__unlike.get();
    }
    set unlike(newValue) {
        this.__unlike.set(newValue);
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
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777391, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
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
            // 信息
            Row.create();
            // 信息
            Row.justifyContent(FlexAlign.SpaceBetween);
            // 信息
            Row.width('100%');
            // 信息
            Row.padding({ left: 16, right: 16, bottom: 12 });
            if (!isInitialRender) {
                // 信息
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 5 });
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 8 });
            Row.alignItems(VerticalAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('厦门园林博览苑');
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('4A');
            Text.backgroundColor(Color.Grey);
            Text.fontColor(Color.White);
            Text.padding(5);
            Text.borderRadius(6);
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('官方售票');
            Text.backgroundColor(Color.Orange);
            Text.borderRadius(6);
            Text.height(26);
            Text.padding(5);
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 5 });
            Row.alignItems(VerticalAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('4.9分');
            Text.fontColor(Color.Blue);
            Text.fontSize(18);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('1.3万人想去');
            Text.backgroundColor(Color.Orange);
            Text.fontColor(Color.White);
            Text.padding(5);
            Text.borderRadius(6);
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 5 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.like ? { "id": 16777428, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777427, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.width(36);
            Image.height(36);
            Image.onClick((e) => {
                this.like = !this.like;
                // 再次点击like，切换为unlike
                if (!this.unlike && !this.like) {
                    this.unlike = true;
                }
                // unlike点亮，再点击like，则切换为like
                if (this.unlike && this.like) {
                    this.unlike = false;
                }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.unlike ? { "id": 16777466, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } : { "id": 16777465, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.width(36);
            Image.height(36);
            Image.onClick((e) => {
                this.unlike = !this.unlike;
                // 再次点击unlike，切换到like
                if (!this.unlike && !this.like) {
                    this.like = true;
                }
                // like点亮，再点击unlike，则切换为unlike
                if (this.unlike && this.like) {
                    this.like = false;
                }
                if (this.unlike) {
                    AlertDialog.show({
                        title: '反馈',
                        message: '是否填写反馈信息',
                        autoCancel: true,
                        alignment: DialogAlignment.Bottom,
                        gridCount: 4,
                        offset: { dx: 0, dy: -20 },
                        primaryButton: {
                            value: '以后再说',
                            action: () => {
                                console.info('Callback when the first button is clicked');
                            }
                        },
                        secondaryButton: {
                            value: '填写反馈',
                            action: () => {
                                router.pushUrl({ url: 'pages/FeedBackPage' });
                                console.info('Callback when the second button is clicked');
                            }
                        },
                        cancel: () => {
                            console.info('Closed callbacks');
                        }
                    });
                }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        // 信息
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('50%');
            Row.borderRadius(6);
            Row.backgroundColor(Color.Orange);
            Row.alignSelf(ItemAlign.Start);
            Row.padding(5);
            Row.margin({ left: 16 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("目前人数较少景区");
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 5 });
            Row.margin(12);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('芙蓉隧道');
            Text.height(32);
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777390, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height(200);
            Image.width('100%');
            Image.padding(5);
            Image.borderRadius(4);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('位于厦大内部，芙蓉餐厅旁，是中国最文艺、最长的涂鸦隧道，也是厦门大学主要景点之一。该隧道于2005年开始施工，西起厦大校区芙蓉园学生食堂，沿途穿越狮山，东至厦大学生公寓门口，全长1.01公里，主要供行人及非机动车辆通行。建成之后，隧道内逐渐多了很多涂鸦，这些漂亮的涂鸦是厦大学子一笔一笔描绘而成。');
            Text.width('100%');
            Text.padding(4);
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
            Row.margin(12);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('情人谷');
            Text.height(32);
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777393, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height(200);
            Image.width('100%');
            Image.borderRadius(4);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('厦大情人谷原来不叫情人谷。它是厦大北面五老峰地势造就的一个山谷。山谷里有个人工水库。在厦门还未引进九龙江水之前，全厦大的用水几乎都靠这个水库供应。水库有五老峰的秀峰灵石为屏，奇花异草为锦，山光水色就美得恍若仙境。');
            Text.width('100%');
            Text.padding(4);
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
            Row.margin(12);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('颂恩楼群');
            Text.height(32);
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777395, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height(200);
            Image.width('100%');
            Image.borderRadius(4);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('厦门大学颂恩楼群是目前厦大的最气派的建筑群，其主楼是印尼校友死后由其妻子捐建，也没有冠名，由于是天主教友，所以取其颂主恩德之义。');
            Text.width('100%');
            Text.padding(4);
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
            Button.createWithLabel("返回");
            Button.onClick((e) => {
                router.replaceUrl({ url: 'pages/ScenicPage' });
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