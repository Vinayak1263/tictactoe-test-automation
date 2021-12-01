import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor, actorInTheSpotlight, Check, Log } from '@serenity-js/core'
import { Navigate } from '@serenity-js/webdriverio'

import { MoveTo } from '../tasks/MoveTo'


require('dotenv').config()

Given(
  '{actor} is at the TicTacToe',
  async (actor: Actor) =>
    await actor.attemptsTo(Navigate.to(process.env.TICTACTOE_BASE_URL))
)

When(
  '{pronoun} make the move on the board',{timeout:60000},
  async (actor: Actor, table: DataTable) => {
    const move = table.hashes()[0].move
    
    await actor.attemptsTo(
      Log.the('ARRAY : ' + move.split(',')),
      MoveTo.board(move.split(','))
    )
  })

Then(/.* should able to see the winner/, async () => {
  await actorInTheSpotlight().attemptsTo(
   
  )
})

