export default class SearchResultCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
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
            Row.create();
            Row.debugLine("component/SearchResultCard.ets(6:5)");
            Row.padding({ top: 5, bottom: 5, right: 8 });
            Row.margin({ top: 16 });
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.alignItems(VerticalAlign.Center);
            Row.height(160);
            Row.width("100%");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777401, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("component/SearchResultCard.ets(7:7)");
            Image.width(110);
            Image.height(160);
            Image.borderRadius(8);
            Image.margin({ left: 6, right: 6 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 12 });
            Column.debugLine("component/SearchResultCard.ets(13:7)");
            Column.width('100%');
            Column.justifyContent(FlexAlign.Center);
            Column.height(160);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 景点|酒店|旅游团 名称
            Row.create({ space: 5 });
            Row.debugLine("component/SearchResultCard.ets(15:9)");
            // 景点|酒店|旅游团 名称
            Row.padding({ top: 5 });
            // 景点|酒店|旅游团 名称
            Row.width('100%');
            // 景点|酒店|旅游团 名称
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                // 景点|酒店|旅游团 名称
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('南山文化旅游区');
            Text.debugLine("component/SearchResultCard.ets(16:11)");
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Medium);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('5A');
            Text.debugLine("component/SearchResultCard.ets(19:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 景点|酒店|旅游团 名称
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 评分 + 地点
            Row.create({ space: 5 });
            Row.debugLine("component/SearchResultCard.ets(26:9)");
            // 评分 + 地点
            Row.width('100%');
            // 评分 + 地点
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                // 评分 + 地点
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('4.9');
            Text.debugLine("component/SearchResultCard.ets(27:11)");
            Text.padding({ left: 5, right: 5, bottom: 3, top: 3 });
            Text.borderRadius(18);
            Text.fontColor(Color.White);
            Text.backgroundColor(Color.Orange);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('1000+点评');
            Text.debugLine("component/SearchResultCard.ets(32:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('三亚 崖州');
            Text.debugLine("component/SearchResultCard.ets(33:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 评分 + 地点
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 介绍|推荐语
            Row.create();
            Row.debugLine("component/SearchResultCard.ets(39:9)");
            // 介绍|推荐语
            Row.width('100%');
            // 介绍|推荐语
            Row.margin({ bottom: 6 });
            // 介绍|推荐语
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                // 介绍|推荐语
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('"素斋自助菜肴, 观盛唐风格寺院"');
            Text.debugLine("component/SearchResultCard.ets(40:11)");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 介绍|推荐语
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 价格
            Row.create();
            Row.debugLine("component/SearchResultCard.ets(47:9)");
            // 价格
            Row.width('65%');
            // 价格
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                // 价格
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('¥240起');
            Text.debugLine("component/SearchResultCard.ets(48:11)");
            Text.height(50);
            Text.fontSize(24);
            Text.fontColor(Color.Orange);
            Text.align(Alignment.Center);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 价格
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    previewComponent();
}
else {
    storePreviewComponents(1, "SearchResultCard", new SearchResultCard(undefined, {}));
}
//# sourceMappingURL=SearchResultCard.js.map