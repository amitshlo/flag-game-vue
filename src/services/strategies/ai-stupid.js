export class AIStupidStrategy {
  
  getAskTime () {
    return 1000
  }
  
  getMoveDir () {
    let top = this.getRandNumber()
    let left = this.getRandNumber()
    while (top !== 0 && left !== 0) {
      top = this.getRandNumber()
      left = this.getRandNumber()
    }
    return {top, left}
  }

  getRandNumber () {
    return Math.floor(Math.random() * 3) - 1;
  }
}
  