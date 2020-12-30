import Grid from '../grid';
import ICell from '../ICell';
import ICellFactory from '../ICellFactory';

import {Mock, It, Times, IMock} from 'moq.ts';

describe("Grid", () => {
    let mockCell: IMock<ICell>;
    let mockFactory: IMock<ICellFactory>;
    let grid: Grid;
    beforeEach(() => {
        mockCell = new Mock<ICell>()
            .setup(x => x.alive)
            .returns(true)
            
            .setup(x => x.update(It.IsAny<number>()))
            .returns();

        mockFactory = new Mock<ICellFactory>()
            .setup(x => x.create)
            .returns(() => mockCell.object());

        grid = new Grid(3, 3, mockFactory.object());
        grid.update();
    });

    describe("update method", () => {
        test("should call on all cells", () => {
            mockCell.verify(x => x.update, Times.Exactly(9))
        });

        test("should call with correct value", () => {
            // not going to implement, but should check at least a couple cells are called with the correct value
        });
    })
})