const MusicList = [
    { id: 1, title: '安河桥', singer: '宋东野', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777492, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'anheqiaowave.mp3', index: 0 },
    { id: 2, title: '理想三旬', singer: '陈鸿宇', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777568, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'lixiangwav.mp3', index: 1 },
    { id: 3, title: '杀死那个石家庄人', singer: '万能青年旅店', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777574, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'shasiwave.mp3', index: 2 },
    { id: 4, title: '南山南', singer: '马頔', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777572, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'nanshanwave.mp3', index: 3 },
    { id: 5, title: '写给黄淮', singer: '邵帅', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777520, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 4 },
    { id: 6, title: '斑马斑马', singer: '宋东野', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777521, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 5 },
    { id: 7, title: '多想在平庸的生活拥抱', singer: '隔壁老樊', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777516, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 6 },
    { id: 8, title: '董小姐', singer: '宋东野', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777523, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 7 },
    { id: 9, title: '乌拉巴托的夜', singer: '安来宁', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777524, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 8 },
    { id: 10, title: '我记得', singer: '赵雷', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777509, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 9 },
    { id: 11, title: '莉莉安', singer: '宋东野', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777510, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 10 },
    { id: 12, title: '胡广生', singer: '任素汐', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777511, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 11 },
    { id: 13, title: '鼓楼', singer: '赵雷', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777512, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 12 },
    { id: 14, title: '玫瑰', singer: '贰佰', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777513, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 13 },
    { id: 15, title: '浪子回头', singer: '茄子蛋', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777514, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 14 },
    { id: 16, title: '向云端', singer: '小霞、海洋Bo', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777515, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 15 },
    { id: 17, title: '春风十里', singer: '鹿先森乐队', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777516, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 16 },
    { id: 18, title: '走马', singer: '陈粒', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777508, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 17 },
    { id: 19, title: '去大理', singer: '郝云', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777517, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 18 },
    { id: 20, title: '其实也一样', singer: '我是小树', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777512, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 19 },
    { id: 21, title: '想明白', singer: '小安安', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777519, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 20 },
    { id: 22, title: '你懂的', singer: '小安安', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777520, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 21 },
    { id: 23, title: '谁了解', singer: '小安安', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777521, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 22 },
    { id: 24, title: '白天', singer: '小安安', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777516, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 23 },
    { id: 25, title: '黑夜', singer: 'Gwyu-Hjjiyabn', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777514, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 24 },
    { id: 26, title: '春夏秋冬', singer: '名佚', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777515, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 25 },
    { id: 27, title: '一年四季', singer: '我是小树', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777516, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 26 },
    { id: 28, title: '朝雪', singer: '全村最帅', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777511, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 27 },
    { id: 29, title: '暮色', singer: '小安安', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777512, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 28 },
    { id: 30, title: '天下', singer: '我是小树', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777513, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 29 },
    { id: 31, title: '勇敢', singer: '小安安', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777514, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 30 },
    { id: 32, title: '安明', singer: '小安安', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777515, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 31 },
    { id: 33, title: '心安', singer: '小安安', mark: { "id": 16777562, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777516, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'dynamic.wav', index: 32 },
    { id: 34, title: '无归', singer: '小安安', mark: { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" },
        label: { "id": 16777510, "type": 20000, params: [], "bundleName": "com.huawei.multidevicemusic", "moduleName": "entry" }, src: 'boisterous.wav', index: 33 }
];
// const MusicList: SongItem[] = [
//   { id: 1, title: '江南', singer: '林俊杰', mark: $r('app.media.ic_vip'),
//     label: $r('app.media.anheqiao'), src: 'boisterous.wav', index:0},
//   { id: 2, title: '安河桥', singer: '宋东野', mark: $r('app.media.ic_sq'),
//     label: $r('app.media.lixiang'), src: 'dynamic.wav', index:1 },
// ]
export { MusicList };
//# sourceMappingURL=MusicListViewModel.js.map