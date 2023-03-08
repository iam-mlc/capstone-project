import { screen, render } from "@testing-library/react";
import Button from "../Button";
import { BrowserRouter as Router } from 'react-router-dom';

test("See if it will render a link element", () => {
    render(
        <Router>
            <Button text="Visit" role="link" />
        </Router>
    );
    const linkItem = screen.getByRole("link");
    expect(linkItem).toBeInTheDocument();
});

test("See if it will render a button element", () => {
    render(
            <Button text="Click Me" role="button" />
    );
    const buttonItem = screen.getByRole("button");
    expect(buttonItem).toBeInTheDocument();
});

test("See if it will render a submit button element", () => {
    render(
            <Button text="Click Me" role="submit" />
    );
    const buttonItem = screen.getByRole("button");
    expect(buttonItem).toBeInTheDocument();
});






