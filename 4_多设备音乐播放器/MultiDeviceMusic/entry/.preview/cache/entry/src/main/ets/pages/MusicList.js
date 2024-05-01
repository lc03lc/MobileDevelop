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
 * See the License for the specific language go
 verning permissions and
 * limitations under the License.
 */
import { BreakpointSystem } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { MediaService } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/MediaService';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { BreakpointConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/BreakpointConstants';
import { SongConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/SongConstants';
import { Header } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/Header';
import { Player } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/Player';
import { Content } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/Content';
class MusicList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.breakpointSystem = new BreakpointSystem();
        this.__currentBreakpoint = new ObservedPropertySimplePU(BreakpointConstants.BREAKPOINT_SM, this, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.breakpointSystem !== undefined) {
            this.breakpointSystem = params.breakpointSystem;
        }
        if (params.currentBreakpoint !== undefined) {
            this.currentBreakpoint = params.currentBreakpoint;
        }
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
    aboutToAppear() {
        MediaService.getInstance();
        this.breakpointSystem.register();
    }
    aboutToDisappear() {
        this.breakpointSystem.unregister();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.Top });
            Stack.debugLine("pages/MusicList.ets(42:5)");
            Stack.width(StyleConstants.FULL_WIDTH);
            Stack.backgroundColor(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777244, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777243, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new Header(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new Content(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new Player(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Stack.pop();
    }
    pageTransition() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            PageTransition.create();
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            PageTransitionEnter.create({ duration: SongConstants.TRANSITION_DURATION, curve: Curve.Smooth, type: RouteType.Pop });
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            PageTransitionExit.create({ duration: SongConstants.TRANSITION_DURATION, curve: Curve.Smooth, type: RouteType.Push });
            ViewStackProcessor.StopGetAccessRecording();
        });
        PageTransition.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MusicList(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MusicList.js.map