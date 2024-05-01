import { LiveConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/LiveConstants';
import { LiveStreamViewModel } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/LiveStreamViewModel';
export class LiveList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.scroller = new Scroller();
        this.__liveStreams = new ObservedPropertyObjectPU(new LiveStreamViewModel().getLiveStreamList(), this, "liveStreams");
        this.__currentBreakpoint = new ObservedPropertySimplePU(LiveConstants.CURRENT_BREAKPOINT, this, "currentBreakpoint");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.liveStreams !== undefined) {
            this.liveStreams = params.liveStreams;
        }
        if (params.currentBreakpoint !== undefined) {
            this.currentBreakpoint = params.currentBreakpoint;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__liveStreams.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__liveStreams.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get liveStreams() {
        return this.__liveStreams.get();
    }
    set liveStreams(newValue) {
        this.__liveStreams.set(newValue);
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
            GridRow.create({
                columns: {
                    sm: LiveConstants.FOUR_COLUMN,
                    md: LiveConstants.EIGHT_COLUMN,
                    lg: LiveConstants.TWELVE_COLUMN
                },
                breakpoints: {
                    value: [
                        LiveConstants.SMALL_DEVICE_TYPE,
                        LiveConstants.MIDDLE_DEVICE_TYPE,
                        LiveConstants.LARGE_DEVICE_TYPE
                    ]
                },
                gutter: { x: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } }
            });
            GridRow.onBreakpointChange((breakPoints) => {
                this.currentBreakpoint = breakPoints;
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
                    sm: LiveConstants.FOUR_COLUMN,
                    md: LiveConstants.SIX_COLUMN,
                    lg: LiveConstants.EIGHT_COLUMN
                },
                offset: {
                    sm: LiveConstants.ZERO_COLUMN,
                    md: LiveConstants.ONE_COLUMN,
                    lg: LiveConstants.TWO_COLUMN
                }
            });
            GridCol.margin({ left: { "id": 16777330, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, right: { "id": 16777331, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create(this.scroller);
            Scroll.align(Alignment.Top);
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({
                bottom: { "id": 16777452, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(LiveConstants.FULL_WIDTH_PERCENT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.LiveItem.bind(this)(item, index);
            };
            this.forEachUpdateFunction(elmtId, this.liveStreams, forEachItemGenFunction, (item, index) => index + JSON.stringify(item), true, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        GridCol.pop();
        GridRow.pop();
    }
    LiveItem(item, index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.Center });
            Stack.width(LiveConstants.FULL_WIDTH_PERCENT);
            Stack.margin({
                top: index === 0 ? { "id": 16777464, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : 0,
                bottom: { "id": 16777463, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(item.liveBackground);
            Image.size({ width: LiveConstants.FULL_WIDTH_PERCENT, height: { "id": 16777391, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.borderRadius({ "id": 16777390, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height({ "id": 16777391, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Column.padding({
                left: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777458, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777408, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777458, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777408, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height({ "id": 16777485, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            Row.alignItems(VerticalAlign.Top);
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777561, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.width({ "id": 16777488, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.height({ "id": 16777484, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ top: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777487, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777486, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height({ "id": 16777395, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height({ "id": 16777397, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.margin({ top: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777398, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777399, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(item.title);
            Text.fontColor({ "id": 16777279, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(LiveConstants.LIVE_TITLE_FONT_WEIGHT);
            Text.fontFamily(LiveConstants.LIVE_ITEM_TITLE_FONT_FAMILY);
            Text.fontSize({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            Row.height({ "id": 16777393, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777394, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(item.liveIntroduction);
            Text.fontFamily(LiveConstants.LIVE_ITEM_INTRODUCTION_FONT_FAMILY);
            Text.fontSize({ "id": 16777392, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontColor({ "id": 16777261, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(LiveConstants.LIVE_INTRODUCTION_FONT_WEIGHT);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=LiveList.js.map