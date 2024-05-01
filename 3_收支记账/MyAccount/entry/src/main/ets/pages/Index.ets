import router from '@ohos.router'
import AccountTable from '../common/database/tables/AccountTable';
import AccountData from '../viewmodel/AccountData';

@Entry
@Component
struct Index {
  private controller: TabsController = new TabsController();
  @State private year: string = '2023';
  @State private month: string = '11';
  @State private day: string = '29';
  @State private getIn: string = '00.00'
  @State private getOut: string = '70.00'
  selectedDate: Date = new Date("2023-11-29")
  @State private year2: string = '2023';
  @State accounts: Array<AccountData> = [];
  @State message: object = router.getParams();
  @State turn: number = -1;
  @State delete: number = 0;

  onPageShow() {
    this.turn += 1;
    if (this.turn == 1) {
      this.getOut = "90.00";
    } else if (this.turn >= 2) {
      this.getOut = "90.00";
      this.getIn = "100.00";
    } else if (this.turn < 0) {
      this.getOut = "40.00";
      this.getIn = "100.00";
    }
  }

  build() {
    Column({ space: 50 }) {
      Column() {
        Column({ space: 20 }) {
          Row() {
            Image($r('app.media.title'))
          }
          .height("30%")
          .width("70%")

          Row() {
            Column({ space: 10 }) {
              Text(this.year + "年")
                .fontSize(20)
                .fontColor(Color.Brown)
              Text(this.month + "月" + this.day + "日▼")
                .fontSize(20)
                .onClick(() => {
                  DatePickerDialog.show({
                    start: new Date("2015-1-1"), // 设置选择器的起始日期
                    end: new Date("2024-12-31"), // 设置选择器的结束日期
                    selected: this.selectedDate, // 设置当前选中的日期
                    lunar: false,
                    onAccept: (value: DatePickerResult) => { // 点击弹窗中的“确定”按钮时触发该回调
                      // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                      this.selectedDate.setFullYear(value.year, value.month, value.day)
                      this.year = value.year.toString()
                      this.month = (value.month + 1).toString()
                      this.day = value.day.toString()
                      if (this.day != "29") {
                        this.getIn = "00.00"
                        this.getOut = "00.00"
                      } else{
                        this.getIn= "00.00"
                        this.getOut = "70.00"
                      }
                      console.info("DatePickerDialog:onAccept()" + JSON.stringify(value))
                    },
                    onCancel: () => { // 点击弹窗中的“取消”按钮时触发该回调
                      console.info("DatePickerDialog:onCancel()")
                    },
                    onChange: (value: DatePickerResult) => { // 滑动弹窗中的滑动选择器使当前选中项改变时触发该回调
                      console.info("DatePickerDialog:onChange()" + JSON.stringify(value))
                    }
                  })
                })
            }
            .alignItems(HorizontalAlign.Start)
            .width("45%")

            Column({ space: 10 }) {
              Text("收入")
                .fontColor(Color.Gray)
                .fontSize(20)
                .backgroundColor(Color.White)
                .borderRadius(5)
              Text(this.getIn)
                .fontSize(25)
                .backgroundColor(Color.White)
                .borderRadius(5)
            }
            .alignItems(HorizontalAlign.Start)
            .width("25%")
            .padding(5)
            // .backgroundColor(Color.White)

            Column({ space: 10 }) {
              Text("支出")
                .fontColor(Color.Gray)
                .fontSize(20)
                .backgroundColor(Color.White)
                .borderRadius(5)
              Text(this.getOut)
                .fontSize(25)
                .backgroundColor(Color.White)
                .borderRadius(5)
            }
            .alignItems(HorizontalAlign.Start)
            .width("25%")
            .padding(5)
          }
        }
        .width("100%")
        .height("26%")
        .padding(20)
        .backgroundColor(Color.Orange)
        .borderRadius(20)

        Column({ space: 5 }) {
          Row() {
            Column() {
              Image($r('app.media.Jizhang'))
                .width("10%")
              Text("支出")
                .fontSize(15)
            }
            .onClick(() => {
              router.pushUrl({
                url: "pages/PageRecord",
                params: {
                  id: 0
                }
              })
            })

            Column() {
              Image($r('app.media.ShouRu'))
                .width("11%")
              Text("收入")
                .fontSize(15)
            }
            .onClick(() => {
              router.pushUrl({
                url: "pages/PageRecord",
                params: {
                  id: 1
                }
              })
            })

            Column() {
              Image($r('app.media.MingXi'))
                .width("10%")
              Text("明细")
                .fontSize(15)
            }
            .onClick(() => {
              router.pushUrl({
                url: "pages/PageAccount",
                params: {
                  id: 0
                }
              })
            })

            Column() {
              Image($r('app.media.RiLi2'))
                .width("10%")
              Text("本月")
                .fontSize(15)
            }
            .onClick(() => {
              router.pushUrl({
                url: "pages/PageMonthCount"
              })
            })

            Column() {
              Image($r('app.media.BaoGao'))
                .width("10%")
              Text("年度")
                .fontSize(15)
            }
            .onClick(() => {
              router.pushUrl({
                url: "pages/PageAccount",
                params: {
                  id: 1
                }
              })
            })
          }
          .width("100%")
          .height(80)
          .backgroundColor(Color.White)
          .borderRadius(40)
          .margin(-20)
          .borderWidth(1)
          .justifyContent(FlexAlign.SpaceEvenly)

          Row() {
          }
          .margin(10)

          if (this.day == "29") {
            if (this.delete == 0) {
              Scroll() {
                Row() {
                  Image($r('app.media.JuJia'))
                    .width(50)
                    .backgroundColor(Color.Yellow)
                    .borderRadius(20)

                  Column() {
                    Text("居家")
                      .fontSize(22)
                      .width(230)
                      .textAlign(TextAlign.Center)
                  }

                  Text("-50")
                    .fontSize(18)
                    .textAlign(TextAlign.End)
                    .width(55)

                  Row()
                    .width(60)
                  Row() {
                    Text('删除')
                  }
                  .onClick(() => {
                    AlertDialog.show({
                      title: "是否删除？",
                      message: "删除这条记录",
                      autoCancel: true, // 点击蒙层，隐藏对话框
                      cancel: () => {
                      },
                      alignment: DialogAlignment.Bottom, // 设置对话框底部对齐
                      offset: { dx: 0, dy: -20 }, // 在Y轴方向上的偏移量
                      confirm: {
                        value: "确认删除",
                        action: () => {
                          this.delete = 1
                          this.getOut = "40.00"
                          this.turn = -100
                        }
                      }
                    });
                  })
                  .width(60)
                  .height("100%")
                  .backgroundColor("#FFB266")
                  .borderRadius(25)
                  .justifyContent(FlexAlign.Center)
                }
                .height("10%")
                .padding(15)
                .borderRadius(15)
              }
              .width(700)
              .scrollBar(BarState.Off)
              .scrollable(ScrollDirection.Horizontal)

              Divider()
            }

            Row() {
              Image($r('app.media.CanYin'))
                .width("15%")
                .backgroundColor(Color.Yellow)
                .borderRadius(20)
              if (true) {
                Column({ space: 3 }) {
                  Text("餐饮")
                    .fontSize(20)
                  Text("备注：这是一条备注")
                    .fontSize(15)
                }
                .width("60%")
              } else {
                Column() {
                  Text("餐饮")
                    .fontSize(22)
                    .width("60%")
                    .textAlign(TextAlign.Center)
                }
              }
              Text("-20")
                .fontSize(18)
                .textAlign(TextAlign.End)
                .width("15%")
            }
            .width("100%")
            .height("10%")
            .borderRadius(15)
            .padding(15)
            .backgroundColor(Color.White)
            .onClick(() => {
              AlertDialog.show({
                title: "是否删除？",
                message: "删除这条记录",
                autoCancel: true, // 点击蒙层，隐藏对话框
                cancel: () => {
                },
                alignment: DialogAlignment.Bottom, // 设置对话框底部对齐
                offset: { dx: 0, dy: -20 }, // 在Y轴方向上的偏移量
                confirm: {
                  value: "确认删除",
                  action: () => {
                  }
                }
              });
            })

            Divider()

            // if (this.message) {
            if (this.turn >= 1 || this.turn < 0) {
              Row() {
                Image($r('app.media.CanYin'))
                  .width("15%")
                  .backgroundColor(Color.Yellow)
                  .borderRadius(20)
                if (true) {
                  Column({ space: 3 }) {
                    Text("餐饮")
                      .fontSize(20)
                    Text("备注：eating spends 20")
                      .fontSize(15)
                  }
                  .width("60%")
                } else {
                  Column() {
                    Text("餐饮")
                      .fontSize(22)
                      .width("60%")
                      .textAlign(TextAlign.Center)
                  }
                }
                Text("-20")
                  .fontSize(18)
                  .textAlign(TextAlign.End)
                  .width("15%")
              }
              .width("100%")
              .height("10%")
              .borderRadius(15)
              .padding(15)
              .backgroundColor(Color.White)
              .onClick(() => {
                AlertDialog.show({
                  title: "是否删除？",
                  message: "删除这条记录",
                  autoCancel: true, // 点击蒙层，隐藏对话框
                  cancel: () => {
                  },
                  alignment: DialogAlignment.Bottom, // 设置对话框底部对齐
                  offset: { dx: 0, dy: -20 }, // 在Y轴方向上的偏移量
                  confirm: {
                    value: "确认删除",
                    action: () => {
                    }
                  }
                });
              })

              Divider()
            }

            if (this.turn >= 2 || this.turn < 0) {
              Row() {
                Image($r('app.media.JianZhi'))
                  .width("15%")
                  .backgroundColor(Color.Pink)
                  .borderRadius(20)
                if (true) {
                  Column({ space: 3 }) {
                    Text("兼职")
                      .fontSize(20)
                    Text("备注：part time job gets 100")
                      .fontSize(15)
                  }
                  .width("60%")
                } else {
                  Column() {
                    Text("餐饮")
                      .fontSize(22)
                      .width("60%")
                      .textAlign(TextAlign.Center)
                  }
                }
                Text("+100")
                  .fontSize(18)
                  .textAlign(TextAlign.End)
                  .width("15%")
              }
              .width("100%")
              .height("10%")
              .borderRadius(15)
              .padding(15)
              .backgroundColor(Color.White)
              .onClick(() => {
                AlertDialog.show({
                  title: "是否删除？",
                  message: "删除这条记录",
                  autoCancel: true, // 点击蒙层，隐藏对话框
                  cancel: () => {
                  },
                  alignment: DialogAlignment.Bottom, // 设置对话框底部对齐
                  offset: { dx: 0, dy: -20 }, // 在Y轴方向上的偏移量
                  confirm: {
                    value: "确认删除",
                    action: () => {
                    }
                  }
                });
              })

              Divider()
            }
          } else { // 还没有添加数据

          }

        }
      }
      .width('100%')
      .height('100%')
      // .backgroundColor("#aabbcc")
      .padding(3)
    }
  }

  //   .size({ width: "100%", height: "100%" })
  // }
}

