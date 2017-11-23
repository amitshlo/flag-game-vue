export class Rules {
  constructor (arenaSize, flags, flagSize) {
    this.arenaSize = arenaSize
    this.flags = flags
    this.flagSize = flagSize
  }

  isInArena (newPos, size) {
    return (newPos < (this.arenaSize - size) && newPos > 0)
  }

  isOnFlag (newTop, newLeft, size, color) {
    for (let flag of this.flags) {
      if (newTop > flag.top && newLeft > flag.left &&
          (flag.left + this.flagSize) > (newLeft + size) &&
          (flag.top + this.flagSize) > (newTop + size)) {
        return {hit: true, id: flag.id}
      }
    }
    return null
  }
}
