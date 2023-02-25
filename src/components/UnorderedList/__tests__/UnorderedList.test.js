import { render, screen } from "@testing-library/react";
import UnorderedList from "../UnorderedList";
import { List } from "../UnorderedList";

const Products  = ({name, price, url}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <a href="">{url}</a>
        </div>
    );
}


test("See if list items are displayed", () => {

    const data = [
        {
            id: function(){
                return this.name
            },
            name: "Desert",
            price: "12.99",
            url: "/"
        },
        {
            id: function(){
                return this.name
            },
            name: "Toys",
            price: "10.99",
            url: "/"
        },
        {
            id: function(){
                return this.name
            },
            name: "Food",
            price: "5.99",
            url: "/"
        }
    ];

    render(<List data={data} Component={<Products/>}/>);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toBeInTheDocument();

})