/**
 * This file contains unit tests for the components
 */

import { render, screen } from '@testing-library/react';

import App from './App';
import Main from "./components/Main";
import Background from "./components/Background";

test('renders h1 from Main', () => {
	render(<Main />);
	const h1Element = screen.getByText(/FriendlyURL/i);
	expect(h1Element).toBeInTheDocument();
});

test("renders p.Subtitle from Main", () => {
	render(<Main />);
	const pSubtitleElement = screen.getByText(/Make your URLs shorter./i);
	expect(pSubtitleElement).toBeInTheDocument();
});

test("renders text input from EnterURL", () => {
	render(<Main />);
	const textInputElement = screen.getByPlaceholderText("Enter a long URL here");
	expect(textInputElement).toBeInTheDocument();
});

test("renders submit input from EnterURL", () => {
	render(<Main />);
	const submitElement = screen.getByRole("button", {name: "Submit"});
	expect(submitElement).toBeInTheDocument();
});

test("renders anchor tag from Main", () => {
	render(<Main />);
	const linkElement = screen.getByRole("link");
	expect(linkElement).toBeInTheDocument();
});

test("renders stars from Background", () => {
	render(<Background />);
	const stars = screen.getAllByRole("img");
	stars.forEach((star) => {
		expect(star).toBeInTheDocument();
	});
});

test("renders Background from App", () => {
	render(<App />);
	const stars = screen.getAllByRole("img");
	expect(stars[Math.floor(Math.random() * (stars.length - 1))]).toBeInTheDocument();
});

test("renders Main from App", () => {
	render(<App />);
	const h1Element = screen.getByText(/FriendlyURL/i);
	expect(h1Element).toBeInTheDocument();
});
