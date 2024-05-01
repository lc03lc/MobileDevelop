package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private Button StartButton;     // 定义首页中开始游戏按钮

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        StartButton = findViewById(R.id.startButton);   // 绑定界面中开始游戏按钮
        StartButton.setOnClickListener(new View.OnClickListener() {     // 为开始按绑定点击事件
            @Override
            public void onClick(View view) {
                // 跳转到游戏界面
                Intent intent = new Intent(MainActivity.this, game.class);
                startActivity(intent);
            }
        });


    }
}