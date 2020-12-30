import ICell from "./ICell";

export default class Cell implements ICell {
    private _alive: boolean = false;

    toggle(): void {
        this._alive = !this._alive;
    }

    get alive() {
        return this._alive;
    }

    update(neighboursAlive: number): void {
        this._alive = neighboursAlive == 3 || (neighboursAlive == 2 && this._alive);
    }
}