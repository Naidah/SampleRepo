import { Mock, It, Times, IMock } from 'moq.ts';
import Cell from '../cell';

describe("Cell", () => {
    let cell: Cell;
    beforeEach(() => {
        cell = new Cell();
    });

    describe("alive state", () => {
        test("should default to false", () => {
            expect(cell.alive).toBeFalsy();
        });

        test("should toggle correctly", () => {
            cell.toggle();
            expect(cell.alive).toBeTruthy();

            cell.toggle();
            expect(cell.alive).toBeFalsy();
        });
    });

    describe("update method", () => {
        describe("when not alive", () => {
            test("to stay dead correctly", () => {
                cell.update(2);
                expect(cell.alive).toBeFalsy();

                cell.update(4);
                expect(cell.alive).toBeFalsy();
            });

            test("to come alive correctly", () => {
                cell.update(3);
                expect(cell.alive).toBeTruthy();
            })
        });

        describe("when alive", () => {
            test("to stay alive correctly", () => {
                cell.toggle();
                cell.update(2);
                expect(cell.alive).toBeTruthy();

                cell.update(3);
                expect(cell.alive).toBeTruthy();
            });

            test("to die correctly", () => {
                cell.toggle();
                cell.update(1);
                expect(cell.alive).toBeFalsy();

                cell.toggle();
                cell.update(4);
                expect(cell.alive).toBeFalsy();
            })
        })
    });
})