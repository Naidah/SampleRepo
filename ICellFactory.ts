import ICell from "./ICell";

export default interface ICellFactory {
    create(): ICell;
}