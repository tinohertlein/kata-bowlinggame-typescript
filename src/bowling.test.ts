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

    describe('handle spares', () => {
        test('returning score if spare happens in first frame', () => {
            doRolls(1, 5)
            doRolls(1, 5)
            doRolls(1, 5)
            doRolls(17, 0)

            expect(game.score()).toEqual(20)
        })

        test('returning score if spare happens in last frame', () => {
            doRolls(18, 0)
            doRolls(1, 5)
            doRolls(1, 5)
            doRolls(1, 5)

            expect(game.score()).toEqual(15)
        })

        test('returning score if only spares happen', () => {
            doRolls(21, 5)

            expect(game.score()).toEqual(150)
        })
    })

    describe('handle strikes', () => {
        test('returning score if strike happens in first frame', () => {
            doRolls(1, 10)
            doRolls(1, 5)
            doRolls(17, 0)

            expect(game.score()).toEqual(20)
        })

        test('returning score if strike happens in last frame', () => {
            doRolls(18, 0)
            doRolls(1, 10)
            doRolls(1, 5)
            doRolls(1, 5)

            expect(game.score()).toEqual(20)
        })

        test('returning score if only strikes happen', () => {
            doRolls(12, 10)

            expect(game.score()).toEqual(300)
        })
    })
})
