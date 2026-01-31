import prompt from '@ohos:promptAction';
import router from '@ohos:router';
import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
// 定义特定样式, 作为TextInput的扩展(装饰)
// 自定义TextInput
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777289, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
    TextInput.height({ "id": 16777326, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777300, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
    TextInput.width(300);
    TextInput.padding({ left: 8 });
    TextInput.margin({ top: { "id": 16777320, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, bottom: 8 });
}
function __Line__lineStyle() {
    Line.width(300);
    Line.height({ "id": 16777321, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
    Line.backgroundColor({ "id": 16777278, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
}
function __Text__blueTextStyle() {
    Text.fontColor({ "id": 16777280, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
    Text.fontSize({ "id": 16777371, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
}
class LoginPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__isShowProgress = new ObservedPropertySimplePU(false, this, "isShowProgress");
        this.timeOutId = -1;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.account !== undefined) {
            this.account = params.account;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.isShowProgress !== undefined) {
            this.isShowProgress = params.isShowProgress;
        }
        if (params.timeOutId !== undefined) {
            this.timeOutId = params.timeOutId;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__account.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowProgress.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__isShowProgress.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get account() {
        return this.__account.get();
    }
    set account(newValue) {
        this.__account.set(newValue);
    }
    get password() {
        return this.__password.get();
    }
    set password(newValue) {
        this.__password.set(newValue);
    }
    get isShowProgress() {
        return this.__isShowProgress.get();
    }
    set isShowProgress(newValue) {
        this.__isShowProgress.set(newValue);
    }
    // 禁用转场
    // pageTransition() {
    //   PageTransitionEnter({ type: RouteType.None, duration: 0 })
    //   PageTransitionExit({ type: RouteType.None, duration: 0 })
    // }
    imageButton(src, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
            Button.height({ "id": 16777345, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.width({ "id": 16777345, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777275, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(src);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
    }
    login() {
        if (this.account === '' || this.password === '') {
            prompt.showToast({
                message: { "id": 16777232, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }
            });
        }
        else {
            this.isShowProgress = true;
            if (this.timeOutId === -1) {
                // 设置定时
                this.timeOutId = setTimeout(() => {
                    this.isShowProgress = false;
                    this.timeOutId = -1;
                    // 用replace而不是push, 防止用户按返回键返回
                    router.replaceUrl({ url: 'pages/MainPage' });
                }, CommonConstants.LOGIN_DELAY_TIME);
            }
        }
    }
    // 退出页面时清除定时器
    aboutToDisappear() {
        clearTimeout(this.timeOutId);
        this.timeOutId = -1;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundImage({ "id": 16777399, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, ImageRepeat.NoRepeat);
            Column.backgroundImageSize({
                width: CommonConstants.FULL_PARENT,
                height: CommonConstants.FULL_PARENT,
            });
            Column.height(CommonConstants.FULL_PARENT);
            Column.width(CommonConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777348, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                right: { "id": 16777348, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                bottom: { "id": 16777329, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Image($r('app.media.logo'))
            Image.create({ "id": 16777218, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Image($r('app.media.logo'))
            Image.width({ "id": 16777332, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Image($r('app.media.logo'))
            Image.height({ "id": 16777332, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Image($r('app.media.logo'))
            Image.margin({
                // top: $r('app.float.logo_margin_top'),
                top: 200,
                bottom: 24
            });
            if (!isInitialRender) {
                // Image($r('app.media.logo'))
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontSize({ "id": 16777349, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777298, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777234, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontSize({ "id": 16777344, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.fontColor({ "id": 16777284, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.margin({ bottom: { "id": 16777327, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, top: { "id": 16777328, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777222, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            TextInput.maxLength(CommonConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Number);
            __TextInput__inputStyle();
            TextInput.onChange((value) => {
                this.account = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Line().lineStyle()
            TextInput.create({ placeholder: { "id": 16777256, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            // Line().lineStyle()
            TextInput.maxLength(CommonConstants.INPUT_PASSWORD_LENGTH);
            // Line().lineStyle()
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            // Line().lineStyle()
            TextInput.onChange((value) => {
                this.password = value;
            });
            if (!isInitialRender) {
                // Line().lineStyle()
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.createWithLabel({ "id": 16777233, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { type: ButtonType.Capsule });
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.width(300);
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.height({ "id": 16777323, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.fontSize({ "id": 16777344, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.fontColor(Color.Black);
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.fontWeight(FontWeight.Medium);
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.backgroundColor({ "id": 16777290, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.margin({ top: { "id": 16777325, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, bottom: { "id": 16777324, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            // Line().lineStyle()
            // Row() {
            //   Text($r('app.string.message_login')).blueTextStyle()
            //   Text($r('app.string.forgot_password')).blueTextStyle()
            // }
            // .justifyContent(FlexAlign.SpaceBetween)
            // .width(CommonConstants.FULL_PARENT)
            // .margin({
            //   top: $r('app.float.forgot_margin_top'),
            //   bottom: 120
            // })
            // 空白
            // Blank()
            //   .margin(80)
            Button.onClick(() => {
                this.login();
            });
            if (!isInitialRender) {
                // Line().lineStyle()
                // Row() {
                //   Text($r('app.string.message_login')).blueTextStyle()
                //   Text($r('app.string.forgot_password')).blueTextStyle()
                // }
                // .justifyContent(FlexAlign.SpaceBetween)
                // .width(CommonConstants.FULL_PARENT)
                // .margin({
                //   top: $r('app.float.forgot_margin_top'),
                //   bottom: 120
                // })
                // 空白
                // Blank()
                //   .margin(80)
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // Line().lineStyle()
        // Row() {
        //   Text($r('app.string.message_login')).blueTextStyle()
        //   Text($r('app.string.forgot_password')).blueTextStyle()
        // }
        // .justifyContent(FlexAlign.SpaceBetween)
        // .width(CommonConstants.FULL_PARENT)
        // .margin({
        //   top: $r('app.float.forgot_margin_top'),
        //   bottom: 120
        // })
        // 空白
        // Blank()
        //   .margin(80)
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // txt 注册账号
            Text.create({ "id": 16777261, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // txt 注册账号
            Text.fontColor({ "id": 16777280, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // txt 注册账号
            Text.fontSize({ "id": 16777344, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            // txt 注册账号
            Text.fontWeight(FontWeight.Medium);
            if (!isInitialRender) {
                // txt 注册账号
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // txt 注册账号
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isShowProgress) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        // 表示加载的小球 -> 我觉得没啥用
                        LoadingProgress.create();
                        // 表示加载的小球 -> 我觉得没啥用
                        LoadingProgress.color({ "id": 16777279, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        // 表示加载的小球 -> 我觉得没啥用
                        LoadingProgress.width({ "id": 16777331, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        // 表示加载的小球 -> 我觉得没啥用
                        LoadingProgress.height({ "id": 16777331, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        // 表示加载的小球 -> 我觉得没啥用
                        LoadingProgress.margin({ top: { "id": 16777330, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
                        if (!isInitialRender) {
                            // 表示加载的小球 -> 我觉得没啥用
                            LoadingProgress.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            // Text($r('app.string.other_login_method'))
            //   .fontColor($r('app.color.other_login_text_color'))
            //   .fontSize($r('app.float.little_text_size'))
            //   .fontWeight(FontWeight.Medium)
            //   .margin({ top: $r('app.float.other_login_margin_top'), bottom: $r('app.float.other_login_margin_bottom') })
            // Row({ space: CommonConstants.LOGIN_METHODS_SPACE }) {
            //   this.imageButton($r('app.media.login_method1'))
            //   this.imageButton($r('app.media.login_method2'))
            //   this.imageButton($r('app.media.login_method3'))
            // }
            else // .backgroundColor($r('app.color.background'))
             {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new LoginPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LoginPage.js.map