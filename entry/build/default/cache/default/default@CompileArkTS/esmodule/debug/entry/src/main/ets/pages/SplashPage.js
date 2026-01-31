import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
import router from '@ohos:router';
export default class SlashPage extends ViewPU {
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
    // 展示页面1秒后跳转
    onPageShow() {
        setTimeout(() => {
            // 用replace而不是push, 防止用户按返回键返回
            router.replaceUrl({
                url: 'pages/LoginPage'
            });
        }, 1000);
    }
    // page A
    // pageTransition() {
    //   // 定义页面进入时的效果，从左侧滑入，时长为1200ms，无论页面栈发生push还是pop操作均可生效
    //   PageTransitionEnter({ type: RouteType.None, duration: 500 })
    //     .slide(SlideEffect.Left)
    //   // 定义页面退出时的效果，向左侧滑出，时长为1000ms，无论页面栈发生push还是pop操作均可生效
    //   PageTransitionExit({ type: RouteType.None, duration: 500 })
    //     .slide(SlideEffect.Left)
    // }
    // 禁用转场
    // pageTransition() {
    //   PageTransitionEnter({ type: RouteType.None, duration: 0 })
    //   PageTransitionExit({ type: RouteType.None, duration: 0 })
    // }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // logo
            Image.create({ "id": 16777218, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // logo
            Image.width({ "id": 16777332, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // logo
            Image.height({ "id": 16777332, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // logo
            Image.margin({
                top: { "id": 16777334, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                // bottom: $r('app.float.logo_margin_bottom')
                bottom: 16
            });
            if (!isInitialRender) {
                // logo
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 提示文字
            Text.create('Travel');
            // 提示文字
            Text.textAlign(TextAlign.Center);
            // 提示文字
            Text.width(CommonConstants.FULL_PARENT);
            // 提示文字
            Text.height(40);
            // 提示文字
            Text.fontWeight(600);
            // 提示文字
            Text.fontSize(40);
            if (!isInitialRender) {
                // 提示文字
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 提示文字
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new SlashPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=SplashPage.js.map