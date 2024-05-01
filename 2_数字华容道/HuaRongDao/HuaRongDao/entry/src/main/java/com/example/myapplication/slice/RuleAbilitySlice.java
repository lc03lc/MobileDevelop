package com.example.myapplication.slice;

import com.example.myapplication.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.Component;
import ohos.agp.components.Image;

public class RuleAbilitySlice extends AbilitySlice {
    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_rule);

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
