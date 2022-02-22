const puppeteer = require('puppeteer');

class Bot{

    async newBrowser(url){
        const browser = await puppeteer.launch( {headless:true, ignoreHTTPSErrors: true}  );
        const page = await browser.newPage();
        let errorHttpResponse = {}
        try{
            try{
                const nice = await page.goto(`https://${url}/login.cgi`,{timeout:10000})
            }catch{ 
                const nice = await page.goto(`https://${url}:80`,{timeout:10000})
            }
            }catch(erro){
                browser.close()
                return console.log(errorHttpResponse = {
                    title: "Error" ,
                    status: "inacessivel",
                    ip:url
                    });
            }
        
        const log = await page.evaluate(() =>{
            return {
                title: document.querySelector('title').innerHTML, 
            }
        });
        log.status = "Acessivel"
        log.ip = url
        await browser.close();
        return log
    } 
}

module.exports = Bot