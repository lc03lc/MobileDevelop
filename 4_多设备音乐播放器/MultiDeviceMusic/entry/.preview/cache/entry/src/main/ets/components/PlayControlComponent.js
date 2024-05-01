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
import { Logger } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/Logger';
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { MusicPlayMode } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/MusicData';
import { ControlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/ControlConstants';
import { PlayConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/PlayConstants';
export class PlayControlComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.__playControl = new SynchedPropertyNesedObjectPU(params.playControl, this, "playControl");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        this.__playControl.set(params.playControl);
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params) {
        this.__playControl.set(params.playControl);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__playControl.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__playControl.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue) {
        this.__currentBreakpoint.set(newValue);
    }
    get playControl() {
        return this.__playControl.get();
    }
    get index() {
        return this.__index.get();
    }
    set index(newValue) {
        this.__index.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.playControl.icon);
            Image.debugLine("components/PlayControlComponent.ets(32:5)");
            Image.width(this.index === PlayConstants.PLAY_INDEX ? new BreakpointType({
                sm: { "id": 16777477, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777477, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777478, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint) : new BreakpointType({
                sm: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777473, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Image.aspectRatio(1);
            Image.objectFit(ImageFit.Contain);
            Image.onClick(() => this.playControlClick(this.playControl.key));
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    playControlClick(key) {
        switch (key) {
            case ControlConstants.PLAY_MODE:
                this.changePlayMode();
                break;
            case ControlConstants.PREVIOUS:
                MediaService.getInstance().playPrevious();
                break;
            case ControlConstants.PLAY:
                if (MediaService.getInstance().getFirst()) {
                    MediaService.getInstance().loadAssent(0);
                }
                else {
                    MediaService.getInstance().play();
                }
                this.playControl.icon = { "id": 16777574, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" };
                this.playControl.key = ControlConstants.PAUSE;
                break;
            case ControlConstants.PAUSE:
                MediaService.getInstance().pause();
                this.playControl.icon = { "id": 16777556, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" };
                this.playControl.key = ControlConstants.PLAY;
                break;
            case ControlConstants.NEXT:
                MediaService.getInstance().playNextAuto(true);
                break;
            case ControlConstants.PLAY_LIST:
                break;
            default:
                break;
        }
    }
    changePlayMode() {
        const mode = [MusicPlayMode.SINGLE_CYCLE, MusicPlayMode.ORDER, MusicPlayMode.RANDOM];
        const resource = [{ "id": 16777543, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777311, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, { "id": 16777531, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }];
        let index = MediaService.getInstance().getPlayMode() + 1;
        if (index > mode.length - 1) {
            index = 0;
        }
        Logger.info('change play mode setPlayModel index:' + index);
        this.playControl.icon = resource[index];
        MediaService.getInstance().setPlayModel(mode[index]);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=PlayControlComponent.js.map