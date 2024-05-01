import { BreakpointSystem } from '../common/utils/BreakpointSystem';
import { MediaService } from '../common/utils/MediaService';
import { StyleConstants } from '../common/constants/StyleConstants';
import { BreakpointConstants } from '../common/constants/BreakpointConstants';
import { SongConstants } from '../common/constants/SongConstants';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { Content } from '../components/Content';

@Entry
@Component
struct MusicList {
  private breakpointSystem: BreakpointSystem = new BreakpointSystem();
  @State currentBreakpoint: string = BreakpointConstants.BREAKPOINT_SM;

  aboutToAppear() {
    MediaService.getInstance();
    this.breakpointSystem.register();
  }

  aboutToDisappear() {
    this.breakpointSystem.unregister();
  }

  build() {
    Stack({ alignContent: Alignment.Top }) {
      Header({ currentBreakpoint: $currentBreakpoint })
      Content({ currentBreakpoint: $currentBreakpoint })
      Player({ currentBreakpoint: $currentBreakpoint })
    }
    .width(StyleConstants.FULL_WIDTH)
    .backgroundColor(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
    $r('app.color.page_background_sm') : $r('app.color.page_background_other'))
  }

  pageTransition() {
    PageTransitionEnter({ duration: SongConstants.TRANSITION_DURATION, curve: Curve.Smooth, type: RouteType.Pop })
    PageTransitionExit({ duration: SongConstants.TRANSITION_DURATION, curve: Curve.Smooth, type: RouteType.Push })
  }
}