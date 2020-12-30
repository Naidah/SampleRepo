import sum from '../sum';
import { mocked } from 'ts-jest/utils';

test("That 1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
})