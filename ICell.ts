export default interface ICell {
    update(neighboursAlive: number): void;
    toggle(): void;
    readonly alive: boolean;
}