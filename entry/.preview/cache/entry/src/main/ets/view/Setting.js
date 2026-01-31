/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import CommonConstants from '@bundle:org.malred.TravelApplication/entry/ets/common/constants/CommonConstants';
import mainViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/MainViewModel';
export default class Setting extends ViewPU {
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
    settingCell(item, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/Setting.ets(26:5)");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PARENT);
            Row.padding({
                left: { "id": 16777396, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                right: { "id": 16777397, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.COMMON_SPACE });
            Row.debugLine("view/Setting.ets(27:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(item.img);
            Image.debugLine("view/Setting.ets(28:9)");
            Image.width({ "id": 16777398, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height({ "id": 16777398, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(item.title);
            Text.debugLine("view/Setting.ets(31:9)");
            Text.fontSize({ "id": 16777372, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (item.others === null) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777319, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        Image.debugLine("view/Setting.ets(36:9)");
                        Image.width({ "id": 16777387, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        Image.height({ "id": 16777386, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Toggle.create({ type: ToggleType.Switch, isOn: false });
                        Toggle.debugLine("view/Setting.ets(40:9)");
                        if (!isInitialRender) {
                            Toggle.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Toggle.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("view/Setting.ets(52:5)");
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.COMMON_SPACE });
            Column.debugLine("view/Setting.ets(53:7)");
            Column.height(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/Setting.ets(54:9)");
            Column.width(CommonConstants.FULL_PARENT);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777250, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.debugLine("view/Setting.ets(55:11)");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777377, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777368, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            Text.padding({ left: { "id": 16777369, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/Setting.ets(64:9)");
            Row.margin({ top: { "id": 16777381, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            Row.alignItems(VerticalAlign.Center);
            Row.width(CommonConstants.FULL_PARENT);
            Row.height({ "id": 16777380, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.padding({ left: { "id": 16777382, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            Row.borderRadius({ "id": 16777378, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777300, "type": 20000, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.debugLine("view/Setting.ets(65:11)");
            Image.width({ "id": 16777383, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Image.height({ "id": 16777383, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/Setting.ets(68:11)");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: { "id": 16777381, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777271, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.debugLine("view/Setting.ets(69:13)");
            Text.fontSize({ "id": 16777379, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777270, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.debugLine("view/Setting.ets(71:13)");
            Text.fontSize({ "id": 16777350, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777394, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
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
            List.create();
            List.debugLine("view/Setting.ets(86:9)");
            List.backgroundColor(Color.White);
            List.width(CommonConstants.FULL_PARENT);
            List.height(CommonConstants.SET_LIST_WIDTH);
            List.divider({
                strokeWidth: { "id": 16777393, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                color: Color.Grey,
                startMargin: { "id": 16777392, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" },
                endMargin: { "id": 16777389, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }
            });
            List.borderRadius({ "id": 16777388, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            List.padding({ top: { "id": 16777391, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, bottom: { "id": 16777391, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.height({ "id": 16777390, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
                        ListItem.debugLine("view/Setting.ets(88:13)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.settingCell.bind(this)(item);
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.settingCell.bind(this)(item);
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSettingListData(), forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("view/Setting.ets(106:9)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777272, "type": 10003, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.debugLine("view/Setting.ets(108:9)");
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777351, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.fontSize({ "id": 16777372, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.fontColor({ "id": 16777426, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777425, "type": 10001, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" });
            Button.margin({ bottom: { "id": 16777385, "type": 10002, params: [], "bundleName": "org.malred.TravelApplication", "moduleName": "entry" } });
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
//# sourceMappingURL=Setting.js.map