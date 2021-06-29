const fs = require(`fs`);
const path = require(`path`);
const puppeteer = require("puppeteer");
const frontmatter = require('front-matter')

async function createShareImage(browser, folder, filePath, {title, description}) {
    const slug = filePath.replace(/^\./, '')
    const page = await browser.newPage()
    await page.goto(
        `file://${__dirname}/social-card.html?slug=posts/${slug}&title=${title}&excerpt=${description}`,
        { waitUntil: "networkidle0" }
    )
    await page.screenshot({
        path: folder + `/${slug}.png`,
        type: "png",
        omitBackground: true,
    })
    await page.close();
}

async function main() {
    const folder = path.join(__dirname, '../public/images/social');
    const basePath = path.join(__dirname, '../src/pages/posts');

    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        defaultViewport: {
            width: 1200,
            height: 630,
        },
    })

    const files = fs.readdirSync(basePath)
    for (const file of files) {
        const filePath = path.parse(file)
        if (filePath.ext === '.md') {
            const src = fs.readFileSync(basePath + '/' + file).toString();
            var content = frontmatter(src);
            await createShareImage(browser, folder, filePath.name, content.attributes)
        }
    }

    await browser.close();
}

main()