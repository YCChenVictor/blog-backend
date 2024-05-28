import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import path from 'path';
import fs from 'fs';
import randomColor from 'randomcolor';
import { Request, Response, NextFunction } from 'express';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  // I am going to use DFS concept to solve this graph like problem.
  // const { category } = req.query
  const category = 'software'; // remove this line after testing
  const domain = 'http://localhost:3000';
  const queue = [`http://localhost:3000/blog/${category}/main`];
  const visited = new Set();
  const structure:Record<string, string[]> = {};
  const items = [];

  const storeNodeGraphAsFile = async (result: object) => {
    const filePath = `data/${category}/nodeGraph.json`;
    // Convert JSON data to a string
    const jsonString = JSON.stringify(result);

    // Create the necessary directories if they don't exist
    const dirname = path.dirname(filePath);

    try {
      await fs.promises.mkdir(dirname, { recursive: true });
      await fs.promises.writeFile(filePath, jsonString);
      console.log('Save Node Graph Data!');
    } catch (err) {
        console.error(`Error: ${err}`);
    }
  };

  crawl(queue, visited as Set<string>, domain)
    .then((structure) => {
      // storeSearchBarAsFile({"items": items})
      storeNodeGraphAsFile(desiredFormat(structure as object));
    })
    .catch((error) => {
      console.error('Error occurred during crawling:', error);
    });

  function crawl(queue: string[], visited: Set<string>, domain: string) { // Promise in this function
    const childNodes: string[] = [];
    const url = queue.shift();
    console.log(url);
    if (!url) {
      return Promise.resolve(structure); // resolve with returning the final structure
    } else {
      if (!visited.has(url)) {
        visited.add(url);
        return new Promise(async (resolve, reject) => {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(url, { waitUntil: 'networkidle2' });
          const html = await page.content();

          // Rest of the code remains the same
          const $ = cheerio.load(html);
          getArticleContent($, url);

          $('a').each((i, link) => {
            const href = $(link).attr('href');
            if (href && href.startsWith('/blog/') && !href.includes('#')) {
              const absoluteUrl = domain + href;
              childNodes.push(href);
              queue.push(absoluteUrl);
            }
          });

          const parentNode = url.replace(domain, '');
          structure[parentNode] = childNodes;
          resolve(crawl(queue, visited, domain)); // resolve with calling this function again
        });
      } else {
        return crawl(queue, visited, domain);
      }
    }
  }

  function getArticleContent($: cheerio.Root, url: string) {
    const baseUrl = 'http://localhost:3000'; // should be changed in the future according to environment variable
    const title = $('h1').text();
    const content = $('#article').text().replace(/(\r\n|\n|\r)/gm, '').replace(/ +(?= )/g,'');
    const item = {'title': title, 'content': content, 'url': url.replace(baseUrl, '')};
    items.push(item);
  }

  // function storeSearchBarAsFile(result) {
  //   const filePath = `data/${category}/searchBar.json`
  //   // Convert JSON data to a string
  //   const jsonString = JSON.stringify(result)
  
  //   // Create the necessary directories if they don't exist
  //   const dirname = path.dirname(filePath)

    // if (!fs.existsSync(dirname)) {
    //   fs.mkdir(dirname, { recursive: true })
    // }

  //   // Write the JSON data to a file
  //   fs.writeFileSync(filePath, jsonString)
  //   console.log('Save Search Bar Data!')
  // }
  
  function desiredFormat(structure: object) {
    let nodes: { id: number, name: string, url: string, group: any }[];
    function getGroupFrom(value: string) {
      // Add your implementation here
    }

    let links;
    nodes = Object.keys(structure).map((value, index) => {
      let name = value.split('/').slice(-1)[0];
      if (name === 'main') {
        name = value.split('/').slice(-2)[0];
      }
      return {
        id: index + 1,
        name: name,
        url: value,
        group: getGroupFrom(value),
      };
    });
    nodes = giveColorByGroupTo(nodes);
    links = Object.entries(structure).map(([key, value]) => {
      return value.map((item: string) => { // Explicitly specify the type of 'item' as string
        const source = getIdFromNodeName(key);
        const target = getIdFromNodeName(item);
        if(source && target) {
          return {source: source, target: target};
        }
      });
    }).flat().filter(obj => obj !== undefined);

    return { nodes: nodes, links: links };
  
    function getIdFromNodeName(url: string) {
      const result = nodes.find((node) => node.url === url);
      if(result) {
        return result.id;
      } else {
        null;
      }
    }
  
    function giveColorByGroupTo(nodes: { id: number, name: string, url: string, group: any, color?: string }[]) {
      const groups = [...new Set(nodes.map(node => node.group))];
      const colors = randomColor({ count: groups.length });
      nodes.map((node) => {
        node.color = colors[groups.indexOf(node.group)];
      });
      return nodes;
    }
  }
};
