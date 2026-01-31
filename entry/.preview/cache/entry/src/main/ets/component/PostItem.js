export default class PostCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.show_btn = true;
        this.avator = { "id": 16777435, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" };
        this.img = { "id": 16777435, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" };
        this.title = 'title';
        this.desc = 'desc';
        this.uname = 'user1';
        this.pub_date = '2022-01-01';
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.show_btn !== undefined) {
            this.show_btn = params.show_btn;
        }
        if (params.avator !== undefined) {
            this.avator = params.avator;
        }
        if (params.img !== undefined) {
            this.img = params.img;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.desc !== undefined) {
            this.desc = params.desc;
        }
        if (params.uname !== undefined) {
            this.uname = params.uname;
        }
        if (params.pub_date !== undefined) {
            this.pub_date = params.pub_date;
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
            Column.create({ space: 10 });
            Column.debugLine("component/PostItem.ets(21:5)");
            Column.clip(true);
            Column.width('100%');
            Column.borderRadius(14);
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 头像|时间|用户名|关注按钮
            Row.create({ space: 12 });
            Row.debugLine("component/PostItem.ets(23:7)");
            // 头像|时间|用户名|关注按钮
            Row.alignItems(VerticalAlign.Center);
            // 头像|时间|用户名|关注按钮
            Row.justifyContent(FlexAlign.SpaceBetween);
            // 头像|时间|用户名|关注按钮
            Row.width('100%');
            // 头像|时间|用户名|关注按钮
            Row.padding({ left: 12, right: 12 });
            if (!isInitialRender) {
                // 头像|时间|用户名|关注按钮
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 8 });
            Row.debugLine("component/PostItem.ets(24:9)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.avator);
            Image.debugLine("component/PostItem.ets(25:11)");
            Image.clip(new Circle({ width: '48vp', height: '48vp' }));
            Image.width(48);
            Image.height(48);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // .objectFit(ImageFit.Cover)
            Column.create({ space: 6 });
            Column.debugLine("component/PostItem.ets(31:11)");
            // .objectFit(ImageFit.Cover)
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                // .objectFit(ImageFit.Cover)
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.uname);
            Text.debugLine("component/PostItem.ets(32:13)");
            Text.fontSize(28);
            Text.fontWeight(600);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.pub_date);
            Text.debugLine("component/PostItem.ets(35:13)");
            Text.fontSize(16);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // .objectFit(ImageFit.Cover)
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('+关注');
            Button.debugLine("component/PostItem.ets(42:9)");
            Button.height(30);
            Button.width(64);
            Button.borderRadius(8);
            Button.fontColor(Color.Black);
            Button.backgroundColor({ "id": 16777422, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.type(ButtonType.Normal);
            Button.visibility(this.show_btn ? Visibility.Visible : Visibility.None);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        // 头像|时间|用户名|关注按钮
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 标题|描述
            Row.create();
            Row.debugLine("component/PostItem.ets(58:7)");
            // 标题|描述
            Row.height(40);
            // 标题|描述
            Row.width('100%');
            // 标题|描述
            Row.margin({ bottom: 4 });
            // 标题|描述
            Row.alignItems(VerticalAlign.Top);
            if (!isInitialRender) {
                // 标题|描述
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 6 });
            Column.debugLine("component/PostItem.ets(59:9)");
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.debugLine("component/PostItem.ets(60:11)");
            Text.fontSize(24);
            Text.fontWeight(600);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.desc);
            Text.debugLine("component/PostItem.ets(63:11)");
            Text.fontSize(16);
            Text.fontColor(Color.Gray);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        // 标题|描述
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 图
            Image.create(this.img);
            Image.debugLine("component/PostItem.ets(76:7)");
            // 图
            Image.objectFit(ImageFit.Cover);
            // 图
            Image.width('100%');
            // 图
            Image.borderRadius({ bottomLeft: 14, bottomRight: 14 });
            // 图
            Image.height(160);
            if (!isInitialRender) {
                // 图
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=PostItem.js.map