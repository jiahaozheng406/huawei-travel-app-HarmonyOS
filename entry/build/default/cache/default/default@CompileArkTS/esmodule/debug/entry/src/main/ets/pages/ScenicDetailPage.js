// 景区详情
import TicketCard from '@bundle:org.malred.TravelApplication/entry/ets/component/TicketCard';
export default class ScenicDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.controller = new VideoController();
        this.previewUris = { "id": 16777414, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" };
        this.innerResource = { "id": 0, "type": 30000, params: ['hai.mp4'], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" };
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.previewUris !== undefined) {
            this.previewUris = params.previewUris;
        }
        if (params.innerResource !== undefined) {
            this.innerResource = params.innerResource;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 12 });
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 轮播, 第一个是视频 后面是图
            Swiper.create();
            // 轮播, 第一个是视频 后面是图
            Swiper.onChange((e) => {
                // 切换轮播时停止播放
                this.controller.pause();
            });
            // 轮播, 第一个是视频 后面是图
            Swiper.width('100%');
            // 轮播, 第一个是视频 后面是图
            Swiper.height('30%');
            if (!isInitialRender) {
                // 轮播, 第一个是视频 后面是图
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Video.create({
                src: this.innerResource,
                previewUri: this.previewUris,
                controller: this.controller
            });
            Video.onFinish(() => {
                // 重新播放
                // this.controller.start()
            });
            Video.autoPlay(false);
            Video.muted(true);
            Video.borderRadius(12);
            Video.controls(true);
            if (!isInitialRender) {
                Video.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777415, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.objectFit(ImageFit.Cover);
            Image.width('100%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777416, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.objectFit(ImageFit.Cover);
            Image.width('100%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777417, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.objectFit(ImageFit.Cover);
            Image.width('100%');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 轮播, 第一个是视频 后面是图
        Swiper.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 信息卡片
            Column.create({ space: 8 });
            // 信息卡片
            Column.borderRadius(12);
            // 信息卡片
            Column.width('95%');
            // 信息卡片
            Column.height('12%');
            // 信息卡片
            Column.backgroundColor(Color.White);
            // 信息卡片
            Column.padding(8);
            // 信息卡片
            Column.alignItems(HorizontalAlign.Center);
            if (!isInitialRender) {
                // 信息卡片
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 名称 评分
            Row.create();
            // 名称 评分
            Row.width('100%');
            // 名称 评分
            Row.padding({ left: 5, right: 5 });
            // 名称 评分
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                // 名称 评分
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('鼓浪屿');
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('4.9分');
            Text.fontColor(Color.Orange);
            Text.fontWeight(FontWeight.Regular);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 名称 评分
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 标签
            Row.create({ space: 6 });
            // 标签
            Row.width('100%');
            // 标签
            Row.padding({ left: 5, right: 5 });
            // 标签
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                // 标签
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('海滨');
            Text.padding({ left: 8, right: 8, bottom: 5, top: 5 });
            Text.fontSize(12);
            Text.borderRadius(18);
            Text.fontColor(Color.White);
            Text.backgroundColor(Color.Blue);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('热门');
            Text.fontSize(12);
            Text.padding({ left: 8, right: 8, bottom: 5, top: 5 });
            Text.borderRadius(18);
            Text.fontColor(Color.White);
            Text.backgroundColor(Color.Red);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 标签
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 位置
            Row.create();
            // 位置
            Row.width('100%');
            // 位置
            Row.padding({ left: 5, right: 5 });
            // 位置
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                // 位置
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('厦门市思明区鼓浪屿');
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 位置
        Row.pop();
        // 信息卡片
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // tab 订票 评论 攻略
            Tabs.create();
            // tab 订票 评论 攻略
            Tabs.padding({ left: 8, right: 8 });
            // tab 订票 评论 攻略
            Tabs.width('100%');
            // tab 订票 评论 攻略
            Tabs.height('58%');
            // tab 订票 评论 攻略
            Tabs.vertical(false);
            // tab 订票 评论 攻略
            Tabs.backgroundColor(Color.White);
            // tab 订票 评论 攻略
            Tabs.borderRadius(12);
            if (!isInitialRender) {
                // tab 订票 评论 攻略
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Scroll.create();
                    Scroll.padding({ top: 12, bottom: 12 });
                    Scroll.width('100%');
                    if (!isInitialRender) {
                        Scroll.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create({ space: 8 });
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new TicketCard(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new TicketCard(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new TicketCard(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new TicketCard(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new TicketCard(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                Column.pop();
                Scroll.pop();
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.padding({ left: 8, right: 8 });
            TabContent.tabBar('订票');
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('111');
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.padding({ left: 8, right: 8 });
            TabContent.tabBar('评论');
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('111');
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            });
            TabContent.backgroundColor({ "id": 16777291, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            TabContent.padding({ left: 8, right: 8 });
            TabContent.tabBar('攻略');
            if (!isInitialRender) {
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        // tab 订票 评论 攻略
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ScenicDetailPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ScenicDetailPage.js.map