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
/**
 * Music information entity class.
 */
export class SongItem {
    constructor() {
        /**
         * Primary key ID.
         */
        this.id = 0;
        /**
         * Music name.
         */
        this.title = '';
        /**
         * Music author name.
         */
        this.singer = '';
        /**
         * Music logo information.
         */
        this.mark = { "id": 16777508, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" };
        /**
         * Music avatar information.
         */
        this.label = { "id": 16777508, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" };
        /**
         * Music file path information.
         */
        this.src = '';
        /**
         * Index of the current music list.
         */
        this.index = 0;
    }
}
//# sourceMappingURL=SongData.js.map