import Scraper from './src/Scraper.js'

const scraper = new Scraper()
const zone = process.argv.slice(2)
const path = "https://www.elbruk.se/" 

// Catch wrong arguments
if (zone.length === 0) {
  console.error('ERROR: No argument.')
  process.exit(1)
} else if (zone.length > 1) {
  console.error('ERROR: Too many arguments.')
  process.exit(1)
} else if (zone[0] > 4 || zone[0] < 1 || (!isNaN(zone[0]) && Number.isInteger(zone[0]))) {
  console.error('ERROR: Argument must be a number between 1-4.')
  process.exit(1)
}

// Run the scraper
try {
  let res = await scraper.getPrice(path, zone[0]);
  console.log(`\nThe electrical prices for SE${zone[0]} are:\n-->Today: ${res[0]}\n-->Tomorrow: ${res[1]}`)
} catch (error) {
  console.log("The price could not be retrieved.")
}
