import router from '@ohos.router'
import media from '@ohos.multimedia.media';

@Entry
@Component
struct MonthCount {
  @State message: object = router.getParams()
  @State Yuejieyu: string = "1400.00";
  @State Shangyuejieyu: string = "11049.5";
  @State Zhichu: string = "1600.00"
  @State Shouru: string = "3000.00"
  @State Tianshu: string = "25"
  @State Bishu: string = "45"

  build() {
    Scroll() {
      Column() {
        Row({ space: 60 }) {
          Image($r('app.media.FanHui'))
            .width(30)
            .onClick(() => {
              router.back()
            })
          Text("2023" + "年" + "11" + "月账单")
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
        }
        .width("100%")
        .height("115")
        .backgroundColor(Color.Orange)
        .justifyContent(FlexAlign.Center)

        Column({ space: 10 }) {
          Row() {
            Column({ space: 15 }) {
              Text("本月结余")
                .fontSize(20)
                .fontColor(Color.Gray)
              Text(this.Yuejieyu)
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
            }
            .width("50%")

            Column({ space: 15 }) {
              Text("上月结余")
                .fontColor(Color.Gray)
                .fontSize(20)
              Text(this.Shangyuejieyu)
                .fontSize(20)
            }
            .width("50%")
          }
          .width("100%")
          .height("115")
          .borderRadius(15)
          .backgroundColor(Color.White)

          Row() {
            Column({ space: 15 }) {
              Text("支出")
                .fontColor(Color.Gray)
                .fontSize(20)
              Text(this.Zhichu)
                .fontSize(20)
            }
            .width("25%")

            Column({ space: 15 }) {
              Text("收入")
                .fontColor(Color.Gray)
                .fontSize(20)
              Text(this.Shouru)
                .fontSize(20)
            }
            .width("25%")

            Column({ space: 15 }) {
              Text("记账天数")
                .fontColor(Color.Gray)
                .fontSize(20)
              Text(this.Tianshu)
                .fontSize(20)
            }
            .width("25%")

            Column({ space: 15 }) {
              Text("记账笔数")
                .fontColor(Color.Gray)
                .fontSize(20)
              Text(this.Bishu)
                .fontSize(20)
            }
            .width("25%")
          }
          .width("100%")
          .height("115")
          .borderRadius(15)
          .backgroundColor(Color.White)

          Column() {
            Row() {
              Column() {
                Text("支出类别")
                  .fontSize(20)
                  .fontWeight(FontWeight.Bold)
              }
            }
            .width("100%")
            .justifyContent(FlexAlign.Start)
            .padding(15)

            Row() {
                Image($r('app.media.Pie1'))
                // .width("100%")
                .height(290)
            }
            .width("100%")
          }
          .width("100%")
          .height("380")
          .borderRadius(15)
          .backgroundColor(Color.White)

          Column() {
            Row() {
              Text("月支出对比")
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
            }
            .width("100%")
            .justifyContent(FlexAlign.Start)
            .padding(15)

            Row() {
              Image($r('app.media.Column1'))
                // .width("90%")
                .height(250)
            }

          }
          .width("100%")
          .height("320")
          .borderRadius(15)
          .backgroundColor(Color.White)

          Column({ space: 5 }) {
            Row() {
              Text("收入")
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
            }
            .width("100%")
            .justifyContent(FlexAlign.Start)
            .padding(15)

            Column() {
              Text("总收入")
                .fontColor(Color.Gray)
              Text(this.Shouru)
                .fontSize(23)
                .fontWeight(FontWeight.Bold)
              Row() {
                Image($r('app.media.Pie2'))
                  // .width("100%")
                  .height(230)
              }
              .width("100%")
              Row()
                .height(20)

              Text("月收入对比")
                .fontColor(Color.Gray)
              Row()
                .height(10)
              Row() {
                Image($r('app.media.Column2'))
                  // .width("90%")
                  .height(200)
              }
            }
            .alignItems(HorizontalAlign.Start)
            .width("90%")

          }
          .width("100%")
          .height("620")
          .borderRadius(15)
          .backgroundColor(Color.White)
        }
        .height("1730")
        .padding(8)
        .backgroundColor("#aabbcc")
      }
      .width('100%')
      // .height("100%")
    }
    .width("100%")
    .height("1500")
    .scrollBar(BarState.Off)
  }
}