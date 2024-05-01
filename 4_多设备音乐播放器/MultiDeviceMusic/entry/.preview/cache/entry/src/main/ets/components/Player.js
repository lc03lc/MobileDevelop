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
import { RouterUrlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/RouterUrlConstants';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { MediaService } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/MediaService';
import { MusicList } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/MusicListViewModel';
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { PlayerConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/PlayerConstants';
export class Player extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.__isPlay = this.createStorageLink('isPlay', false, "isPlay");
        this.songList = MusicList;
        this.__currentBreakpoint = new SynchedPropertySimpleTwoWayPU(params.currentBreakpoint, this, "currentBreakpoint");
        this.__imageRotate = new ObservedPropertySimplePU(0, this, "imageRotate");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("isPlay", this.animationFun);
    }
    setInitiallyProvidedValue(params) {
        if (params.songList !== undefined) {
            this.songList = params.songList;
        }
        if (params.imageRotate !== undefined) {
            this.imageRotate = params.imageRotate;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__imageRotate.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectIndex.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__imageRotate.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get selectIndex() {
        return this.__selectIndex.get();
    }
    set selectIndex(newValue) {
        this.__selectIndex.set(newValue);
    }
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue) {
        this.__isPlay.set(newValue);
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get imageRotate() {
        return this.__imageRotate.get();
    }
    set imageRotate(newValue) {
        this.__imageRotate.set(newValue);
    }
    animationFun() {
        this.imageRotate = 0;
        this.imageRotate = this.isPlay ? PlayerConstants.ROTATE : 0;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("components/Player.ets(40:5)");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 16777481, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.backgroundColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.padding({
                left: { "id": 16777482, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777482, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            Row.position({
                x: 0,
                y: StyleConstants.FULL_HEIGHT
            });
            Row.translate({
                x: 0,
                y: StyleConstants.TRANSLATE_PLAYER_Y
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("components/Player.ets(41:7)");
            Row.layoutWeight(PlayerConstants.LAYOUT_WEIGHT_PLAYER_CONTROL);
            Row.onClick(() => {
                router.pushUrl({
                    url: RouterUrlConstants.MUSIC_PLAY
                }, router.RouterMode.Single);
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.songList[this.selectIndex].label);
            Image.debugLine("components/Player.ets(42:9)");
            Context.animation({
                duration: PlayerConstants.ANIMATION_DURATION,
                iterations: PlayerConstants.ITERATIONS,
                curve: Curve.Linear
            });
            Image.height({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777347, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.borderRadius({ "id": 16777407, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ right: { "id": 16777444, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.rotate({ angle: this.imageRotate });
            Context.animation(null);
            Image.onAppear(() => {
                this.animationFun();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("components/Player.ets(56:9)");
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.songList[this.selectIndex].title);
            Text.debugLine("components/Player.ets(57:11)");
            Text.fontColor({ "id": 16777248, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777495, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777494, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777493, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("components/Player.ets(64:11)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777548, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Player.ets(65:13)");
            Image.height({ "id": 16777523, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777525, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ right: { "id": 16777524, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.songList[this.selectIndex].singer);
            Text.debugLine("components/Player.ets(69:13)");
            Text.fontColor({ "id": 16777247, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777490, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777489, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777488, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.opacity({ "id": 16777487, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("components/Player.ets(88:7)");
            Blank.onClick(() => {
                router.pushUrl({
                    url: RouterUrlConstants.MUSIC_PLAY
                }, router.RouterMode.Single);
            });
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("components/Player.ets(95:7)");
            Row.width(new BreakpointType({
                sm: { "id": 16777480, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777480, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777479, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777540, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Player.ets(96:9)");
            Image.height({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777340, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ right: { "id": 16777339, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_TWO);
            Image.onClick(() => MediaService.getInstance().playPrevious());
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.isPlay ? { "id": 16777223, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777530, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Player.ets(102:9)");
            Image.height({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777340, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_THREE);
            Image.onClick(() => {
                if (MediaService.getInstance().getFirst()) {
                    MediaService.getInstance().loadAssent(0);
                }
                else {
                    this.isPlay ? MediaService.getInstance().pause() : MediaService.getInstance().play();
                }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777578, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Player.ets(113:9)");
            Image.height({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777340, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({
                right: { "id": 16777339, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                left: { "id": 16777339, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_TWO);
            Image.onClick(() => MediaService.getInstance().playNextAuto(true));
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777555, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("components/Player.ets(122:9)");
            Image.height({ "id": 16777338, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777340, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.displayPriority(PlayerConstants.DISPLAY_PRIORITY_ONE);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    previewComponent();
}
else {
    storePreviewComponents(1, "Player", new Player(undefined, {}));
}
//# sourceMappingURL=Player.js.map