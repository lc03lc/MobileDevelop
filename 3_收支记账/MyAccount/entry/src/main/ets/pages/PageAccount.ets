import router from '@ohos.router'

@Entry
@Component
struct PageAccount {
  @State year: string = '2023'
  @State message: object = router.getParams()
  private controller: TabsController = new TabsController();
  years: string[] = ['2022', '2023', '2024', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
  @State private month_list: MonthCount[] = [
    new MonthCount(1, 4000.00, 2800.5),
    new MonthCount(2, 3900, 2750),
    new MonthCount(3, 3950, 2600),
    new MonthCount(4, 4200, 3100),
    new MonthCount(5, 3880, 2550),
    new MonthCount(6, 4330, 2210),
    new MonthCount(7, 5050, 4000),
    new MonthCount(8, 4500, 2100),
    new MonthCount(9, 4000, 2900),
    new MonthCount(10, 4100, 2850),
    new MonthCount(11, 3000, 1600),
    new MonthCount(12, 0, 0),
  ]
  @State Nianjieyu: string = "12449.5";
  @State Nianshouru: string = "44910.00";
  @State Nianzhichu: string = "29460.5";

  build() {
    Column() {
      Tabs({ // Tabs不设置vertical属性时，默认上下排版
        barPosition: BarPosition.Start,
        controller: this.controller,
        index: this.message['id']
      }) {
        TabContent() {
          Column() {
            Row() {
              Column({ space: 10 }) {
                Row() {
                  Text(this.year + "年▼")
                    .fontSize(15)
                }
                .width("80%")
                .justifyContent(FlexAlign.Start)
                .onClick(() => {
                  TextPickerDialog.show({
                    range: this.years,
                    selected: 13,
                    onAccept: (value: TextPickerResult) => {
                      this.year = value.value;
                    }
                  })
                })

                Row({ space: 20 }) {
                  Text("年结余")
                    .fontSize(25)
                  Text(this.Nianjieyu)
                    .fontSize(35)
                }
                .width("100%")
                .justifyContent(FlexAlign.Center)

                Row() {
                  Row({ space: 10 }) {
                    Text("年收入")
                    Text(this.Nianshouru)
                      .fontSize(20)
                  }
                  .width("50%")
                  .justifyContent(FlexAlign.Center)

                  Row({ space: 10 }) {
                    Text("年支出")
                    Text(this.Nianzhichu)
                      .fontSize(20)
                  }
                  .width("50%")
                  .justifyContent(FlexAlign.Center)
                }
                .width("100%")
              }
            }
            .borderRadius(15)
            .backgroundColor(Color.Orange)
            .width("100%")
            .height("20%")

            Column({ space: 10 }) {
              Row() {
                Text("月份")
                  .fontSize(16)
                  .textAlign(TextAlign.Center)
                  .width("22%")
                Text("月收入")
                  .textAlign(TextAlign.Center)
                  .width("22%")
                  .fontSize(16)
                Text("月支出")
                  .textAlign(TextAlign.Center)
                  .width("22%")
                  .fontSize(16)
                Text("月结余")
                  .textAlign(TextAlign.Center)
                  .width("22%")
                  .fontSize(16)
                Text("明细")
                  .textAlign(TextAlign.Center)
                  .width("12%")
                  .fontSize(16)
              }
              .width("100%")
              .margin(10)
              .justifyContent(FlexAlign.SpaceAround)


              ForEach(this.month_list, (item: MonthCount) => {
                Row() {
                  Text(item.index.toString())
                    .width("20%")
                    .textAlign(TextAlign.Center)
                  Text(item.In.toString())
                    .textAlign(TextAlign.Center)
                    .width("20%")
                  Text(item.Out.toString())
                    .textAlign(TextAlign.Center)
                    .width("20%")
                  Text(item.leave.toString())
                    .textAlign(TextAlign.Center)
                    .width("20%")
                  Image($r("app.media.JianTou"))
                    .width(20)
                }
                .width("100%")
                .borderRadius(15)
                .height(32)
                .justifyContent(FlexAlign.SpaceAround)
                .backgroundColor(Color.White)
                .onClick(() => {
                  router.pushUrl({
                    url: 'pages/PageMonthCount',
                    params: {
                      name: item.index.toString(),
                      value: this.year.toString()
                    }
                  })
                })

              }, item => JSON.stringify(item))

            }
            // .backgroundColor(Color.Red)
            .width("100%")
            .height("80%")

          }
          .width('100%')
          .height('100%')
          .backgroundColor("#bbccaa")
          .padding(8)
        }
        .size({ width: "100%", height: "100%" })
        .tabBar("月账单")

        TabContent() {
          Scroll() {
            Column() {
              Column() {
                Row() {
                  Column({ space: 10 }) {
                    Row({ space: 20 }) {
                      Text("总结余")
                        .fontSize(25)
                      Text("12449.5")
                        .fontSize(35)
                    }
                    .width("100%")
                    .justifyContent(FlexAlign.Center)

                    Row() {
                      Row({ space: 10 }) {
                        Text("总收入")
                        Text("44910.00")
                          .fontSize(20)
                      }
                      .width("50%")
                      .justifyContent(FlexAlign.Center)

                      Row({ space: 10 }) {
                        Text("总支出")
                        Text("29460.50")
                          .fontSize(20)
                      }
                      .width("50%")
                      .justifyContent(FlexAlign.Center)
                    }
                    .width("100%")
                  }
                }
                .backgroundColor("#FFA07A")
                .borderRadius(15)
                .width("100%")
                .height(150)

                Row()
                  .height(20)

                Column({ space: 15 }) {
                  Column() {
                    Row() {
                      Text("总支出趋势图")
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                    }
                    .width("100%")
                    .justifyContent(FlexAlign.Start)
                    .padding(15)

                    Row() {
                      Image($r('app.media.Line2'))
                        // .width("90%")
                        .height(190)
                    }
                  }
                  .width("100%")
                  .height("280")
                  .borderRadius(15)
                  .backgroundColor(Color.White)

                  Column() {
                    Row() {
                      Text("总收入趋势图")
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                    }
                    .width("100%")
                    .justifyContent(FlexAlign.Start)
                    .padding(15)

                    Row() {
                      Image($r('app.media.Line1'))
                        // .width("90%")
                        .height(190)
                    }
                  }
                  .width("100%")
                  .height("280")
                  .borderRadius(15)
                  .backgroundColor(Color.White)
                }
              }
            }
            .width('100%')
            .height('100%')
            .backgroundColor("#E6E6FA")
            .padding(8)
          }
          .width("100%")
          .height("850")
          .scrollBar(BarState.Off)

        }
        .size({ width: "100%", height: "100%" })
        .tabBar("年账单")
      }
      .size({ width: "100%", height: "100%" })
      .barWidth("50%")

      Column() {
        Text("取消")
          .fontSize(15)
          .fontColor(Color.Gray)
      }
      .onClick(() => {
        router.back()
        // ({
        //   url: 'pages/Index'
        // })
      })
      .position({ x: 320, y: 20 })

    }
    .width('100%')
    .height('100%')
    .padding(10)

  }
}

class MonthCount {
  index: number;
  In: number;
  Out: number;
  leave: number;

  constructor(index: number, In: number, Out: number) {
    this.index = index;
    this.In = In;
    this.Out = Out;
    this.leave = In - Out;
  }
}

