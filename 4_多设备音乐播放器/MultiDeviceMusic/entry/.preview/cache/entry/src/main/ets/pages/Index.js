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
import IndexViewModel from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/IndexViewModel';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
import { BreakpointConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/BreakpointConstants';
import { HomeConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/HomeConstants';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__indexItemList = new ObservedPropertyObjectPU(IndexViewModel.getIndexItemList(), this, "indexItemList");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.indexItemList !== undefined) {
            this.indexItemList = params.indexItemList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__indexItemList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__indexItemList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get indexItemList() {
        return this.__indexItemList.get();
    }
    set indexItemList(newValue) {
        this.__indexItemList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("pages/Index.ets(29:5)");
            Scroll.width('100%');
            Scroll.height(1000);
            Scroll.scrollBar(BarState.Off);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Index.ets(30:7)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Index.ets(31:9)");
            Column.width("100%");
            Column.height(120);
            Column.padding({
                top: 20,
                left: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777333, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("pages/Index.ets(32:11)");
            Image.width("70%");
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("最了解你的音乐电台");
            Text.debugLine("pages/Index.ets(34:11)");
            Text.fontColor(Color.Gray);
            Text.fontSize(13);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
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
                gutter: { x: BreakpointConstants.GUTTER_X },
                direction: GridRowDirection.Row
            });
            GridRow.debugLine("pages/Index.ets(46:9)");
            GridRow.padding({
                left: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777333, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                bottom: 12
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
                    sm: BreakpointConstants.SPAN_SM,
                    md: BreakpointConstants.SPAN_MD,
                    lg: BreakpointConstants.SPAN_LG
                },
                offset: {
                    md: BreakpointConstants.OFFSET_MD,
                    lg: BreakpointConstants.OFFSET_LG
                }
            });
            GridCol.debugLine("pages/Index.ets(59:11)");
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: HomeConstants.COLUMN_SPACE });
            Column.debugLine("pages/Index.ets(70:13)");
            if (!isInitialRender) {
                Column.pop();
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
                    Stack.create();
                    Stack.debugLine("pages/Index.ets(72:17)");
                    if (!isInitialRender) {
                        Stack.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(item.icon);
                    Image.debugLine("pages/Index.ets(73:19)");
                    Image.width(StyleConstants.FULL_WIDTH);
                    Image.height({ "id": 16777405, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Image.borderRadius({ "id": 16777401, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/Index.ets(77:19)");
                    Column.width(StyleConstants.FULL_WIDTH);
                    Column.height({ "id": 16777405, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Column.borderRadius({ "id": 16777401, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Column.padding({ "id": 16777406, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Column.alignItems(HorizontalAlign.Start);
                    Column.justifyContent(FlexAlign.SpaceBetween);
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.title);
                    Text.debugLine("pages/Index.ets(78:21)");
                    Text.fontSize({ "id": 16777508, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Text.fontColor(Color.Black);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.description);
                    Text.debugLine("pages/Index.ets(81:21)");
                    Text.fontSize(16);
                    Text.opacity(HomeConstants.TEXT_OPACITY);
                    Text.fontColor(Color.Black);
                    Text.margin({
                        top: { "id": 16777349, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                    });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Blank.create();
                    Blank.debugLine("pages/Index.ets(88:21)");
                    if (!isInitialRender) {
                        Blank.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Blank.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/Index.ets(89:21)");
                    Column.alignItems(HorizontalAlign.End);
                    Column.width(StyleConstants.FULL_WIDTH);
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Button.createWithChild();
                    Button.debugLine("pages/Index.ets(90:23)");
                    Button.backgroundColor("#708090");
                    Button.borderRadius({ "id": 16777325, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Button.width({ "id": 16777328, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Button.height({ "id": 16777327, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Button.onClick(() => {
                        router.pushUrl({
                            url: item.url
                        }, router.RouterMode.Single);
                    });
                    if (!isInitialRender) {
                        Button.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item.button);
                    Text.debugLine("pages/Index.ets(91:25)");
                    Text.fontSize({ "id": 16777326, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
                    Text.fontColor(Color.White);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Button.pop();
                Column.pop();
                Column.pop();
                Stack.pop();
            };
            this.forEachUpdateFunction(elmtId, this.indexItemList, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Index.ets(125:9)");
            Column.width("100%");
            Column.height(20);
            Column.onClick(() => {
                router.pushUrl({
                    url: "pages/MyPage2"
                });
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index.js.map