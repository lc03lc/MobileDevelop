import router from '@ohos.router';
import AccountTable from '../common/database/tables/AccountTable';
import AccountData from '../viewmodel/AccountData';

@Entry
@Component
struct PageRecord {
  private controller: TabsController = new TabsController();
  @State message: object = router.getParams()
  @State index: number = 0;
  @State turn: number = 0;
  private gridData: ItemData[] = [
    new ItemData(1, "餐饮", $r("app.media.CanYin")),
    new ItemData(2, "购物", $r('app.media.GouWu')),
    new ItemData(3, "日用", $r("app.media.RiYong")),
    new ItemData(4, "交通", $r('app.media.JiaoTong')),
    new ItemData(5, "蔬菜", $r('app.media.ShuCai')),
    new ItemData(6, "水果", $r('app.media.ShuiGuo')),
    new ItemData(7, "零食", $r('app.media.LingShi')),
    new ItemData(8, "运动", $r('app.media.YunDong')),
    new ItemData(9, "娱乐", $r('app.media.YuLe')),
    new ItemData(10, "通讯", $r('app.media.TongXun')),
    new ItemData(11, "服饰", $r('app.media.FuShi')),
    new ItemData(12, "美容", $r('app.media.MeiRong')),
    new ItemData(13, "住房", $r('app.media.ZhuFang')),
    new ItemData(14, "居家", $r('app.media.JuJia')),
    new ItemData(15, "孩子", $r('app.media.HaiZi')),
    new ItemData(16, "长辈", $r('app.media.ZhangBei')),
    new ItemData(17, "社交", $r('app.media.SheJiao')),
    new ItemData(18, "烟酒", $r('app.media.YanJiu')),
    new ItemData(19, "旅行", $r('app.media.LvXing')),
    new ItemData(20, "旅行", $r('app.media.ShuMa'))
  ];
  private gridData2: ItemData2[] = [
    new ItemData2(1 + 20, "工资", $r("app.media.GongZi")),
    new ItemData2(2 + 20, "兼职", $r('app.media.JianZhi')),
    new ItemData2(3 + 20, "理财", $r("app.media.LiCai")),
    new ItemData2(4 + 20, "礼金", $r('app.media.LiJin')),
    new ItemData2(5 + 20, "其他", $r('app.media.QiTa')),
  ];
  customDialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogWidget(),
    alignment: DialogAlignment.Bottom,
    customStyle: true,
    offset: { dx: 0, dy: -20 },
    cancel: () => {
      this.index = 0;
    }
  });

  build() {
    Row() {
      Column() {
        Tabs({
          barPosition: BarPosition.Start,
          controller: this.controller,
          index: this.message['id']
        }) {
          TabContent() {
            Column() {
              Grid() {
                ForEach(this.gridData, (item: ItemData) => {
                  GridItem() {
                    Column({ space: 8 }) {
                      Image(item.img)
                        .width("60%")
                        .backgroundColor(this.index == item.index ? '#E3CF57' : '#dcdcdc')
                        .borderRadius(20)
                        .borderWidth(1)
                      Text(item.title)
                    }
                    .onClick(() => {
                      this.index = item.index
                      this.customDialogController.open();
                    })
                  }
                }, item => JSON.stringify(item))
              }
              .columnsTemplate('1fr 1fr 1fr 1fr')
              .rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr')
              .columnsGap(8)
              .rowsGap(12)
            }
            .width('100%')
            .height('100%')
            .backgroundColor("#CCFFE5")
            .borderRadius(20)
          }
          .size({ width: "100%", height: "100%" })
          .tabBar("支出")

          TabContent() {
            Column() {
              Grid() {
                ForEach(this.gridData2, (item: ItemData2) => {
                  GridItem() {
                    Column({ space: 8 }) {
                      Image(item.img)
                        .width("60%")
                        .borderWidth(1)
                        .borderRadius(20)
                        .backgroundColor(this.index == item.index ? '#E3CF57' : '#dcdcdc')
                      Text(item.title)
                    }
                    .onClick(() => {
                      this.index = item.index;
                      this.customDialogController.open();
                    })
                  }
                }, item => JSON.stringify(item))
              }
              .columnsTemplate('1fr 1fr 1fr 1fr')
              .rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr')
              .columnsGap(8)
              .rowsGap(12)
            }
            .width('100%')
            .height('100%')
            .borderRadius(20)
            .backgroundColor(Color.Pink)
          }
          .size({ width: "100%", height: "100%" })
          .tabBar("收入")
        }
        .barWidth("50%")
      }
      .width('100%')
      .padding(10)

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
      .position({ x: 320, y: 30 })
    }
  }
}

class ItemData {
  index: number;
  title: string;
  img: Resource;

  constructor(index: number, title: string, img: Resource) {
    this.index = index;
    this.title = title;
    this.img = img;
  }
}

