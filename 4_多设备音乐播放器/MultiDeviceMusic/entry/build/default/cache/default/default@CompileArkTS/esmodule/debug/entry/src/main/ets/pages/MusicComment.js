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
import { BreakpointConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/BreakpointConstants';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import CommentViewModel from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/CommentViewModel';
import { ListItemComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/view/ListItemComponent';
import { HeadComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/view/HeadComponent';
import { MusicInfoComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/view/MusicInfoComponent';
import { CommonConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/CommonConstants';
class MusicComment extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBp = new ObservedPropertySimplePU(BreakpointConstants.CURRENT_BREAKPOINT, this, "currentBp");
        this.__wonderfulComment = new ObservedPropertyObjectPU(CommentViewModel.getWonderfulReview(), this, "wonderfulComment");
        this.__newComment = new ObservedPropertyObjectPU(CommentViewModel.getNewComment(), this, "newComment");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentBp !== undefined) {
            this.currentBp = params.currentBp;
        }
        if (params.wonderfulComment !== undefined) {
            this.wonderfulComment = params.wonderfulComment;
        }
        if (params.newComment !== undefined) {
            this.newComment = params.newComment;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBp.purgeDependencyOnElmtId(rmElmtId);
        this.__wonderfulComment.purgeDependencyOnElmtId(rmElmtId);
        this.__newComment.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBp.aboutToBeDeleted();
        this.__wonderfulComment.aboutToBeDeleted();
        this.__newComment.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentBp() {
        return this.__currentBp.get();
    }
    set currentBp(newValue) {
        this.__currentBp.set(newValue);
    }
    get wonderfulComment() {
        return this.__wonderfulComment.get();
    }
    set wonderfulComment(newValue) {
        this.__wonderfulComment.set(newValue);
    }
    get newComment() {
        return this.__newComment.get();
    }
    set newComment(newValue) {
        this.__newComment.set(newValue);
    }
    ShowTitle(title, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.Start);
            Row.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.fontSize({ "id": 16777301, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontColor({ "id": 16777255, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777477, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.margin({
                top: { "id": 16777479, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                bottom: { "id": 16777478, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777404, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777402, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777407, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777405, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            GridRow.create({
                breakpoints: {
                    value: BreakpointConstants.BREAKPOINT_VALUE,
                    reference: BreakpointsReference.WindowSize
                },
                columns: {
                    sm: BreakpointConstants.COLUMN_SM,
                    md: BreakpointConstants.COLUMN_MD,
                    lg: BreakpointConstants.COLUMN_LG
                },
                gutter: { x: BreakpointConstants.GUTTER_X }
            });
            GridRow.backgroundColor(Color.White);
            GridRow.onBreakpointChange((breakpoint) => {
                this.currentBp = breakpoint;
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
                    sm: BreakpointConstants.COLUMN_SM,
                    md: BreakpointConstants.COLUMN_MD,
                    lg: BreakpointConstants.COLUMN_LG
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
            Column.height(StyleConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777404, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777402, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777407, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777405, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new HeadComponent(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777404, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777402, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777407, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777405, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MusicInfoComponent(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        this.ShowTitle.bind(this)({ "id": 16777251, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.lanes(this.currentBp === BreakpointConstants.BREAKPOINT_LG ? 2 : 1);
            List.scrollBar(BarState.Off);
            List.divider({
                color: { "id": 16777260, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                strokeWidth: { "id": 16777467, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                startMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777465, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777466, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                endMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                    0 : { "id": 16777316, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            List.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777404, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777407, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const comment = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    If.create();
                    if (this.currentBp === BreakpointConstants.BREAKPOINT_SM ||
                        this.currentBp === BreakpointConstants.BREAKPOINT_MD) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (index && index < CommonConstants.LIST_COUNT) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        {
                                            const isLazyCreate = true;
                                            const itemCreation = (elmtId, isInitialRender) => {
                                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                ListItem.create(deepRenderFunction, isLazyCreate);
                                                ListItem.width(StyleConstants.FULL_WIDTH);
                                                ListItem.padding({
                                                    bottom: { "id": 16777432, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                                                });
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
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    __Common__.create();
                                                    __Common__.margin({
                                                        left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                            0 : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                                                        right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                            0 : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                                                    });
                                                    if (!isInitialRender) {
                                                        __Common__.pop();
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                                {
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        if (isInitialRender) {
                                                            ViewPU.create(new ListItemComponent(this, { item: comment }, undefined, elmtId));
                                                        }
                                                        else {
                                                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                }
                                                __Common__.pop();
                                                ListItem.pop();
                                            };
                                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                                itemCreation(elmtId, isInitialRender);
                                                this.updateFuncByElmtId.set(elmtId, itemCreation);
                                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                    __Common__.create();
                                                    __Common__.margin({
                                                        left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                            0 : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                                                        right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                            0 : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                                                    });
                                                    if (!isInitialRender) {
                                                        __Common__.pop();
                                                    }
                                                    ViewStackProcessor.StopGetAccessRecording();
                                                });
                                                {
                                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                                        if (isInitialRender) {
                                                            ViewPU.create(new ListItemComponent(this, { item: comment }, undefined, elmtId));
                                                        }
                                                        else {
                                                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                                                        }
                                                        ViewStackProcessor.StopGetAccessRecording();
                                                    });
                                                }
                                                __Common__.pop();
                                                ListItem.pop();
                                            };
                                            if (isLazyCreate) {
                                                observedShallowRender();
                                            }
                                            else {
                                                observedDeepRender();
                                            }
                                        }
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            {
                                const isLazyCreate = true;
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    ListItem.create(deepRenderFunction, isLazyCreate);
                                    ListItem.width(StyleConstants.FULL_WIDTH);
                                    ListItem.padding({
                                        bottom: { "id": 16777432, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                                    });
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
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        __Common__.create();
                                        __Common__.margin({
                                            left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                0 : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                                            right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                0 : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                                        });
                                        if (!isInitialRender) {
                                            __Common__.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            if (isInitialRender) {
                                                ViewPU.create(new ListItemComponent(this, { item: comment }, undefined, elmtId));
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    }
                                    __Common__.pop();
                                    ListItem.pop();
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.updateFuncByElmtId.set(elmtId, itemCreation);
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        __Common__.create();
                                        __Common__.margin({
                                            left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                0 : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                                            right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                                0 : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                                        });
                                        if (!isInitialRender) {
                                            __Common__.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            if (isInitialRender) {
                                                ViewPU.create(new ListItemComponent(this, { item: comment }, undefined, elmtId));
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    }
                                    __Common__.pop();
                                    ListItem.pop();
                                };
                                if (isLazyCreate) {
                                    observedShallowRender();
                                }
                                else {
                                    observedDeepRender();
                                }
                            }
                        });
                    }
                    if (!isInitialRender) {
                        If.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.wonderfulComment, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), true, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        this.ShowTitle.bind(this)({ "id": 16777241, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.layoutWeight(1);
            List.lanes(this.currentBp === BreakpointConstants.BREAKPOINT_LG ? 2 : 1);
            List.scrollBar(BarState.Off);
            List.margin({
                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777404, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777407, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            List.divider({
                color: { "id": 16777260, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                strokeWidth: { "id": 16777467, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                startMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ? { "id": 16777465, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777466, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                endMargin: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                    0 : { "id": 16777316, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const comment = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.width(StyleConstants.FULL_WIDTH);
                        ListItem.padding({
                            bottom: { "id": 16777432, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                        });
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
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            __Common__.create();
                            __Common__.margin({
                                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                    0 : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                    0 : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                __Common__.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new ListItemComponent(this, { item: comment }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        __Common__.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            __Common__.create();
                            __Common__.margin({
                                left: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                    0 : { "id": 16777403, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                                right: this.currentBp === BreakpointConstants.BREAKPOINT_SM ?
                                    0 : { "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                __Common__.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new ListItemComponent(this, { item: comment }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        __Common__.pop();
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
            this.forEachUpdateFunction(elmtId, this.newComment, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MusicComment(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MusicComment.js.map