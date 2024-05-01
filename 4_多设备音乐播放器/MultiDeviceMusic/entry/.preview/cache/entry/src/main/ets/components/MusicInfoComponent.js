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
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { MusicList } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/MusicListViewModel';
import { RouterUrlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/RouterUrlConstants';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { playImage } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/PlayData';
import { ControlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/ControlConstants';
import { PlayConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/PlayConstants';
import { Logger } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/Logger';
export class MusicInfoComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.__like = new ObservedPropertySimplePU(0, this, "like");
        this.songList = MusicList;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.like !== undefined) {
            this.like = params.like;
        }
        if (params.songList !== undefined) {
            this.songList = params.songList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__like.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__selectIndex.aboutToBeDeleted();
        this.__like.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get selectIndex() {
        return this.__selectIndex.get();
    }
    set selectIndex(newValue) {
        this.__selectIndex.set(newValue);
    }
    get like() {
        return this.__like.get();
    }
    set like(newValue) {
        this.__like.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("components/MusicInfoComponent.ets(36:5)");
            Column.margin({ left: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, right: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Column.height(StyleConstants.FULL_HEIGHT);
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
            GridRow.debugLine("components/MusicInfoComponent.ets(37:7)");
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
                    md: PlayConstants.SPAN_FOUR,
                    lg: PlayConstants.SPAN_FOUR
                },
                offset: {
                    md: PlayConstants.OFFSET_TWO,
                    lg: PlayConstants.OFFSET_ONE
                }
            });
            GridCol.debugLine("components/MusicInfoComponent.ets(45:9)");
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.CoverInfo.bind(this)();
        GridCol.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridCol.create({
                span: { sm: PlayConstants.SPAN_FOUR, md: PlayConstants.SPAN_SIX, lg: 0 },
                offset: { md: PlayConstants.OFFSET_THREE }
            });
            GridCol.debugLine("components/MusicInfoComponent.ets(59:9)");
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.MusicInfo.bind(this)();
        GridCol.pop();
        GridRow.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("components/MusicInfoComponent.ets(67:7)");
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
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
            GridRow.debugLine("components/MusicInfoComponent.ets(68:7)");
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
            GridCol.debugLine("components/MusicInfoComponent.ets(76:9)");
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.OperationInfo.bind(this)();
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    CoverInfo(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.songList[this.selectIndex].label);
            Image.debugLine("components/MusicInfoComponent.ets(97:5)");
            Image.constraintSize({ maxWidth: new BreakpointType({
                    sm: { "id": 16777342, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777342, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777343, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint) });
            Image.width(StyleConstants.FULL_WIDTH);
            Image.aspectRatio(1);
            Image.borderRadius({ "id": 16777346, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({
                left: new BreakpointType({
                    sm: { "id": 16777449, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint),
                right: new BreakpointType({
                    sm: { "id": 16777450, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint),
                top: new BreakpointType({
                    sm: { "id": 16777453, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777452, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777451, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint)
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    MusicInfo(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("components/MusicInfoComponent.ets(123:5)");
            Column.margin({ top: { "id": 16777443, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
            Flex.debugLine("components/MusicInfoComponent.ets(124:7)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.songList[this.selectIndex].title);
            Text.debugLine("components/MusicInfoComponent.ets(125:9)");
            Text.fontSize({ "id": 16777360, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontColor({ "id": 16777251, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.like == 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777260, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                        Image.debugLine("components/MusicInfoComponent.ets(129:11)");
                        Image.width({ "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                        Image.aspectRatio(1);
                        Image.objectFit(ImageFit.Contain);
                        Image.onClick(() => {
                            this.like += 1;
                        });
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
                        Image.create({ "id": 16777296, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                        Image.debugLine("components/MusicInfoComponent.ets(137:11)");
                        Image.width({ "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                        Image.aspectRatio(1);
                        Image.objectFit(ImageFit.Contain);
                        Image.onClick(() => {
                            this.like -= 1;
                        });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.songList[this.selectIndex].singer);
            Text.debugLine("components/MusicInfoComponent.ets(147:7)");
            Text.textAlign(TextAlign.Start);
            Text.fontSize({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontColor({ "id": 16777253, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777454, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Text.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    OperationInfo(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("components/MusicInfoComponent.ets(159:5)");
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item.icon);
                    Image.debugLine("components/MusicInfoComponent.ets(161:9)");
                    Image.aspectRatio(1);
                    Image.width(new BreakpointType({
                        sm: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                        md: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                        lg: { "id": 16777456, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                    }).getValue(this.currentBreakpoint));
                    Image.objectFit(ImageFit.Contain);
                    Image.onClick(() => this.controlClick(item.key));
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, playImage, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Flex.pop();
    }
    controlClick(key) {
        if (key === ControlConstants.REVIEW) {
            router.pushUrl({
                url: RouterUrlConstants.MUSIC_COMMENT
            }, router.RouterMode.Single).catch((error) => {
                Logger.error('pushUrl failed :' + JSON.stringify(error));
            });
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MusicInfoComponent.js.map