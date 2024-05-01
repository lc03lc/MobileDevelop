"use strict";
struct PageAccount extends   {
    constructor() { }
    build() {
            .width('100%')
            .height('100%')
            .padding(10);
    }
}
class MonthCount {
    constructor(index, In, Out) {
        this.index = index;
        this.In = In;
        this.Out = Out;
        this.leave = In - Out;
    }
}
//# sourceMappingURL=PageAccount.js.map