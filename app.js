import Scraper from './src/Scraper.js'

const scraper = new Scraper();

let res = scraper.scrapeLinks("https://data.nordpoolgroup.com/auction/day-ahead/prices?deliveryDate=latest&deliveryAreas=AT,SE4&currency=SEK&aggregation=Daily");
