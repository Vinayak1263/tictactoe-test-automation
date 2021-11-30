import { Log, Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/webdriverio'
import { Square } from '../page-objects/Square'

export const MoveTo = {
  board: (sq: string[]) =>
    Task.where(
      `#actor move to square on the board`,
      Log.the('SQ: ' + sq[0]),
      Wait.until(Square.move(sq[0]), isVisible()),
      Click.on(Square.move(sq[0])),
    
    ),
}