class ItemData2 {
  index: number;
  title: string;
  img: Resource;

  constructor(index: number, title: string, img: Resource) {
    this.index = index;
    this.title = title;
    this.img = img;
  }
}

@CustomDialog
struct CustomDialogWidget {
  private controller: CustomDialogController;
  @State turn: number = 0;
  @State private gridData: ItemData[] = [
    new InItemData(1, "7"),
    new InItemData(2, "8"),
    new InItemData(3, "9"),
    new InItemData(4, "今天", $r("app.media.RiLi")),
    new InItemData(5, "4"),
    new InItemData(6, "5"),
    new InItemData(7, "6"),
    new InItemData(8, "清空"),
    new InItemData(9, "1"),
    new InItemData(10, "2"),
    new InItemData(11, "3"),
    new InItemData(12, "取消"),
    new InItemData(13, "."),
    new InItemData(14, "0"),
    new InItemData(15, "x", $r("app.media.delete")),
    new InItemData(16, "完成"),
  ];
  selectedDate: Date = new Date("2023-11-29")
  @State private today: boolean = true;
  @State private val: string = "0";
  // @State accounts: Array<AccountData> = [];

  build() {
    Column({ space: 20 }) {
      Text(this.val)
        .fontSize(30)
        .width("90%")
        .textAlign(TextAlign.End)
      TextInput({
        placeholder: "请输入备注"
      })
        .fontSize(20)

      Grid() {
        ForEach(this.gridData, (item: InItemData) => {
          GridItem() {
            Row({ space: 3 }) {
              if (item.index == 4) {
                if (this.today) {
                  Image(item.img)
                    .width(25)
                    .height(25)
                  Text(item.title)
                    .fontSize(16)
                    .fontColor(Color.Black)
                }else{
                  Text("11-28")
                    .fontSize(15)
                    .fontColor(Color.Black)
                }
              } else if (item.index == 15) {
                Image(item.img)
                  .width(30)
                  .height(30)
              } else {
                Text(item.title)
                  .fontSize(16)
                  .fontColor(Color.Black)
                  .textAlign(TextAlign.Center)
              }
            }
          }
          .border({
            color: Color.Gray,
            width: 2,
            radius: 0,
            style: BorderStyle.Solid
          })
          .width('100%')
          .height('100%')
          .onClick(() => {
            if (item.index == 4) {
              DatePickerDialog.show({
                start: new Date("2000-1-1"), // 设置选择器的起始日期
                end: new Date("2023-12-31"), // 设置选择器的结束日期
                selected: this.selectedDate, // 设置当前选中的日期
                lunar: false,
                onAccept: (value: DatePickerResult) => { // 点击弹窗中的“确定”按钮时触发该回调
                  // 通过Date的setFullYear方法设置按下确定按钮时的日期，这样当弹窗再次弹出时显示选中的是上一次确定的日期
                  this.selectedDate.setFullYear(value.year, value.month, value.day)
                  console.info("DatePickerDialog:onAccept()" + JSON.stringify(value))
                  this.today = !this.today
                },
                onCancel: () => { // 点击弹窗中的“取消”按钮时触发该回调
                  console.info("DatePickerDialog:onCancel()")
                },
                onChange: (value: DatePickerResult) => { // 滑动弹窗中的滑动选择器使当前选中项改变时触发该回调
                  console.info("DatePickerDialog:onChange()" + JSON.stringify(value))
                }
              })
            }
            else if (item.index == 8) {
              this.val = "0";
            }
            else if (item.index == 12) {
              router.replaceUrl({
                url: 'pages/Index'
              })
            }
            else if (item.index == 15) {
              this.val = this.val.slice(0, -1)
              if (this.val.length == 0) {
                this.val = "0";
              }
            } else if (item.index == 13) {
              this.val = this.val + item.title;
            } else if (item.index == 16) { // 存储用户记录
              router.back({
                url: 'pages/Index'
              })
            }
            else {
              if (this.val == "0") {
                this.val = "";
              }
              this.val = this.val + item.title;
            }
          })

        }, item => JSON.stringify(item))
      }
      .columnsTemplate('1fr 1fr 1fr 1fr')
      .rowsTemplate('1fr 1fr 1fr 1fr')
      .columnsGap(5)
      .rowsGap(5)
      .height(250)
    }
    .backgroundColor(Color.White)
    .padding(10)
    .height(400)
    .width("90%")
    .borderRadius(20)
  }
}

class InItemData {
  index: number;
  title: string;
  img: Resource = null;

  constructor(index: number, title: string, img?: Resource) {
    this.index = index;
    this.title = title;
    this.img = img;
  }
}

function newAccount(newAccount: any, arg1: (id: number) => void) {
  throw new Error('Function not implemented.');
}
