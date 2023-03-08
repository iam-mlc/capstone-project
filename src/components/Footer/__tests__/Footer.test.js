import { screen, render } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import links from "../../../utils/navigationLinks.js";
import socialLinks from "../../../utils/socialLinks.js";

test("If footer is rendered", () =>{
    render(
    <Router>
        <Footer/>
    </Router>
    )
    const footerItem = screen.getByRole("contentinfo")
    expect(footerItem).toBeInTheDocument();
});
test("If footer contains image", () =>{
    render(
    <Router>
        <Footer/>
    </Router>
    )
    const image = screen.getByRole("img")
    expect(image).toBeInTheDocument();
});
test("If footer contains headings", () =>{
    render(
    <Router>
        <Footer/>
    </Router>
    )
    const headings = screen.getAllByRole("heading")
    expect(headings).toHaveLength(3);
});
test("If footer contains social links and navigation links", () =>{
    render(
    <Router>
        <Footer/>
    </Router>
    )
    const listItems = screen.getAllByRole("listitem")

    expect(listItems).toHaveLength(links.length + socialLinks.length)

    listItems.forEach((item, index) =>{
        expect(item).toBeInTheDocument();
    })
});