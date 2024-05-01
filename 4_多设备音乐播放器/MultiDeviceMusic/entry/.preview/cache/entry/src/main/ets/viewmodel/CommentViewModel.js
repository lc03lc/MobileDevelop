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
import { Comment } from '@bundle:com.huawei.multidevicemusic/entry/ets/viewmodel/Comment';
/**
 * Review data generation class.
 */
class CommentViewModel {
    /**
     * Get great review data.
     *
     * @returns Comment array.
     */
    getWonderfulReview() {
        let commentList = [];
        commentList.push(new Comment('139******92', '突然发现系统自带的音乐软件那么强大', '2021年9月7日', { "id": 16777553, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('ke歌可Qi', '单曲循环到天明', '2021年9月4日', { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('Change', '这里歌曲多，人说话又好听，真的太喜欢这里了', '2021年9月1日', { "id": 16777552, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('可可的家', '真是太好听了', '2021年9月7日', { "id": 16777579, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('Nice', '最爱的歌之一啦，超好听', '2021年9月4日', { "id": 16777561, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('没有的世界', '这里歌曲多，人说话又好听', '2021年9月1日', { "id": 16777571, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('蓝色的大海', '在海边听这首歌有另外一种意境', '2021年9月1日', { "id": 16777566, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, [
            new Comment('不熬夜了', '身临其境', '2021年9月7日', { "id": 16777553, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" })
        ]));
        commentList.push(new Comment('伦本伦', '同听一首歌，我们就是好盆友', '2021年9月1日', { "id": 16777537, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, [
            new Comment('今夜小雨', '高考一毕业了，我又会在这里还听这首歌，感觉是一样的热血澎湃', '2021年9月7日', { "id": 16777301, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" })
        ]));
        return commentList;
    }
    /**
     * Obtain the latest comment data.
     *
     * @returns Comment array.
     */
    getNewComment() {
        let commentList = [];
        commentList.push(new Comment('139******92', '突然发现系统自带的音乐软件那么强大', '2021年9月7日', { "id": 16777301, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('133******22', '最爱的歌之一啦，超好听', '2021年9月4日', { "id": 16777300, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('159******88', '突然发现音乐的力量太治愈了', '2021年9月1日', { "id": 16777229, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        commentList.push(new Comment('159******88', '在海边听这首歌有另外一种意境', '2021年9月1日', { "id": 16777536, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }));
        return commentList;
    }
}
export default new CommentViewModel();
//# sourceMappingURL=CommentViewModel.js.map