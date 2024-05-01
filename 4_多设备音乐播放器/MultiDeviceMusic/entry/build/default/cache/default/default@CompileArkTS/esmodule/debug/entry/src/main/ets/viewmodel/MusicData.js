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
var MusicPlayMode;
(function (MusicPlayMode) {
    MusicPlayMode[MusicPlayMode["SINGLE_CYCLE"] = 0] = "SINGLE_CYCLE";
    MusicPlayMode[MusicPlayMode["ORDER"] = 1] = "ORDER";
    MusicPlayMode[MusicPlayMode["RANDOM"] = 2] = "RANDOM";
})(MusicPlayMode || (MusicPlayMode = {}));
var AudioPlayerState;
(function (AudioPlayerState) {
    AudioPlayerState[AudioPlayerState["IDLE"] = 0] = "IDLE";
    AudioPlayerState[AudioPlayerState["INITIALIZED"] = 1] = "INITIALIZED";
    AudioPlayerState[AudioPlayerState["LOAD"] = 2] = "LOAD";
    AudioPlayerState[AudioPlayerState["PREPARED"] = 3] = "PREPARED";
    AudioPlayerState[AudioPlayerState["PLAY"] = 4] = "PLAY";
    AudioPlayerState[AudioPlayerState["PAUSE"] = 5] = "PAUSE";
    AudioPlayerState[AudioPlayerState["STOP"] = 6] = "STOP";
    AudioPlayerState[AudioPlayerState["ERROR"] = 7] = "ERROR";
    AudioPlayerState[AudioPlayerState["COMPLETED"] = 8] = "COMPLETED";
    AudioPlayerState[AudioPlayerState["RELEASED"] = 9] = "RELEASED";
    AudioPlayerState[AudioPlayerState["PROGRESS_SPEED"] = 10] = "PROGRESS_SPEED";
    AudioPlayerState[AudioPlayerState["TIME_UPDATE"] = 11] = "TIME_UPDATE";
    AudioPlayerState[AudioPlayerState["VOLUME_CHANGE"] = 12] = "VOLUME_CHANGE";
    AudioPlayerState[AudioPlayerState["UNKNOWN"] = 13] = "UNKNOWN";
})(AudioPlayerState || (AudioPlayerState = {}));
export { MusicPlayMode, AudioPlayerState };
//# sourceMappingURL=MusicData.js.map