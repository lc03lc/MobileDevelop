struct preview{build(){Flex({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center }) {
        Text(this.songList[this.selectIndex].title)
          .fontSize($r('app.float.font_twenty_four'))
          .fontColor($r('app.color.text_color'))
        if (this.like == 0){
          Image($r('app.media.ic_like'))
            .width($r('app.float.twenty_four'))
            .aspectRatio(1)
            .objectFit(ImageFit.Contain)
            .onClick(()=>{
              this.like += 1;
            })
        }else{
          Image($r('app.media.ic_like'))
            .width($r('app.float.twenty_four'))
            .aspectRatio(1)
            .objectFit(ImageFit.Contain)
            .onClick(()=>{
              this.like -= 1;
            })
        }
      }}}