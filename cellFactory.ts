import Cell from "./cell";
import ICell from "./ICell";
import ICellFactory from "./ICellFactory";

export default class CellFactory implements ICellFactory {
    create(): ICell {
        return new Cell();
    }
}