package com.example.myapplication.slice;

import com.example.myapplication.ResourceTable;
import ohos.aafwk.ability.AbilitySlice;
import ohos.aafwk.content.Intent;
import ohos.agp.components.Component;
import ohos.agp.components.Image;
import ohos.agp.components.Text;
import ohos.agp.components.TickTimer;
import ohos.agp.window.dialog.CommonDialog;
import ohos.agp.window.dialog.IDialog;

public class GameAbilitySlice4 extends AbilitySlice {
    Image ib11, ib12, ib13, ib14, ib21, ib22, ib23, ib24, ib31, ib32, ib33, ib34, ib41, ib42, ib43, ib44;     // 定义图片碎片
    Image reset;       // 定义重试按钮
    Image finish;       // 定义结束按钮

    private int imageX = 4;     // 每行图片数量
    private int imageY = 4;     // 定义每列数量
    private int imageCount = imageX * imageY;       // 定义图片总数
    private int blackSwap = imageCount - 1;         // 定义缺少图片的位置，默认最后一个
    private int blackImgid = ResourceTable.Id_pic_ib44_4;        // 定义缺少图片的id，默认是最后一个
    private int steps;      // 定义步骤计数
    private TickTimer tickTimer;        // 定义计时器
    private int[] image = {     // 存放图片碎片的数组
            ResourceTable.Media_image_4_11, ResourceTable.Media_image_4_12, ResourceTable.Media_image_4_13, ResourceTable.Media_image_4_14,
            ResourceTable.Media_image_4_21, ResourceTable.Media_image_4_22, ResourceTable.Media_image_4_23, ResourceTable.Media_image_4_24,
            ResourceTable.Media_image_4_31, ResourceTable.Media_image_4_32, ResourceTable.Media_image_4_33, ResourceTable.Media_image_4_34,
            ResourceTable.Media_image_4_41, ResourceTable.Media_image_4_42, ResourceTable.Media_image_4_43, ResourceTable.Media_image_4_44,
    };

    private int[] imageIndex = new int[image.length];       // 定义图片下标数组，随机化排列顺序
    private int[] tmpImageIndex = new int[image.length];        // 定义另一个下标数组保存信息
    private int giveUpFlag;     // 定义放弃按钮

    @Override
    public void onStart(Intent intent) {
        super.onStart(intent);
        super.setUIContent(ResourceTable.Layout_ability_game4);

        initComponent();
        disruptRandom();
    }

    @Override
    public void onActive() {
        super.onActive();
    }

    @Override
    public void onForeground(Intent intent) {
        super.onForeground(intent);
    }

    private void disruptRandom() {      //随机打乱数组中的元素，以不规则的形式进行图片显示
        for (int i = 0; i < imageIndex.length; i++) {
            imageIndex[i] = i;
        }
        //规定20次，随机选择两个角标对应的值进行交换
        int rand1, rand2;
        for (int j = 0; j < 20; j++) {
            //随机生成第一个角标，生成0—8之间的随机数
            rand1 = (int) (Math.random() * (imageIndex.length - 1)); //Math.random()生成的是0—1之间的随机数，再乘以最大值减去最小值（即8-0），最后整体加上最小值0
            //第二次随机生成的角标不能和第一次相同，如果相同就不方便交换
            do {
                rand2 = (int) (Math.random() * (imageIndex.length - 1));
            } while (rand1 == rand2);
            //交换数组两个角标上对应的值
            swap(rand1, rand2);
        }
        // 将随即后的数组存储下来
        System.arraycopy(imageIndex, 0, tmpImageIndex, 0, imageIndex.length);

        //随机排列到指定的控件上
        ib11.setPixelMap(image[imageIndex[0]]);
        ib12.setPixelMap(image[imageIndex[1]]);
        ib13.setPixelMap(image[imageIndex[2]]);
        ib14.setPixelMap(image[imageIndex[3]]);
        ib21.setPixelMap(image[imageIndex[4]]);
        ib22.setPixelMap(image[imageIndex[5]]);
        ib23.setPixelMap(image[imageIndex[6]]);
        ib24.setPixelMap(image[imageIndex[7]]);
        ib31.setPixelMap(image[imageIndex[8]]);
        ib32.setPixelMap(image[imageIndex[9]]);
        ib33.setPixelMap(image[imageIndex[10]]);
        ib34.setPixelMap(image[imageIndex[11]]);
        ib41.setPixelMap(image[imageIndex[12]]);
        ib42.setPixelMap(image[imageIndex[13]]);
        ib43.setPixelMap(image[imageIndex[14]]);
        ib44.setPixelMap(image[imageIndex[15]]);
    }

