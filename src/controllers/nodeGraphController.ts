import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import path from 'path';
import fs from 'fs';
import randomColor from 'randomcolor';
import { Request, Response, NextFunction } from 'express';
import { processPage, crawl } from 'crawl-website-connectedness';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const queue = [`http://localhost:3000/blog/software/main`];
  const visited = new Set('');
  crawl(queue, visited);
};
