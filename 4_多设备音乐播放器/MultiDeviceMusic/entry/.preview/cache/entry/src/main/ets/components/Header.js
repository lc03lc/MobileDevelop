/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import router from '@ohos:router';
import promptAction from '@ohos:promptAction';
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { MenuData } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/MenuData';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { HeaderConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/HeaderConstants';
export class Header extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBreakpoint = new SynchedPropertySimpleTwoWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("components/Header.ets(29:5)");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 16777507, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.zIndex(HeaderConstants.Z_INDEX);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777529, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Header.ets(30:7)");
            Image.width({ "id": 16777379, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.height({ "id": 16777377, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777378, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.onClick(() => {
                router.back();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777288, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.debugLine("components/Header.ets(37:7)");
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777370, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777368, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.fontWeight(HeaderConstants.TITLE_FONT_WEIGHT);
            Text.fontColor({ "id": 16777256, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.opacity({ "id": 16777514, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.letterSpacing(HeaderConstants.LETTER_SPACING);
            Text.padding({ left: { "id": 16777515, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("components/Header.ets(49:7)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777575, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Header.ets(51:7)");
            Image.width({ "id": 16777379, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.height({ "id": 16777377, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ right: { "id": 16777378, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.bindMenu(this.getMenu());
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    getMenu() {
        let menuItem = new MenuData();
        let menuDatas = [];
        if (canIUse(HeaderConstants.SYSCAP_ETHERNET)) {
            menuItem.value = HeaderConstants.AUDIO_DEVICE_SERVICE;
            menuItem.action = () => {
                promptAction.showToast({
                    message: HeaderConstants.AUDIO_DEVICE_SERVICE,
                    duration: HeaderConstants.TOAST_DURATION
                });
            };
            menuDatas.push(menuItem);
        }
        return menuDatas;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Header.js.map