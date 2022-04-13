export class Game {
    private readonly MAX_FRAMES_PER_GAME = 10
    private readonly MAX_PINS_PER_ROLL = 10

    private readonly pinsKnockedDownPerRoll = [] as number[]

    public roll = (pinsKnockedDown: number): void => {
        this.pinsKnockedDownPerRoll.push(pinsKnockedDown)
    }

    public score = () => {
        let score = 0
        let rollIndex = 0

        for (let frame = 0; frame < this.MAX_FRAMES_PER_GAME; frame++) {
            if (this.isStrike(rollIndex)) {
                score += this.MAX_PINS_PER_ROLL + this.bonusForStrike(rollIndex)
                rollIndex += 1
            } else if (this.isSpare(rollIndex)) {
                score += this.MAX_PINS_PER_ROLL + this.bonusForSpare(rollIndex)
                rollIndex += 2
            } else {
                score += this.defaultScoreForFrame(rollIndex)
                rollIndex += 2
            }
        }
        return score
    }

    private isSpare = (rollIndex: number): boolean =>
        this.pinsKnockedDownPerRoll[rollIndex] +
        this.pinsKnockedDownPerRoll[rollIndex + 1] ===
        this.MAX_PINS_PER_ROLL

    private isStrike = (rollIndex: number): boolean =>
        this.pinsKnockedDownPerRoll[rollIndex] === this.MAX_PINS_PER_ROLL

    private bonusForSpare = (rollIndex: number) =>
        this.pinsKnockedDownPerRoll[rollIndex + 2]

    private bonusForStrike = (rollIndex: number): number =>
        this.pinsKnockedDownPerRoll[rollIndex + 1] +
        this.pinsKnockedDownPerRoll[rollIndex + 2]

    private defaultScoreForFrame = (rollIndex: number) =>
        this.pinsKnockedDownPerRoll[rollIndex] +
        this.pinsKnockedDownPerRoll[rollIndex + 1]
}
