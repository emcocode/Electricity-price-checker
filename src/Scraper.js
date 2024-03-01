import { JSDOM } from 'jsdom'

/**
 * Scraper for retrieving links.
 */
export default class Scraper {

  /**
   * Method for retrieving the links (a href) on the page.
   * @param {string} path is the page path to check.
   * @returns An array of links.
   */
  async scrapeLinks(path) {
    try {
      const response = await fetch(path)
      if (!response.ok) {
        console.log("Scraping links...FAILED")
        throw new Error(`Error! status: ${response.status}`)
      }

      const html = await response.text()
      const dom = new JSDOM(html)
      const document = dom.window.document
      const cells = document.querySelectorAll('#dx-922d1c93-26a7-0b31-55e2-6a0d41a2492d > tbody > tr:nth-child(1)')


      console.log(cells)
      for (let a of cells) {
        console.log(a)
      }

      console.log(`Scraping links from: "${path}"...OK`)
      // return links
    } catch (error) {
      console.error(`Failed to scrape links from "${path}".`)
      throw error
    }
  }
}



