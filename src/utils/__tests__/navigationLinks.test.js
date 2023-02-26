import links from "../navigationLinks";

describe("links",() =>{
    test("url metho returns valid path", () => {
        const link = links[0];
        const url = link.url(link.name);
        expect(url).toBe("home")
    })
});