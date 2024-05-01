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
import { PlayControlModel } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/PlayControlModel';
import { ControlConstants } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/constants/ControlConstants';
const playImage = [
    new PlayControlModel({ "id": 16777529, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ''),
    new PlayControlModel({ "id": 16777555, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'review'),
    new PlayControlModel({ "id": 16777545, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ''),
    new PlayControlModel({ "id": 16777556, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ''),
    new PlayControlModel({ "id": 16777535, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, '')
];
const playControl = [
    new PlayControlModel({ "id": 16777534, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ControlConstants.PLAY_MODE),
    new PlayControlModel({ "id": 16777532, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ControlConstants.PREVIOUS),
    new PlayControlModel({ "id": 16777552, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ControlConstants.PLAY),
    new PlayControlModel({ "id": 16777546, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ControlConstants.NEXT),
    new PlayControlModel({ "id": 16777544, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, ControlConstants.PLAY_LIST)
];
export { playImage, playControl };
//# sourceMappingURL=PlayData.js.map