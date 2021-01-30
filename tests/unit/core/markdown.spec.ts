import { mdImage, mdImageWithLink, mdLink } from "@/core/markdown";

describe("#mdLink", () => {
  it("returns a valid markdown link", () => {
    expect(mdLink("Alt text", "foo.md")).toBe("[Alt text](foo.md)");

    expect(mdLink("Example", "https://example.com")).toBe(
      "[Example](https://example.com)"
    );
  });
});

describe("#mdImage", () => {
  it("returns a valid markdown image", () => {
    expect(mdImage("Alt text", "foo.png")).toBe("![Alt text](foo.png)");

    expect(mdImage("Example", "https://example.com/foo.png")).toBe(
      "![Example](https://example.com/foo.png)"
    );
  });

  it("returns a valid markdown image with hover text", () => {
    expect(mdImage("Alt text", "foo.png", "My hover text")).toBe(
      '![Alt text](foo.png "My hover text")'
    );

    expect(mdImage("Example", "https://example.com", "My example")).toBe(
      '![Example](https://example.com "My example")'
    );
  });
});

describe("#mdImageWithLink", () => {
  it("returns a valid tag using all parameters set", () => {
    expect(
      mdImageWithLink("Alt text", "foo.png", "https://example.com", "My foo")
    ).toBe('[![Alt text](foo.png "My foo")](https://example.com)');

    expect(
      mdImageWithLink("My title", "/example.png", "https://example.com")
    ).toBe("[![My title](/example.png)](https://example.com)");
  });
  it("Does not encode special characters", () => {
    expect(
      mdImageWithLink(
        "My title",
        "/example.png",
        "https://example.com?foo=bar&fizz_buzz=baz&x>=2"
      )
    ).toBe(
      "[![My title](/example.png)](https://example.com?foo=bar&fizz_buzz=baz&x>=2)"
    );
  });
});