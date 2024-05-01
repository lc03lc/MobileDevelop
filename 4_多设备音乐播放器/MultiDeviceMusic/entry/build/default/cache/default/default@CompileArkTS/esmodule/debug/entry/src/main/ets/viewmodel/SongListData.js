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
import { RouterUrlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/RouterUrlConstants';
const optionList = [
    { image: { "id": 16777527, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, text: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } },
    { image: { "id": 16777529, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, text: { "id": 16777228, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } },
    { image: { "id": 16777528, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, text: { "id": 16777226, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, action: () => {
            router.pushUrl({
                url: RouterUrlConstants.MUSIC_COMMENT
            }, router.RouterMode.Single);
        } },
    { image: { "id": 16777557, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, text: { "id": 16777247, "type": 10003, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" } }
];
class OptionItem {
    constructor() {
        this.image = { "id": 16777527, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" };
    }
}
export { optionList, OptionItem };
//# sourceMappingURL=SongListData.js.map