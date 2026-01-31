export default class TicketCard extends ViewPU {
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
            Column.create({ space: 8 });
            Column.debugLine("component/TicketCard.ets(5:5)");
            Column.backgroundColor(Color.White);
            Column.borderRadius(12);
            Column.padding({ top: 8, right: 12, left: 12 });
            Column.width('90%');
            Column.height(160);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 8 });
            Column.debugLine("component/TicketCard.ets(6:7)");
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('大门票');
            Text.debugLine("component/TicketCard.ets(7:9)");
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
            Text.create('全网身份证限购一张');
            Text.debugLine("component/TicketCard.ets(10:9)");
            Text.fontColor(Color.Green);
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('成人票');
            Text.debugLine("component/TicketCard.ets(13:9)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(16);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 3 });
            Row.debugLine("component/TicketCard.ets(21:7)");
            Row.width('100%');
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('可订今日');
            Text.debugLine("component/TicketCard.ets(22:9)");
            Text.fontSize(12);
            Text.fontColor(Color.Orange);
            Text.border({ width: 1, radius: 3, color: Color.Orange });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('可订今日');
            Text.debugLine("component/TicketCard.ets(26:9)");
            Text.fontSize(12);
            Text.fontColor(Color.Orange);
            Text.border({ width: 1, radius: 3, color: Color.Orange });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('可订今日');
            Text.debugLine("component/TicketCard.ets(30:9)");
            Text.fontSize(12);
            Text.fontColor(Color.Orange);
            Text.border({ width: 1, radius: 3, color: Color.Orange });
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
            Row.debugLine("component/TicketCard.ets(39:7)");
            Row.width('100%');
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('¥129起');
            Text.debugLine("component/TicketCard.ets(40:9)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize(18);
            Text.fontColor(Color.Orange);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('订');
            Text.debugLine("component/TicketCard.ets(44:9)");
            Text.fontColor(Color.White);
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Medium);
            Text.borderRadius(8);
            Text.padding(8);
            Text.backgroundColor(Color.Orange);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=TicketCard.js.map