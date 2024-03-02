import Scraper from './src/Scraper.js'

const scraper = new Scraper();

try {
  let res = await scraper.getPrice("https://www.elbruk.se/", 4);
  console.log("The price tomorrow will be: " + res)
} catch (error) {
  console.log("The price could not be retrieved.")
}