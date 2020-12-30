import ICell from "./ICell";
import ICellFactory from "./ICellFactory";

export default class Grid {
    private _grid: ICell[][];

    constructor(width: number, height: number, factory: ICellFactory) {
        this._grid = [];
        for (let x = 0; x < width; x++) {
            const row = [];
            for (let y = 0; y < height; y++) {
                row.push(factory.create());
            }
            this._grid.push(row);
        }
    }

    update() {
        this._grid.forEach((row) => row.forEach((cell) => cell.update(3)));
    }
}