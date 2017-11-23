export class AISmartStrategy {

    constructor(flags) {
      this.flags = flags
      this.state = this.flags.length - 1
    }
    
    getAskTime () {
      return 1000
    }
    
    getMoveDir (curTop, curLeft) {
      let topDis = curTop - this.flags[this.state].top - 3
      let leftDis = curLeft - this.flags[this.state].left - 3
      if (topDis > 5) {
        return {top: -1, left: 0, rh: (1000 / topDis)}
      } else if (topDis < -5) {
        return {top: 1, left: 0, rh: (1000 / ((-1) * topDis))}
      } else if (leftDis > 5) {
        return {top: 0, left: -1, rh: (1000 / leftDis)}
      } else if (leftDis < -5) {
        return {top: 0, left: 1, rh: (1000 / ((-1) * leftDis))}
      } else {
          if (this.state === this.flags.length - 1) {
            this.state = 0
          } else {
            this.state++
          }
          return this.getMoveDir(curTop, curLeft)
      }
    }
  }
    