package com.example.myapplication.slice;

import com.example.myapplication.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.Component;
import ohos.agp.components.Image;
import ohos.agp.window.service.WindowManager;

public class MainAbilitySlice extends AbilitySlice {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_main);
        getWindow().addFlags(
                WindowManager.LayoutConfig.MARK_TRANSLUCENT_STATUS|
                WindowManager.LayoutConfig.MARK_TRANSLUCENT_NAVIGATION);

        // 获取“开始游戏”图片组件
        Image start = (Image) findComponentById(ResourceTable.Id_start);
        // 为“开始游戏”图片组件绑定点击事件，跳转到游戏界面
        start.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                present(new SelectAbilitySlice(), new Intent());
            }
        });

        // 获取“游戏规则”图片组件
        Image rule = (Image) findComponentById(ResourceTable.Id_rule);
        // 为“游戏规则”图片组件绑定点击事件，跳转到游戏规则界面
        rule.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                present(new RuleAbilitySlice(), new Intent());
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
