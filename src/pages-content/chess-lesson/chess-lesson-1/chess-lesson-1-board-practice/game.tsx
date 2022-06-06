let knightPosition: any = [0, 0]
let observer: any = null

function emitChange() {
  observer(knightPosition)
}

export function observe(o: any) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }
  observer = o
  emitChange()
  return () => {
    observer = null
  }
}

export function moveKnight(toX: number, toY: number) {
  knightPosition = [toX, toY]
  emitChange()
}

export function canMoveKnight(toX: number, toY: number): boolean {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2)
}
