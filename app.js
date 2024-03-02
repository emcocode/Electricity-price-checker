import Scraper from './src/Scraper.js'

const scraper = new Scraper();

try {
  let res = await scraper.getPrice("https://www.elbruk.se/", 4);
  console.log(`\nThe electrical prices for SE4 are:\n-->Today: ${res[0]}\n-->Tomorrow: ${res[1]}`) //TODO: Ändra zon-hårdkodning
} catch (error) {
  console.log("The price could not be retrieved.")
}