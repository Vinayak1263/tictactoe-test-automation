import { by, Target } from '@serenity-js/webdriverio'

export const Square = {
  move: (sq: string) =>
    Target.the('square').located(by.css(`button[data-testid="${sq[0]}"]`))

}



