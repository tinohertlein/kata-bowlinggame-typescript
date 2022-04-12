export class Game {
    private pinsKnockedDownPerRoll = [] as number[]

    public roll = (pinsKnockedDown: number): void => {
        this.pinsKnockedDownPerRoll.push(pinsKnockedDown)
    }

    public score = () => {
        return this.pinsKnockedDownPerRoll.reduce(
            (sum, current) => sum + current,
            0
        )
    }
}