    private void swap(int rand1, int rand2) {        //交换数组指定角标的数据
        int temp = imageIndex[rand1];
        imageIndex[rand1] = imageIndex[rand2];
        imageIndex[rand2] = temp;
    }

    private void initComponent() {       // 初始化控件
        ib11 = findComponentById(ResourceTable.Id_pic_ib11_4);
        ib12 = findComponentById(ResourceTable.Id_pic_ib12_4);
        ib13 = findComponentById(ResourceTable.Id_pic_ib13_4);
        ib14 = findComponentById(ResourceTable.Id_pic_ib14_4);
        ib21 = findComponentById(ResourceTable.Id_pic_ib21_4);
        ib22 = findComponentById(ResourceTable.Id_pic_ib22_4);
        ib23 = findComponentById(ResourceTable.Id_pic_ib23_4);
        ib24 = findComponentById(ResourceTable.Id_pic_ib24_4);
        ib31 = findComponentById(ResourceTable.Id_pic_ib31_4);
        ib32 = findComponentById(ResourceTable.Id_pic_ib32_4);
        ib33 = findComponentById(ResourceTable.Id_pic_ib33_4);
        ib34 = findComponentById(ResourceTable.Id_pic_ib34_4);
        ib41 = findComponentById(ResourceTable.Id_pic_ib41_4);
        ib42 = findComponentById(ResourceTable.Id_pic_ib42_4);
        ib43 = findComponentById(ResourceTable.Id_pic_ib43_4);
        ib44 = findComponentById(ResourceTable.Id_pic_ib44_4);
        finish = findComponentById(ResourceTable.Id_finish);
        reset = findComponentById(ResourceTable.Id_reset);

        ib11.setVisibility(Component.VISIBLE);
        ib12.setVisibility(Component.VISIBLE);
        ib13.setVisibility(Component.VISIBLE);
        ib14.setVisibility(Component.VISIBLE);
        ib21.setVisibility(Component.VISIBLE);
        ib22.setVisibility(Component.VISIBLE);
        ib23.setVisibility(Component.VISIBLE);
        ib24.setVisibility(Component.VISIBLE);
        ib31.setVisibility(Component.VISIBLE);
        ib32.setVisibility(Component.VISIBLE);
        ib33.setVisibility(Component.VISIBLE);
        ib34.setVisibility(Component.VISIBLE);
        ib41.setVisibility(Component.VISIBLE);
        ib42.setVisibility(Component.VISIBLE);
        ib43.setVisibility(Component.VISIBLE);
        ib44.setVisibility(Component.INVISIBLE);

        // 重置放弃按钮
        giveUpFlag = 0;
        finish.setPixelMap(ResourceTable.Media_finish);
        // 重置步骤和计时器
        steps = 0;
        tickTimer = findComponentById(ResourceTable.Id_time_string);
        tickTimer.setBaseTime(System.currentTimeMillis());
        tickTimer.start();

        // 为各个控件绑定点击事件
        ib11.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib11_4, 0);
            }
        });
        ib12.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib12_4, 1);
            }
        });
        ib13.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib13_4, 2);
            }
        });
        ib14.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib14_4, 3);
            }
        });
        ib21.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib21_4, 4);
            }
        });
        ib22.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib22_4, 5);
            }
        });
        ib23.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib23_4, 6);
            }
        });
        ib24.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib24_4, 7);
            }
        });
        ib31.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib31_4, 8);
            }
        });
        ib32.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib32_4, 9);
            }
        });
        ib33.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib33_4, 10);
            }
        });
        ib34.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib34_4, 11);
            }
        });
        ib41.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib41_4, 12);
            }
        });
        ib42.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib42_4, 13);
            }
        });
        ib43.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib43_4, 14);
            }
        });
        ib44.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                move(ResourceTable.Id_pic_ib44_4, 15);
            }
        });

        // 绑定放弃按钮
        finish.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                if (giveUpFlag == 0) {
                    giveUp();
                    finish.setPixelMap(ResourceTable.Media_leave);
                    giveUpFlag = 1;
                } else {
                    present(new SelectAbilitySlice(), new Intent());
                }

            }
        });

        // 绑定重试按钮
        reset.setClickedListener(new Component.ClickedListener() {
            @Override
            public void onClick(Component component) {
                restart();
            }
        });

    }

    public void move(int imageId, int site) {
        int siteX = site / imageX;        //判断选中的图片在第几行，取整来判断
        int siteY = site % imageY;        //判断选中的图片在第几列，取整来判断
        // 获取空白区域的坐标
        int blackX = blackSwap / imageX;
        int blackY = blackSwap % imageY;

        // 判断移动的条件
        int x = Math.abs(siteX - blackX);
        int y = Math.abs(siteY - blackY);
        if ((x == 0 && y == 1) || (x == 1 && y == 0)) {
            Image currentImage = findComponentById(imageId);      // 通过id查找到这个可以移动图片控件
            currentImage.setVisibility(Component.INVISIBLE);      // 该可移动按钮不在显示图片
            Image blackImage = findComponentById(blackImgid);     // 查找空白区域的按钮
            blackImage.setPixelMap(image[imageIndex[site]]);      // 将空白按钮设置为显示图片
            blackImage.setVisibility(Component.VISIBLE);        // 移动之前是不可见的，移动之后将控件设置为可见
            // 上面的交换并没有存在数组之中，要调用swap函数，将改变角标的过程记录在存储图片位置的数组当中
            swap(site, blackSwap);
            steps += 1;
            //新的空白区域位置更新
            blackSwap = site;
            blackImgid = imageId;
        }
        Text step_string = findComponentById(ResourceTable.Id_step_string);
        step_string.setText(Integer.toString(steps));
        //判断本次移动后是否完成拼图游戏
        judgeGameOver();
    }

    private void judgeGameOver() {      // 判断游戏是否结束
        boolean loop = true;      // 定义标志位
        //对存放图片角标的数组imageIndex进行判断
        for (int i = 0; i < imageIndex.length; i++) {
            if (imageIndex[i] != i) {
                loop = false;
                break;
            }
        }
        if (loop) {
            //拼图成功
            ib11.setClickable(false);
            ib12.setClickable(false);
            ib13.setClickable(false);
            ib14.setClickable(false);
            ib21.setClickable(false);
            ib22.setClickable(false);
            ib23.setClickable(false);
            ib24.setClickable(false);
            ib31.setClickable(false);
            ib32.setClickable(false);
            ib33.setClickable(false);
            ib34.setClickable(false);
            ib41.setClickable(false);
            ib42.setClickable(false);
            ib43.setClickable(false);
            ib44.setClickable(false);

            // 显示之前隐藏的拼图
            ib44.setPixelMap(image[15]);
            ib44.setVisibility(Component.VISIBLE);
            // 弹出提示框
            CommonDialog cd = new CommonDialog(this);
            cd.setSize(1000, 450);
            cd.setCornerRadius(60);
            cd.setTitleText("    恭喜你成功过关");
            cd.setContentText("    累计用时: " + tickTimer.getText() + "\n    累计步骤: " + steps);
            cd.setTitleIcon(ResourceTable.Media_pass, 1);
            // 返回选图
            cd.setButton(0, "返回选图", new IDialog.ClickedListener() {
                @Override
                public void onClick(IDialog iDialog, int i) {
                    cd.destroy();
                    present(new SelectAbilitySlice(), new Intent());
                }
            });
            // 再试一次
            cd.setButton(1, "再试一次", new IDialog.ClickedListener() {
                @Override
                public void onClick(IDialog iDialog, int i) {
                    cd.destroy();
                    again();
                }
            });
//            cd.setAutoClosable(true);
            cd.show();
            // 重置计时器和步骤
            resetStepTime();
        }
    }

    public void giveUp() {      // 定义放弃图片组件
        // 还原拼图
        ib11.setPixelMap(image[0]);
        ib12.setPixelMap(image[1]);
        ib13.setPixelMap(image[2]);
        ib14.setPixelMap(image[3]);
        ib21.setPixelMap(image[4]);
        ib22.setPixelMap(image[5]);
        ib23.setPixelMap(image[6]);
        ib24.setPixelMap(image[7]);
        ib31.setPixelMap(image[8]);
        ib32.setPixelMap(image[9]);
        ib33.setPixelMap(image[10]);
        ib34.setPixelMap(image[11]);
        ib41.setPixelMap(image[12]);
        ib42.setPixelMap(image[13]);
        ib43.setPixelMap(image[14]);
        ib44.setPixelMap(image[15]);
        // 设置为图片不可点击
        ib11.setClickable(false);
        ib12.setClickable(false);
        ib13.setClickable(false);
        ib14.setClickable(false);
        ib21.setClickable(false);
        ib22.setClickable(false);
        ib23.setClickable(false);
        ib24.setClickable(false);
        ib31.setClickable(false);
        ib32.setClickable(false);
        ib33.setClickable(false);
        ib34.setClickable(false);
        ib41.setClickable(false);
        ib42.setClickable(false);
        ib43.setClickable(false);
        ib44.setClickable(false);
        // 显示之前隐藏的拼图
        ib44.setVisibility(Component.VISIBLE);
        //最后一次选中的空白区域显示出来
        Image currentImage = findComponentById(blackImgid);
        currentImage.setVisibility(Component.VISIBLE);

        // 重置计时器和步骤
        resetStepTime();

    }

    public void restart() {     // 游戏重试控件定义
        // 拼图游戏重新开始，允许玩家重新触碰按钮
        ib11.setClickable(true);
        ib12.setClickable(true);
        ib13.setClickable(true);
        ib14.setClickable(true);
        ib21.setClickable(true);
        ib22.setClickable(true);
        ib23.setClickable(true);
        ib24.setClickable(true);
        ib31.setClickable(true);
        ib32.setClickable(true);
        ib33.setClickable(true);
        ib34.setClickable(true);
        ib41.setClickable(true);
        ib42.setClickable(true);
        ib43.setClickable(true);
        ib44.setClickable(true);

        //还原被点击的图片按钮变成初始化的模样
        //最后一次选中的空白区域显示出来
        Image currentImage = findComponentById(blackImgid);
        currentImage.setVisibility(Component.VISIBLE);

        //定义一个新的图片按钮，设置为第九个，让其隐藏
        Image blackBtn = findComponentById(ResourceTable.Id_pic_ib44_4);
        blackBtn.setVisibility(Component.INVISIBLE);

        //初始化空白区域的按钮id
        blackImgid = ResourceTable.Id_pic_ib44_4;
        blackSwap = imageCount - 1;

        //将拼图重新还原
        System.arraycopy(tmpImageIndex, 0, imageIndex, 0, imageIndex.length);
        //随机排列到指定的控件上
        ib11.setPixelMap(image[imageIndex[0]]);
        ib12.setPixelMap(image[imageIndex[1]]);
        ib13.setPixelMap(image[imageIndex[2]]);
        ib14.setPixelMap(image[imageIndex[3]]);
        ib21.setPixelMap(image[imageIndex[4]]);
        ib22.setPixelMap(image[imageIndex[5]]);
        ib23.setPixelMap(image[imageIndex[6]]);
        ib24.setPixelMap(image[imageIndex[7]]);
        ib31.setPixelMap(image[imageIndex[8]]);
        ib32.setPixelMap(image[imageIndex[9]]);
        ib33.setPixelMap(image[imageIndex[10]]);
        ib34.setPixelMap(image[imageIndex[11]]);
        ib41.setPixelMap(image[imageIndex[12]]);
        ib42.setPixelMap(image[imageIndex[13]]);
        ib43.setPixelMap(image[imageIndex[14]]);
        ib44.setPixelMap(image[imageIndex[15]]);

        // 重置计时器和步骤
        resetStepTime();
        tickTimer.setBaseTime(System.currentTimeMillis());
        tickTimer.start();

        // 重置放弃按钮
        giveUpFlag = 0;
        finish.setPixelMap(ResourceTable.Media_finish);
    }

    public void again() {      // 游戏再来一次定义
        //将状态还原
        //拼图游戏重新开始，允许玩家重新触碰按钮
        ib11.setClickable(true);
        ib12.setClickable(true);
        ib13.setClickable(true);
        ib14.setClickable(true);
        ib21.setClickable(true);
        ib22.setClickable(true);
        ib23.setClickable(true);
        ib24.setClickable(true);
        ib31.setClickable(true);
        ib32.setClickable(true);
        ib33.setClickable(true);
        ib34.setClickable(true);
        ib41.setClickable(true);
        ib42.setClickable(true);
        ib43.setClickable(true);
        ib44.setClickable(true);

        //最后一次选中的空白区域显示出来
        Image currentImage = findComponentById(blackImgid);
        currentImage.setVisibility(Component.VISIBLE);

        //定义一个新的图片按钮，设置为第九个，让其隐藏
        Image blackBtn = findComponentById(ResourceTable.Id_pic_ib44_4);
        blackBtn.setVisibility(Component.INVISIBLE);

        //初始化空白区域的按钮id
        blackImgid = ResourceTable.Id_pic_ib44_4;
        blackSwap = imageCount - 1;

        //将拼图重新打乱
        disruptRandom();

        // 重置计时器和步骤
        resetStepTime();
        tickTimer.setBaseTime(System.currentTimeMillis());
        tickTimer.start();

        // 重置放弃按钮
        giveUpFlag = 0;
        finish.setPixelMap(ResourceTable.Media_finish);

    }

    public void resetStepTime() {
        steps = 0;
        Text step_string = findComponentById(ResourceTable.Id_step_string);
        step_string.setText(Integer.toString(steps));

        tickTimer.stop();
        tickTimer.setText("00:00");
    }


}
