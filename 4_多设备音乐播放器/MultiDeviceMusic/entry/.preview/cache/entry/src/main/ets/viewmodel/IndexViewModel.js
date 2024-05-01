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
import IndexItem from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/IndexItem';
/**
 * Home page information data processing class.
 */
class IndexViewModel {
    /**
     * Data information on the home page.
     *
     * @returns IndexItem array.
     */
    getIndexItemList() {
        let IndexItemList = [];
        IndexItemList.push(new IndexItem("民谣歌曲", "民谣是一种源自民间的音乐风格，通常以简单的旋律、质朴的歌词和传统的乐器为特征", "进入歌单", { "id": 16777563, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MusicList'));
        IndexItemList.push(new IndexItem("流行爵士", "流行爵士是一种结合了流行音乐元素和爵士乐的风格，通常具有轻快的旋律、复杂的和声和即兴演奏", "进入歌单", { "id": 16777573, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MusicList2'));
        IndexItemList.push(new IndexItem("电子流行", "电子流行融合了电子音乐和流行元素，具有强烈的节奏和现代的声音设计", "进入歌单", { "id": 16777535, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MusicList3'));
        IndexItemList.push(new IndexItem("古典风格", "古典音乐具有复杂的结构和丰富的情感表达，是欧洲传统音乐的一部分，包括交响乐、协奏曲等形式", "进入歌单", { "id": 16777313, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MusicList4'));
        IndexItemList.push(new IndexItem("世界音乐", "世界音乐涵盖了来自世界各地的不同文化和传统音乐风格，创造出多元化和富有特色的声音", "进入歌单", { "id": 16777549, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MusicList'));
        IndexItemList.push(new IndexItem("视频频道", "为你准备了丰富的视频栏目，你一定会感兴趣的，快来看看吧！", "进入频道", { "id": 16777261, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/Live'));
        IndexItemList.push(new IndexItem("我的收藏", "你都珍藏了哪些音乐呢？快来看看吧", "打开收藏", { "id": 16777298, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, 'pages/MyPage'));
        return IndexItemList;
    }
}
export default new IndexViewModel();
//# sourceMappingURL=IndexViewModel.js.map