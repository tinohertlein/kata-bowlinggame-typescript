import { Game } from './bowling'

describe('Game should', () => {
    let game: Game

    beforeEach(() => {
        game = new Game()
    })

    const doRolls = (noOfRolls: number, pinsKnockedDownPerRoll: number) => {
        for (let roll = 0; roll < noOfRolls; roll++) {
            game.roll(pinsKnockedDownPerRoll)
        }
    }

    test('return score if no pins knocked down', () => {
        doRolls(20, 0)

        expect(game.score()).toEqual(0)
    })

    test('return score if one pin knocked down per roll', () => {
        doRolls(20, 1)

        expect(game.score()).toEqual(20)
    })
})
