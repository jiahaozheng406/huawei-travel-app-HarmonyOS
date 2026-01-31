import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
import PostCard from '@bundle:org.malred.TravelApplication/entry/ets/component/PostItem';
import CommunityViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/CommunityViewModel';
export default class Find extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.main_scroller = new Scroller();
        this.controller = new VideoController();
        this.previewUris = { "id": 16777307, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" };
        this.innerResource = { "id": 0, "type": 30000, params: ['ly.mp4'], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" };
        this.search_controller = new TextInputController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.main_scroller !== undefined) {
            this.main_scroller = params.main_scroller;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.previewUris !== undefined) {
            this.previewUris = params.previewUris;
        }
        if (params.innerResource !== undefined) {
            this.innerResource = params.innerResource;
        }
        if (params.search_controller !== undefined) {
            this.search_controller = params.search_controller;
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
            Scroll.create(this.main_scroller);
            Scroll.debugLine("view/community/find.ets(18:5)");
            Scroll.height('100%');
            Scroll.align(Alignment.Top);
            Scroll.height(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 24 });
            Column.debugLine("view/community/find.ets(19:7)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索框
            Row.create({ space: 16 });
            Row.debugLine("view/community/find.ets(21:9)");
            // 搜索框
            Row.width(CommonConstants.FULL_PARENT);
            // 搜索框
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                // 搜索框
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 搜索框
            TextInput.create({
                placeholder: '搜索攻略...',
                controller: this.search_controller
            });
            TextInput.debugLine("view/community/find.ets(23:11)");
            // 搜索框
            TextInput.width(240);
            if (!isInitialRender) {
                // 搜索框
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('搜索');
            Button.debugLine("view/community/find.ets(29:11)");
            Button.borderRadius(8);
            Button.type(ButtonType.Normal);
            Button.height(32);
            Button.fontColor(Color.Black);
            Button.backgroundColor({ "id": 16777422, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        // 搜索框
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 今日推荐 视频
            Column.create({ space: 12 });
            Column.debugLine("view/community/find.ets(42:9)");
            // 今日推荐 视频
            Column.borderRadius(12);
            // 今日推荐 视频
            Column.width('100%');
            // 今日推荐 视频
            Column.height('36%');
            // 今日推荐 视频
            Column.clip(true);
            if (!isInitialRender) {
                // 今日推荐 视频
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/community/find.ets(43:11)");
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('今日推荐');
            Text.debugLine("view/community/find.ets(44:13)");
            Text.fontSize(20);
            Text.fontWeight(600);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('圆梦西湖畔, 4天3晚详细攻略');
            Text.debugLine("view/community/find.ets(47:13)");
            Text.fontSize(14);
            Text.fontColor({ "id": 16777424, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Video.create({
                src: this.innerResource,
                previewUri: this.previewUris,
                controller: this.controller
            });
            Video.debugLine("view/community/find.ets(54:11)");
            Video.onFinish(() => {
                // 重新播放
                this.controller.start();
            });
            Video.autoPlay(true);
            Video.muted(true);
            Video.borderRadius(12);
            Video.controls(false);
            if (!isInitialRender) {
                Video.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 今日推荐 视频
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 热力图
            // Image($r('app.media.rlt'))
            //   .width('100%')
            //   .height('45%')
            //   .borderRadius(12)
            //   .objectFit(ImageFit.Cover)
            // 用户帖子
            Column.create({ space: 12 });
            Column.debugLine("view/community/find.ets(81:9)");
            if (!isInitialRender) {
                // 热力图
                // Image($r('app.media.rlt'))
                //   .width('100%')
                //   .height('45%')
                //   .borderRadius(12)
                //   .objectFit(ImageFit.Cover)
                // 用户帖子
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
                    __Common__.create();
                    __Common__.width('100%');
                    if (!isInitialRender) {
                        __Common__.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new PostCard(this, {
                                avator: item.user.avator,
                                uname: item.user.name,
                                title: item.title,
                                pub_date: item.pub_date,
                                desc: item.desc,
                                img: item.imgs[0]
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
                __Common__.pop();
            };
            this.forEachUpdateFunction(elmtId, CommunityViewModel.getPostEntities(), forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 热力图
        // Image($r('app.media.rlt'))
        //   .width('100%')
        //   .height('45%')
        //   .borderRadius(12)
        //   .objectFit(ImageFit.Cover)
        // 用户帖子
        Column.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=find.js.map