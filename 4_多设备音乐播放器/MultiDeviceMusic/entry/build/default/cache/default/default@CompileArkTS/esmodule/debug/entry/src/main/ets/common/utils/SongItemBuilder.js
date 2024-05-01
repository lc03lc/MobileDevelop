import { Logger } from '@bundle:com.huawei.multidevicemusic/entry/ets/common/utils/Logger';
export default class SongItemBuilder {
    constructor() {
        this.context = AppStorage.Get('context');
        this.songItem = null;
    }
    async build(songItem) {
        this.songItem = songItem;
        if (!this.context) {
            return this.songItem;
        }
        let rawfileFd = await this.context.resourceManager.getRawFd(songItem.src)
            .catch((error) => {
            Logger.error(`resourceManager error cause : ${JSON.stringify(error)}`);
        });
        if (rawfileFd) {
            this.realUrl = rawfileFd;
        }
        else {
            Logger.error('get rawfileFd failed');
        }
        Logger.info('MediaAssetBuilder build realUrl:' + this.realUrl);
        return this.songItem;
    }
    getRealUrl() {
        return this.realUrl;
    }
    async release() {
        if (this.context && this.context !== null && this.songItem !== null) {
            this.context.resourceManager.closeRawFd(this.songItem.src);
        }
        this.songItem = null;
    }
}
//# sourceMappingURL=SongItemBuilder.js.map