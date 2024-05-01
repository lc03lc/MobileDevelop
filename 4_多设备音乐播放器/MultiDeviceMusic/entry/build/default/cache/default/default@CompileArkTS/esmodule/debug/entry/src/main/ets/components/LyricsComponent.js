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
import { BreakpointType } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/BreakpointSystem';
import { MusicList } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/MusicListViewModel';
import { PlayConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/PlayConstants';
import { StyleConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/StyleConstants';
export class LyricsComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'sm', "currentBreakpoint");
        this.songList = MusicList;
        this.__selectIndex = this.createStorageProp('selectIndex', 0, "selectIndex");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.songList !== undefined) {
            this.songList = params.songList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__selectIndex.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.margin({
                top: new BreakpointType({
                    sm: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    md: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                    lg: { "id": 16777400, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
                }).getValue(this.currentBreakpoint),
                left: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: { "id": 16777483, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
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
                    lg: PlayConstants.SPAN_SIX
                },
                offset: {
                    md: PlayConstants.OFFSET_ONE,
                    lg: PlayConstants.OFFSET_SIX
                }
            });
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Column });
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
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
            Text.create(this.songList[this.selectIndex].title);
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777326, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777326, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777323, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.fontColor({ "id": 16777272, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.textAlign(TextAlign.Start);
            Text.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777530, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777348, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.aspectRatio(1);
            Image.objectFit(ImageFit.Contain);
            Image.visibility(new BreakpointType({
                sm: Visibility.None,
                md: Visibility.None,
                lg: Visibility.Visible
            }).getValue(this.currentBreakpoint));
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Flex.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.songList[this.selectIndex].singer);
            Text.textAlign(TextAlign.Start);
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777321, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777321, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777319, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.fontColor({ "id": 16777274, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777470, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Text.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Text(PlayConstants.LYRICS_CONTENT)
            //   .fontSize(new BreakpointType({
            //     sm: $r('app.float.font_twenty'),
            //     md: $r('app.float.font_twenty'),
            //     lg: $r('app.float.font_twenty_four')
            //   }).getValue(this.currentBreakpoint))
            //   .fontColor($r("app.color.text_sixty_color"))
            //   .textAlign(TextAlign.Start)
            //   .width(StyleConstants.FULL_WIDTH)
            //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
            Scroll.create();
            // Text(PlayConstants.LYRICS_CONTENT)
            //   .fontSize(new BreakpointType({
            //     sm: $r('app.float.font_twenty'),
            //     md: $r('app.float.font_twenty'),
            //     lg: $r('app.float.font_twenty_four')
            //   }).getValue(this.currentBreakpoint))
            //   .fontColor($r("app.color.text_sixty_color"))
            //   .textAlign(TextAlign.Start)
            //   .width(StyleConstants.FULL_WIDTH)
            //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
            Scroll.width('100%');
            // Text(PlayConstants.LYRICS_CONTENT)
            //   .fontSize(new BreakpointType({
            //     sm: $r('app.float.font_twenty'),
            //     md: $r('app.float.font_twenty'),
            //     lg: $r('app.float.font_twenty_four')
            //   }).getValue(this.currentBreakpoint))
            //   .fontColor($r("app.color.text_sixty_color"))
            //   .textAlign(TextAlign.Start)
            //   .width(StyleConstants.FULL_WIDTH)
            //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
            Scroll.height(600);
            // Text(PlayConstants.LYRICS_CONTENT)
            //   .fontSize(new BreakpointType({
            //     sm: $r('app.float.font_twenty'),
            //     md: $r('app.float.font_twenty'),
            //     lg: $r('app.float.font_twenty_four')
            //   }).getValue(this.currentBreakpoint))
            //   .fontColor($r("app.color.text_sixty_color"))
            //   .textAlign(TextAlign.Start)
            //   .width(StyleConstants.FULL_WIDTH)
            //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
            Scroll.scrollBar(BarState.Off);
            // Text(PlayConstants.LYRICS_CONTENT)
            //   .fontSize(new BreakpointType({
            //     sm: $r('app.float.font_twenty'),
            //     md: $r('app.float.font_twenty'),
            //     lg: $r('app.float.font_twenty_four')
            //   }).getValue(this.currentBreakpoint))
            //   .fontColor($r("app.color.text_sixty_color"))
            //   .textAlign(TextAlign.Start)
            //   .width(StyleConstants.FULL_WIDTH)
            //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
            Scroll.margin({ top: { "id": 16777401, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                // Text(PlayConstants.LYRICS_CONTENT)
                //   .fontSize(new BreakpointType({
                //     sm: $r('app.float.font_twenty'),
                //     md: $r('app.float.font_twenty'),
                //     lg: $r('app.float.font_twenty_four')
                //   }).getValue(this.currentBreakpoint))
                //   .fontColor($r("app.color.text_sixty_color"))
                //   .textAlign(TextAlign.Start)
                //   .width(StyleConstants.FULL_WIDTH)
                //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("作词 : 宋冬野\n作曲 : 宋冬野\n编曲 : 韦伟\n让我再看你一遍\n从南到北\n像是被五环路蒙住的双眼\n请你再讲一遍\n关于那天\n抱着盒子的姑娘\n和擦汗的男人\n我知道 那些夏天\n就像青春一样回不来\n代替梦想的也只能是勉为其难\n我知道 吹过的牛逼\n也会随青春一笑了之\n让我困在城市里\n纪念你\n让我再尝一口\n秋天的酒\n一直往南方开\n不会太久\n让我再听一遍\n最美的那一句\n你回家了\n我在等你呢\n我知道 那些夏天\n就像青春一样回不来\n代替梦想的也只能是勉为其难\n我知道 吹过的牛逼\n也会随青春一笑了之\n让我困在城市里 纪念你\n我知道 那些夏天\n就像你一样回不来\n我也不会再对谁满怀期待\n我知道 这个世界\n每天都有太多遗憾\n所以你好 再见");
            Text.fontSize(new BreakpointType({
                sm: { "id": 16777325, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                md: { "id": 16777325, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                lg: { "id": 16777326, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            }).getValue(this.currentBreakpoint));
            Text.fontColor({ "id": 16777274, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.textAlign(TextAlign.Start);
            Text.width(StyleConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        // Text(PlayConstants.LYRICS_CONTENT)
        //   .fontSize(new BreakpointType({
        //     sm: $r('app.float.font_twenty'),
        //     md: $r('app.float.font_twenty'),
        //     lg: $r('app.float.font_twenty_four')
        //   }).getValue(this.currentBreakpoint))
        //   .fontColor($r("app.color.text_sixty_color"))
        //   .textAlign(TextAlign.Start)
        //   .width(StyleConstants.FULL_WIDTH)
        //   .margin({ top: $r('app.float.lyrics_text_margin_top') })
        Scroll.pop();
        Flex.pop();
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=LyricsComponent.js.map