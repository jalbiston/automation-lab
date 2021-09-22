const { Builder, Capabilities, By } = require("selenium-webdriver");
const { isExportDeclaration } = require("typescript");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:5501/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});



describe('add and cross off movie', async () => {
test("Add a movie to the list", async () => {
  const input = await driver.findElement(By.xpath("//form/input"));
  const button = await driver.findElement(By.xpath("//form/button"));

  await input.sendKeys("Step Brothers\n");

  await driver.sleep(2000);
});


test('This will cross a move off the list', async () => {
    const crossOffButton = await driver.findElement(By.xpath('//li/button'))

    await crossOffButton.click()

    await driver.sleep(3000)
    })

    
})