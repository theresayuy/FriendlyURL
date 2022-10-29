import {expect, test } from '@jest/globals';
import axios from "axios";

import { getWindowDim } from ".";
import { handleSubmit } from "../components/EnterURL/utils";
import { axiosGet } from "../components/Main/utils"

const TEST_URL_1 = "https://en.wikipedia.org/wiki/List_of_Unicode_characters"

jest.mock('axios');

describe("handleSubmit from EnterURL utils", () => {
	describe("when API call is successful", () => {
		it("should change the doc and the oldURLRef", async () => {
			// given
			let doc = ({
				long: "",
				short: ""
			});
			let oldURLRef = ({
				current: ""
			}); // pretend this is a ref even though its not
			const setDoc = ((newDoc) => {
				doc.long = newDoc.long;
				doc.short = newDoc.short;
			});
			const newDocMock = ({
				long: TEST_URL_1,
				short: ""
			});
			axios.post.mockResolvedValueOnce(newDocMock);

			// when
			await handleSubmit(setDoc, oldURLRef, TEST_URL_1);

			// then
			expect(axios.post).toHaveBeenCalledWith(
				`http://localhost:5000/api/urls`, 
				newDocMock
			);
			expect({a: doc.long, b: doc.short, c: oldURLRef.current}).toEqual({
				a: TEST_URL_1,
				b: "",
				c: TEST_URL_1
			});
		});
	});
}); // make sure the backend is running in node

test("getWindowDim() from ./utils", () => {
	expect(getWindowDim()).toStrictEqual({
		winH: window.innerHeight,
		winW: window.innerWidth
	});
});
