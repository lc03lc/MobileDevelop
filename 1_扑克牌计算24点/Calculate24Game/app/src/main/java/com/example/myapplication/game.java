package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Toast;

import java.util.List;

public class game extends AppCompatActivity {
    // 定义四个位置的数字
    private int position1 = -1;
    private int position2 = -1;
    private int position3 = -1;
    private int position4 = -1;
    // 定义待选择位置
    private ImageButton cardSelect1;
    private ImageButton cardSelect2;
    private ImageButton cardSelect3;
    private ImageButton cardSelect4;
    private int countCard = 0;  // 统计已经选择的卡牌数量
    private StringBuilder result = new StringBuilder();     // 24点计算结果


    private void showAlertDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);

        // 设置对话框标题和消息
        builder.setTitle("运算结果");
        builder.setMessage(result);

        // 设置确定按钮
        builder.setPositiveButton("确定", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                // 在用户点击确定按钮时执行的操作
                // 可以在这里添加你的逻辑
                countCard = 0;      // 已选择卡牌数量归零
                // 四个位置的图片还原
                cardSelect1.setImageResource(R.drawable.cardselect);
                cardSelect2.setImageResource(R.drawable.cardselect);
                cardSelect3.setImageResource(R.drawable.cardselect);
                cardSelect4.setImageResource(R.drawable.cardselect);
            }
        });

        // 创建并显示对话框
        AlertDialog dialog = builder.create();
        dialog.show();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game);

        cardSelect1 = findViewById(R.id.cardselect1);
        cardSelect2 = findViewById(R.id.cardselect2);
        cardSelect3 = findViewById(R.id.cardselect3);
        cardSelect4 = findViewById(R.id.cardselect4);

        // 分别遍历不同花色的卡牌，对每个卡牌的点击赋予点击事件
        for (int i = 1; i <= 13; i++) {
            final int cardPosition = i;
            final int drawableResource = getResources().getIdentifier("club" + i, "drawable", getPackageName());

            ImageButton cardButton = findViewById(getResources().getIdentifier("club" + i, "id", getPackageName()));
            cardButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (countCard < 4) {
                        countCard++;    // 已选择卡牌数量增加
                        switch (countCard) {
                            case 1:
                                position1 = cardPosition;   // 位置1对应的值变为卡牌值
                                cardSelect1.setImageResource(drawableResource);     // 待选位置1图片变为卡牌图片
                                break;
                            case 2:
                                position2 = cardPosition;
                                cardSelect2.setImageResource(drawableResource);
                                break;
                            case 3:
                                position3 = cardPosition;
                                cardSelect3.setImageResource(drawableResource);
                                break;
                            case 4:
                                position4 = cardPosition;
                                cardSelect4.setImageResource(drawableResource);
                                break;
                        }
                    }
                }
            });
        }

        for (int i = 1; i <= 13; i++) {
            final int cardPosition = i;
            final int drawableResource = getResources().getIdentifier("diamond" + i, "drawable", getPackageName());

            ImageButton cardButton = findViewById(getResources().getIdentifier("diamond" + i, "id", getPackageName()));
            cardButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (countCard < 4) {
                        countCard++;
                        switch (countCard) {
                            case 1:
                                position1 = cardPosition;
                                cardSelect1.setImageResource(drawableResource);
                                break;
                            case 2:
                                position2 = cardPosition;
                                cardSelect2.setImageResource(drawableResource);
                                break;
                            case 3:
                                position3 = cardPosition;
                                cardSelect3.setImageResource(drawableResource);
                                break;
                            case 4:
                                position4 = cardPosition;
                                cardSelect4.setImageResource(drawableResource);
                                break;
                        }
                    }
                }
            });
        }

        for (int i = 1; i <= 13; i++) {
            final int cardPosition = i;
            final int drawableResource = getResources().getIdentifier("heart" + i, "drawable", getPackageName());

            ImageButton cardButton = findViewById(getResources().getIdentifier("heart" + i, "id", getPackageName()));
            cardButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (countCard < 4) {
                        countCard++;
                        switch (countCard) {
                            case 1:
                                position1 = cardPosition;
                                cardSelect1.setImageResource(drawableResource);
                                break;
                            case 2:
                                position2 = cardPosition;
                                cardSelect2.setImageResource(drawableResource);
                                break;
                            case 3:
                                position3 = cardPosition;
                                cardSelect3.setImageResource(drawableResource);
                                break;
                            case 4:
                                position4 = cardPosition;
                                cardSelect4.setImageResource(drawableResource);
                                break;
                        }
                    }
                }
            });
        }

        for (int i = 1; i <= 13; i++) {
            final int cardPosition = i;
            final int drawableResource = getResources().getIdentifier("spade" + i, "drawable", getPackageName());

            ImageButton cardButton = findViewById(getResources().getIdentifier("spade" + i, "id", getPackageName()));
            cardButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    if (countCard < 4) {
                        countCard++;
                        switch (countCard) {
                            case 1:
                                position1 = cardPosition;
                                cardSelect1.setImageResource(drawableResource);
                                break;
                            case 2:
                                position2 = cardPosition;
                                cardSelect2.setImageResource(drawableResource);
                                break;
                            case 3:
                                position3 = cardPosition;
                                cardSelect3.setImageResource(drawableResource);
                                break;
                            case 4:
                                position4 = cardPosition;
                                cardSelect4.setImageResource(drawableResource);
                                break;
                        }
                    }
                }
            });
        }

        // 绑定重试事件
        ImageButton retry = findViewById(R.id.retry);
        retry.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                countCard = 0;      // 已选择卡牌数量归零
                // 四个位置的图片还原
                cardSelect1.setImageResource(R.drawable.cardselect);
                cardSelect2.setImageResource(R.drawable.cardselect);
                cardSelect3.setImageResource(R.drawable.cardselect);
                cardSelect4.setImageResource(R.drawable.cardselect);
            }
        });

        // 绑定成功事件
        ImageButton success = findViewById(R.id.success);
        success.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (countCard == 4) {
                    calculate24 cal = new calculate24();
                    int nums[] = {position1, position2, position3, position4};
                    List<String> res = cal.find24Expressions(nums);
                    if(res.isEmpty()){
                        result = new StringBuilder("你选择的四张卡牌无法计算得到24点，再试试吧。");
                    }else{
                        int cnt = res.size();
                        for(int i = 0; i<cnt; i++){
                            result.append(i+1).append("、").append(res.get(i)).append("\n");
                        }
                        result.append("一共有 "+cnt+" 种方法计算24点。");
                    }
                    showAlertDialog();
                    result = new StringBuilder();
                } else {
                    Toast.makeText(game.this, R.string.success_tip, Toast.LENGTH_SHORT).show();
                }
            }
        });

    }
}