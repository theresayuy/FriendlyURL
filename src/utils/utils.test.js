import {expect, test} from '@jest/globals';

import { getWindowDim } from ".";

//////////////////////////////////////
//									//
//			TEST ./utils			//
//									//
//////////////////////////////////////

test("getWindowDim() from ./utils", () => {
	expect(getWindowDim()).toStrictEqual({
		winH: window.innerHeight,
		winW: window.innerWidth
	});
});