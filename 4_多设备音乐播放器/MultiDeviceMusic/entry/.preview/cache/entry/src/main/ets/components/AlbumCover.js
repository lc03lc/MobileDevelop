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
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { BreakpointConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/BreakpointConstants';
import { AlbumComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/AlbumComponent';
export class AlbumCover extends ViewPU {
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
            If.create();
            if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new AlbumComponent(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        __Common__.create();
                        __Common__.height(StyleConstants.FULL_HEIGHT);
                        if (!isInitialRender) {
                            __Common__.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new AlbumComponent(this, { currentBreakpoint: this.__currentBreakpoint }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                    __Common__.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=AlbumCover.js.map