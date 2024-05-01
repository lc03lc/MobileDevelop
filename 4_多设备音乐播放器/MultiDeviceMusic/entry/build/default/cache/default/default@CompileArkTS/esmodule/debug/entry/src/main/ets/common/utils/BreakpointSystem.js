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
import mediaQuery from '@ohos:mediaquery';
import { BreakpointConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/BreakpointConstants';
export class BreakpointType {
    constructor(option) {
        this.options = option;
    }
    getValue(currentPoint) {
        return this.options[currentPoint];
    }
}
export class BreakpointSystem {
    constructor() {
        this.currentBreakpoint = BreakpointConstants.BREAKPOINT_SM;
        this.smListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_SM);
        this.mdListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_MD);
        this.lgListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_LG);
        this.isBreakpointSM = (mediaQueryResult) => {
            if (mediaQueryResult.matches) {
                this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_SM);
            }
        };
        this.isBreakpointMD = (mediaQueryResult) => {
            if (mediaQueryResult.matches) {
                this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_MD);
            }
        };
        this.isBreakpointLG = (mediaQueryResult) => {
            if (mediaQueryResult.matches) {
                this.updateCurrentBreakpoint(BreakpointConstants.BREAKPOINT_LG);
            }
        };
    }
    updateCurrentBreakpoint(breakpoint) {
        if (this.currentBreakpoint !== breakpoint) {
            this.currentBreakpoint = breakpoint;
            AppStorage.SetOrCreate(BreakpointConstants.CURRENT_BREAKPOINT, this.currentBreakpoint);
        }
    }
    register() {
        this.smListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_SM);
        this.smListener.on('change', this.isBreakpointSM);
        this.mdListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_MD);
        this.mdListener.on('change', this.isBreakpointMD);
        this.lgListener = mediaQuery.matchMediaSync(BreakpointConstants.RANGE_LG);
        this.lgListener.on('change', this.isBreakpointLG);
    }
    unregister() {
        this.smListener.off('change', this.isBreakpointSM);
        this.mdListener.off('change', this.isBreakpointMD);
        this.lgListener.off('change', this.isBreakpointLG);
    }
}
//# sourceMappingURL=BreakpointSystem.js.map