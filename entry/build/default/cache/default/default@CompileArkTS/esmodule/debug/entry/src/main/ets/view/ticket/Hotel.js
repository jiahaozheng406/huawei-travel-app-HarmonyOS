import BuyCard from '@bundle:org.malred.TravelApplication/entry/ets/view/ticket/BuyCard';
import hilog from '@ohos:hilog';
export default class Hotel extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__start = new ObservedPropertySimplePU("2010-1-1", this, "start");
        this.__end = new ObservedPropertySimplePU("2010-1-2", this, "end");
        this.index = 0;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.start !== undefined) {
            this.start = params.start;
        }
        if (params.end !== undefined) {
            this.end = params.end;
        }
        if (params.index !== undefined) {
            this.index = params.index;
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
            Column.create();
            Column.alignItems(HorizontalAlign.Center);
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new BuyCard(this, { start: this.__start, end: this.__end, custom_click: () => {
                            hilog.info(0x0000, 'testTag', '%{public}s', this.start);
                            hilog.info(0x0000, 'testTag', '%{public}s', this.end);
                            // router.pushUrl({
                            //   url: "pages/SearchResultPage",
                            //   params: {
                            //     index: this.index
                            //   }
                            // })
                        } }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 精选xx榜
            Text.create('test');
            if (!isInitialRender) {
                // 精选xx榜
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 精选xx榜
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Hotel.js.map