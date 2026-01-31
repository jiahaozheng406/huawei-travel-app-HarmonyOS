export default class BuyCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__start = new SynchedPropertySimpleTwoWayPU(params.start, this, "start");
        this.__end = new SynchedPropertySimpleTwoWayPU(params.end, this, "end");
        this.startDate = new Date("2010-1-1");
        this.endDate = new Date("2010-1-2");
        this.custom_click = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.startDate !== undefined) {
            this.startDate = params.startDate;
        }
        if (params.endDate !== undefined) {
            this.endDate = params.endDate;
        }
        if (params.custom_click !== undefined) {
            this.custom_click = params.custom_click;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__start.purgeDependencyOnElmtId(rmElmtId);
        this.__end.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__start.aboutToBeDeleted();
        this.__end.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get start() {
        return this.__start.get();
    }
    set start(newValue) {
        this.__start.set(newValue);
    }
    get end() {
        return this.__end.get();
    }
    set end(newValue) {
        this.__end.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 卡片占一行
            Column.create({ space: 12 });
            // 卡片占一行
            Column.backdropBlur(6);
            // 卡片占一行
            Column.shadow({
                radius: 3,
                color: Color.Grey,
                // color: $r('app.color.bg_shadow_color'),
                // x偏移 -> 右
                offsetX: 3,
                // y偏移 -> 下
                offsetY: 3
            });
            // 卡片占一行
            Column.alignItems(HorizontalAlign.Center);
            // 卡片占一行
            Column.width('70%');
            // 卡片占一行
            Column.height('23%');
            // 卡片占一行
            Column.margin({ top: 24, bottom: 24 });
            // 卡片占一行
            Column.padding({ top: 12, bottom: 12 });
            // 卡片占一行
            Column.borderRadius(12);
            // 卡片占一行
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                // 卡片占一行
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 输入位置
            Row.create();
            // 输入位置
            Row.width('90%');
            if (!isInitialRender) {
                // 输入位置
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: '地点' });
            TextInput.width('100%');
            TextInput.height(50);
            TextInput.backgroundColor(Color.White);
            TextInput.placeholderFont({ size: 20 });
            TextInput.fontSize(20);
            TextInput.borderRadius({ topLeft: 5, topRight: 5 });
            TextInput.padding({ left: 5, right: 5 });
            TextInput.style(TextInputStyle.Inline);
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 输入位置
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 时间选择器
            Row.create({ space: 24 });
            // 时间选择器
            Row.width('90%');
            // 时间选择器
            Row.padding({ left: 8 });
            // 时间选择器
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                // 时间选择器
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.start);
            Text.onClick(() => {
                DatePickerDialog.show({
                    start: new Date("2000-12-31"),
                    end: new Date("2100-12-31"),
                    selected: this.startDate,
                    onAccept: (value) => {
                        console.log('malred log!!!: ' + AppStorage.Get('start'));
                        console.log('malred log!!!: ' + new Date(AppStorage.Get('start')));
                        // 开始时间不能比系统当前时间早
                        if (new Date(value.year + "-" + (value.month + 1) + "-" + value.day).getTime()
                            < new Date(AppStorage.Get('start')).getTime()) {
                            AlertDialog.show({
                                title: '错误!',
                                message: '开始时间不能比系统当前时间早',
                                autoCancel: true,
                                alignment: DialogAlignment.Bottom,
                                offset: { dx: 0, dy: -20 },
                                gridCount: 3,
                                confirm: {
                                    value: '确定',
                                    action: () => {
                                        console.info('Button-clicking callback');
                                    }
                                },
                                cancel: () => {
                                    console.info('Closed callbacks');
                                }
                            });
                            return;
                        }
                        this.start = value.year + "-" + (value.month + 1) + "-" + value.day;
                        this.startDate = new Date(value.year + "-" + value.month + "-" + value.day);
                        // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                        // this.startDate.setFullYear(value.year, value.month, value.day)
                        console.info("DatePickerDialog:onAccept()" + JSON.stringify(value));
                    },
                    onCancel: () => {
                        console.info("DatePickerDialog:onCancel()");
                    },
                    onChange: (value) => {
                        console.info("DatePickerDialog:onChange()" + JSON.stringify(value));
                    }
                });
            });
            Text.fontWeight(600);
            Text.fontSize(18);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.end);
            Text.onClick(() => {
                DatePickerDialog.show({
                    start: this.startDate,
                    end: new Date("2100-12-31"),
                    selected: this.endDate,
                    onAccept: (value) => {
                        console.info("DatePickerDialog:onAccept()" + JSON.stringify(value));
                        // 结束时间不能比开始时间早
                        if (new Date(value.year + "-" + (value.month + 1) + "-" + value.day).getTime()
                            < this.startDate.getTime()) {
                            AlertDialog.show({
                                title: '错误!',
                                message: '结束时间不能比开始时间早',
                                autoCancel: true,
                                alignment: DialogAlignment.Bottom,
                                offset: { dx: 0, dy: -20 },
                                gridCount: 3,
                                confirm: {
                                    value: '确定',
                                    action: () => {
                                        console.info('Button-clicking callback');
                                    }
                                },
                                cancel: () => {
                                    console.info('Closed callbacks');
                                }
                            });
                            return;
                        }
                        this.end = value.year + "-" + (value.month + 1) + "-" + value.day;
                        // this.endDate = new Date(value.year + "-" + value.month + "-" + value.day)
                        // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                        // this.endDate.setFullYear(value.year, value.month, value.day)
                    },
                    onCancel: () => {
                        console.info("DatePickerDialog:onCancel()");
                    },
                    onChange: (value) => {
                        console.info("DatePickerDialog:onChange()" + JSON.stringify(value));
                    }
                });
            });
            Text.fontWeight(600);
            Text.fontSize(18);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 时间选择器
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 按钮
            Button.createWithLabel('搜索');
            // 按钮
            Button.shadow({
                radius: 3,
                // color: $r('app.color.bg_shadow_color'),
                color: Color.Grey,
                // x偏移 -> 右
                offsetX: 3,
                // y偏移 -> 下
                offsetY: 3
            });
            // 按钮
            Button.width('90%');
            // 按钮
            Button.onClick((e) => {
                // 调用父组件传来的用户定义的方法
                this.custom_click.call(this);
            });
            // 按钮
            Button.fontColor(Color.Black);
            // 按钮
            Button.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                // 按钮
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 按钮
        Button.pop();
        // 卡片占一行
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=BuyCard.js.map