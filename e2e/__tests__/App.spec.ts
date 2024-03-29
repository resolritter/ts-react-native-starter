import Labels from "../../src/Labels"

describe("Create Android session (wd)", () => {
  it("Captures the sample text in the Home page", async () => {
    const wholeApp = await browser.$(`~${Labels.Root}`)
    await wholeApp.waitForDisplayed(3000)

    const presentationElement = await browser.$(
      `~${Labels.HomePage.PresentationText}`,
    )
    expect(
      await browser.getElementText(presentationElement.elementId),
    ).toMatchInlineSnapshot(`"HomePage__PresentationText"`)
  })
})
