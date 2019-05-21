import {setHighestPriority} from "./index";

describe("" , () => {
  it("solution", () => {
    const arr = [2,1,3,2];
    const result = [3,2,2,1];
    expect(setHighestPriority.setHighestPriority(arr)).toEqual(result);
  });
});
