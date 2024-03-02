import { JSDOM } from 'jsdom'

/**
 * Scraper for retrieving the electric price.
 */
export default class Scraper {

  /**
   * Method for retrieving the electricity price.
   * @param {string} path is the page path to check.
   * @param {number} zone is electric zone in Sweden (1-4).
   * @returns An array of links.
   */
  async getPrice(path, zone) {
    try {
      const response = await fetch(path)
      if (!response.ok) {
        console.log("Scraping prices...FAILED")
        throw new Error(`Error! status: ${response.status}`)
      }

      const html = await response.text()
      const dom = new JSDOM(html)
      const document = dom.window.document

      const pricesList = document.querySelector('.price-li');
      const zonePrice = pricesList.querySelectorAll('li')[(zone - 1)].querySelector('span:nth-child(2)').textContent;

      console.log(`Scraping for zone SE${zone}...OK`)
      return zonePrice
    } catch (error) {
      console.error(`Failed to scrape for zone SE${zone}.`)
      throw error
    }
  }
}

