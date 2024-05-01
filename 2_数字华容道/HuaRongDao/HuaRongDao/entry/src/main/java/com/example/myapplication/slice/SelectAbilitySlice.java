package com.example.myapplication.slice;

import com.example.myapplication.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.Component;
import ohos.agp.components.Image;
import ohos.global.resource.ResourceManager;
import ohos.media.image.PixelMap;

public class SelectAbilitySlice extends AbilitySlice {
    private int cur = 1;    // 记录当前图片，实现图片转换

    @Override
    public void onStart(Intent intent) {
        cur = 1;
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_map);

        Image curImage = findComponentById(ResourceTable.Id_imageSlider);
        Image curRank = findComponentById(ResourceTable.Id_rank);
        curImage.setPixelMap(ResourceTable.Media_image_1);
        curRank.setPixelMap(ResourceTable.Media_lv1);

        // 绑定向右事件
        Image toRight = findComponentById(ResourceTable.Id_toRight);
        toRight.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                if (cur == 1) {     // 第二张图
                    cur += 1;
                    curImage.setPixelMap(ResourceTable.Media_image_2);
                    curRank.setPixelMap(ResourceTable.Media_lv1);
                } else if (cur == 2) {      // 第三张图
                    cur += 1;
                    curImage.setPixelMap(ResourceTable.Media_image_3);
                    curRank.setPixelMap(ResourceTable.Media_lv2);
                } else if (cur == 3) {     // 第三张图
                    cur += 1;
                    curImage.setPixelMap(ResourceTable.Media_image_4);
                    curRank.setPixelMap(ResourceTable.Media_lv2);
                } else if (cur == 4) {      // 第四张图
                    cur += 1;
                    curImage.setPixelMap(ResourceTable.Media_image_5);
                    curRank.setPixelMap(ResourceTable.Media_lv3);
                }
            }
        });

        // 绑定向左事件
        Image toLeft = findComponentById(ResourceTable.Id_toLeft);
        toLeft.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                if (cur == 3) {     // 第二张图
                    cur -= 1;
                    curImage.setPixelMap(ResourceTable.Media_image_2);
                    curRank.setPixelMap(ResourceTable.Media_lv1);
                } else if (cur == 2) {      // 第一张图
                    cur -= 1;
                    curImage.setPixelMap(ResourceTable.Media_image_1);
                    curRank.setPixelMap(ResourceTable.Media_lv1);
                } else if (cur == 4) {      // 第三张图
                    cur -= 1;
                    curImage.setPixelMap(ResourceTable.Media_image_3);
                    curRank.setPixelMap(ResourceTable.Media_lv2);
                }else if (cur == 5) {      // 第四张图
                    cur -= 1;
                    curImage.setPixelMap(ResourceTable.Media_image_4);
                    curRank.setPixelMap(ResourceTable.Media_lv3);
                }
            }
        });


        // 获取“选好了”图片组件
        Image start = (Image) findComponentById(ResourceTable.Id_selectOver);
        // 为“选好了”图片组件绑定点击事件，跳转到游戏界面
        start.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                if (cur == 1) {
                    present(new GameAbilitySlice(), new Intent());
                } else if (cur == 2) {
                    present(new GameAbilitySlice2(), new Intent());
                } else if (cur == 3) {
                    present(new GameAbilitySlice3(), new Intent());
                } else if (cur == 4) {
                    present(new GameAbilitySlice4(), new Intent());
                } else if (cur == 5) {
                    present(new GameAbilitySlice5(), new Intent());
                }
            }
        });

        // 获取“返回首页”图片组件
        Image returnHome = (Image) findComponentById(ResourceTable.Id_returnHome);
        // 为“返回首页”图片组件绑定点击事件，跳转到返回首页界面
        returnHome.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                present(new MainAbilitySlice(), new Intent());
            }
        });
    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }
}
