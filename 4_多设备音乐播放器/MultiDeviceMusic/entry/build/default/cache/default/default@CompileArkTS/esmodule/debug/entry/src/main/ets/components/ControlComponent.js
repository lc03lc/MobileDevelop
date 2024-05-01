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
import { MediaService } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/MediaService';
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { ControlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/ControlConstants';
import { PlayConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/PlayConstants';
import { playControl } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/PlayData';
import { PlayControlComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/PlayControlComponent';
export class ControlComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__isPlay = this.createStorageLink('isPlay', false, "isPlay");
        this.__currentTime = this.createStorageLink('currentTime', '00:00', "currentTime");
        this.__totalTime = this.createStorageLink('totalTime', '00:00', "totalTime");
        this.__value = this.createStorageLink('progress', 0, "value");
        this.__max = this.createStorageLink('progressMax', 0, "max");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("isPlay", this.updatePlay);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__currentTime.aboutToBeDeleted();
        this.__totalTime.aboutToBeDeleted();
        this.__value.aboutToBeDeleted();
        this.__max.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue) {
        this.__isPlay.set(newValue);
    }
    get currentTime() {
        return this.__currentTime.get();
    }
    set currentTime(newValue) {
        this.__currentTime.set(newValue);
    }
    get totalTime() {
        return this.__totalTime.get();
    }
    set totalTime(newValue) {
        this.__totalTime.set(newValue);
    }
    get value() {
        return this.__value.get();
    }
    set value(newValue) {
        this.__value.set(newValue);
    }
    get max() {
        return this.__max.get();
    }
    set max(newValue) {
        this.__max.set(newValue);
    }
    aboutToAppear() {
        this.updatePlay();
    }
    updatePlay() {
        playControl.forEach((item, index) => {
            if (index === PlayConstants.PLAY_INDEX) {
                item.icon = this.isPlay ? { "id": 16777552, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777549, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" };
                item.key = this.isPlay ? ControlConstants.PAUSE : ControlConstants.PLAY;
            }
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.margin({
                top: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                left: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                bottom: { "id": 16777318, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridRow.create({
                columns: {
                    sm: PlayConstants.COLUMN_FOUR,
                    md: PlayConstants.COLUMN_EIGHT,
                    lg: PlayConstants.COLUMN_TWELVE
                },
                gutter: PlayConstants.GRID_COL_GUTTER
            });
            if (!isInitialRender) {
                GridRow.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridCol.create({
                span: {
                    sm: PlayConstants.SPAN_FOUR,
                    md: PlayConstants.SPAN_SIX,
                    lg: PlayConstants.SPAN_FOUR
                },
                offset: {
                    md: PlayConstants.OFFSET_ONE,
                    lg: PlayConstants.OFFSET_ONE
                }
            });
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
            Flex.margin({ top: { "id": 16777414, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, bottom: { "id": 16777414, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.currentTime);
            Text.width({ "id": 16777457, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor({ "id": 16777274, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777320, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Slider.create({ min: 0, max: this.max, step: PlayConstants.SLIDE_STEP, value: this.value });
            Slider.blockColor({ "id": 16777272, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Slider.selectedColor({ "id": 16777272, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Slider.trackColor({ "id": 16777275, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Slider.onChange((value, mode) => {
                if (mode === SliderChangeMode.End || mode === SliderChangeMode.Begin ||
                    mode === SliderChangeMode.Click) {
                    MediaService.getInstance().seek(value);
                }
            });
            if (!isInitialRender) {
                Slider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.totalTime);
            Text.width({ "id": 16777457, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor({ "id": 16777274, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777320, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new PlayControlComponent(this, {
                                playControl: item,
                                index: index
                            }, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                playControl: item
                            });
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            };
            this.forEachUpdateFunction(elmtId, playControl, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), true, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Flex.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=ControlComponent.js.map