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
                gutter: { x: { "id": 16777366, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } }
            });
            GridRow.debugLine("view/LiveList.ets(27:5)");
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
            GridCol.debugLine("view/LiveList.ets(42:7)");
            GridCol.margin({ left: { "id": 16777364, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, right: { "id": 16777365, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                GridCol.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create(this.scroller);
            Scroll.debugLine("view/LiveList.ets(54:9)");
            Scroll.align(Alignment.Top);
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({
                bottom: { "id": 16777486, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/LiveList.ets(55:11)");
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
            Stack.debugLine("view/LiveList.ets(77:5)");
            Stack.width(LiveConstants.FULL_WIDTH_PERCENT);
            Stack.margin({
                top: index === 0 ? { "id": 16777498, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : 0,
                bottom: { "id": 16777497, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(item.liveBackground);
            Image.debugLine("view/LiveList.ets(78:7)");
            Image.size({ width: LiveConstants.FULL_WIDTH_PERCENT, height: { "id": 16777425, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Image.borderRadius({ "id": 16777424, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/LiveList.ets(82:7)");
            Column.height({ "id": 16777425, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Column.padding({
                left: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777492, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
                right: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777492, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/LiveList.ets(83:9)");
            Row.height({ "id": 16777519, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
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
            Image.create({ "id": 16777538, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.debugLine("view/LiveList.ets(84:11)");
            Image.width({ "id": 16777522, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.height({ "id": 16777518, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Image.margin({ top: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777521, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777520, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/LiveList.ets(95:9)");
            Column.height({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
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
            Row.debugLine("view/LiveList.ets(96:11)");
            Row.height({ "id": 16777431, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.margin({ top: this.currentBreakpoint === LiveConstants.CURRENT_BREAKPOINT
                    ? { "id": 16777432, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } : { "id": 16777433, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(item.title);
            Text.debugLine("view/LiveList.ets(97:13)");
            Text.fontColor({ "id": 16777258, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontWeight(LiveConstants.LIVE_TITLE_FONT_WEIGHT);
            Text.fontFamily(LiveConstants.LIVE_ITEM_TITLE_FONT_FAMILY);
            Text.fontSize({ "id": 16777430, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
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
            Row.debugLine("view/LiveList.ets(108:11)");
            Row.width(LiveConstants.FULL_WIDTH_PERCENT);
            Row.height({ "id": 16777427, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(item.liveIntroduction);
            Text.debugLine("view/LiveList.ets(109:13)");
            Text.fontFamily(LiveConstants.LIVE_ITEM_INTRODUCTION_FONT_FAMILY);
            Text.fontSize({ "id": 16777426, "type": 10002, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
            Text.fontColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" });
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