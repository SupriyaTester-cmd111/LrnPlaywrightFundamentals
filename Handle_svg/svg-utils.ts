import { Page, Locator } from '@playwright/test';

export function svgLocator(page: Page, selector = 'svg'): Locator {
  return page.locator(selector);
}

export function elementById(page: Page, id: string, svgSelector = 'svg'): Locator {
  return page.locator(`${svgSelector} #${id}`);
}

export async function getAttribute(page: Page, selector: string, attr: string): Promise<string | null> {
  return page.locator(selector).getAttribute(attr);
}

export async function getPathD(page: Page, selector: string): Promise<string | null> {
  return page.locator(selector).getAttribute('d');
}

export async function getTotalLength(page: Page, selector: string): Promise<number> {
  return page.locator(selector).evaluate((el) => {
    return (el as SVGPathElement).getTotalLength();
  });
}

export async function getPointAtLength(page: Page, selector: string, length: number): Promise<{ x: number; y: number }> {
  return page.locator(selector).evaluate((el, l) => {
    const pt = (el as SVGPathElement).getPointAtLength(l as number);
    return { x: pt.x, y: pt.y };
  }, length);
}

export async function clickElementCenter(page: Page, selector: string): Promise<void> {
  const locator = page.locator(selector);
  const bbox = await locator.evaluate((el) => {
    const b = (el as SVGGraphicsElement).getBBox();
    return { x: b.x, y: b.y, width: b.width, height: b.height };
  });
  await locator.click({ position: { x: Math.round(bbox.width / 2), y: Math.round(bbox.height / 2) } });
}
