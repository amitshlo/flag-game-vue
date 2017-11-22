export default class IntersectService {
  constructor () {
    console.log('init')
  }

  setRectangles (rectangles) {
    this.rectangles = rectangles
    console.log('this is the rectangles: ', this.rectangles)
  }
}
