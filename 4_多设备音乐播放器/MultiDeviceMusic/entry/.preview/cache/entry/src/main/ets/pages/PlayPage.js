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
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { MusicList } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/MusicListViewModel';
import { ControlComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/ControlComponent';
import { LyricsComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/LyricsComponent';
import { MusicInfoComponent } from '@bundle:com.huawei.multidevicemusic/entry/ets/components/MusicInfoComponent';
import { PlayConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/PlayConstants';
class PlayPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentTabIndex = new ObservedPropertySimplePU(0, this, "currentTabIndex");
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.songList = MusicList;
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentTabIndex !== undefined) {
            this.currentTabIndex = params.currentTabIndex;
        }
        if (params.songList !== undefined) {
            this.songList = params.songList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentTabIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentTabIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__selectIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentTabIndex() {
        return this.__currentTabIndex.get();
    }
    set currentTabIndex(newValue) {
        this.__currentTabIndex.set(newValue);
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("pages/PlayPage.ets(36:5)");
            Stack.backgroundImage(this.songList[this.selectIndex].label);
            Stack.backgroundImageSize(ImageSize.Cover);
            Stack.backdropBlur(PlayConstants.BLUR);
            Stack.linearGradient({
                direction: GradientDirection.Bottom,
                colors: [
                    [PlayConstants.EIGHTY_WHITE_COLOR, PlayConstants.EIGHTY_WHITE],
                    [PlayConstants.NINETY_WHITE_COLOR, PlayConstants.NINETY_WHITE]
                ]
            });
            Stack.height(StyleConstants.FULL_HEIGHT);
            Stack.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.currentBreakpoint === PlayConstants.LG) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Stack.create({ alignContent: Alignment.Top });
                        Stack.debugLine("pages/PlayPage.ets(38:9)");
                        if (!isInitialRender) {
                            Stack.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new LyricsComponent(this, {}, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Flex.create({ direction: FlexDirection.Column });
                        Flex.debugLine("pages/PlayPage.ets(41:11)");
                        if (!isInitialRender) {
                            Flex.pop();
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
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new ControlComponent(this, {}, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                    Flex.pop();
                    Stack.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Flex.create({ direction: FlexDirection.Column });
                        Flex.debugLine("pages/PlayPage.ets(47:9)");
                        if (!isInitialRender) {
                            Flex.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Tabs.create({ barPosition: BarPosition.Start, index: this.currentTabIndex });
                        Tabs.debugLine("pages/PlayPage.ets(48:11)");
                        Tabs.onChange(index => this.currentTabIndex = index);
                        Tabs.vertical(false);
                        Tabs.barHeight({ "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                        Tabs.barWidth(PlayConstants.TAB_WIDTH);
                        if (!isInitialRender) {
                            Tabs.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        TabContent.create(() => {
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
                        });
                        TabContent.tabBar({ builder: () => {
                                this.TabTitle.call(this, PlayConstants.TAB_SONG, 0);
                            } });
                        TabContent.debugLine("pages/PlayPage.ets(49:13)");
                        if (!isInitialRender) {
                            TabContent.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    TabContent.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        TabContent.create(() => {
                            {
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    if (isInitialRender) {
                                        ViewPU.create(new LyricsComponent(this, {}, undefined, elmtId));
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                            }
                        });
                        TabContent.tabBar({ builder: () => {
                                this.TabTitle.call(this, PlayConstants.TAB_LYRICS, 1);
                            } });
                        TabContent.debugLine("pages/PlayPage.ets(54:13)");
                        if (!isInitialRender) {
                            TabContent.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    TabContent.pop();
                    Tabs.pop();
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new ControlComponent(this, {}, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                    Flex.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777550, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("pages/PlayPage.ets(68:7)");
            Image.width({ "id": 16777381, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.height({ "id": 16777381, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ left: { "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, top: { "id": 16777380, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.onClick(() => router.back());
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Stack.pop();
    }
    TabTitle(title, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/PlayPage.ets(90:5)");
            Text.fontColor(this.currentTabIndex === index ? { "id": 16777251, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777252, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(this.currentTabIndex === index ? PlayConstants.FIVE_HUNDRED : PlayConstants.FOUR_HUNDRED);
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777356, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777359, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.border({
                width: { bottom: this.currentTabIndex === index ? { "id": 16777502, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : 0 },
                color: { "id": 16777251, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            Text.padding({ bottom: { "id": 16777503, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
    }
    pageTransition() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            PageTransition.create();
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            PageTransitionEnter.create({ duration: PlayConstants.FIVE_HUNDRED, curve: Curve.Smooth });
            PageTransitionEnter.slide(SlideEffect.Bottom);
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            PageTransitionExit.create({ duration: PlayConstants.FIVE_HUNDRED, curve: Curve.Smooth });
            PageTransitionExit.slide(SlideEffect.Bottom);
            ViewStackProcessor.StopGetAccessRecording();
        });
        PageTransition.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new PlayPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=PlayPage.js.map