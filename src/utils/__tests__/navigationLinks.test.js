import links from "../navigationLinks.js";

describe("links",() =>{
    test("url metho returns valid path", () => {
        const link = links[0];
        const url = link.url;
        expect(url).toBe("/")
    })
});