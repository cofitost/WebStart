/*eslint-disable */
const {Builder, By, Capabilities} = require('selenium-webdriver');
const {expect} = require('chai');
const path = require('path');
// 上述為宣告Selenium、chai測試框架與方法

const seleniumServer = 'http://140.134.26.76:38808/wd/hub'; //輸入課程使用的Selenium server url 
const testFile = 'index.html'; //輸入受測作業檔名 ex:index.html


describe('測試index.html', () => { //測試區塊，可輸入這個測試檔的目的 ex:測試index.html

  let capabilities = Capabilities.chrome();
  capabilities.set("resolution",'1024x768')
  const driver = new Builder().forBrowser('chrome').usingServer(seleniumServer).withCapabilities(capabilities).build(); //使用chrome browser來測試Web作業
  const dirPathNum = path.resolve(__dirname).split('/').indexOf('src') - 1; //ProgEdu系統判定作業，勿操作

  it('開啟作業網頁',async()=> {//此為Selenium server獲取local HTML file，勿操作
    // await driver.get('file:///' + '/var/lib/workspace/' + path.resolve(__dirname).split('/')[dirPathNum] + '/src/web/html/' + testFile);
    await driver.get('http://140.134.26.76:28888');
  });
  
  it('測試input功能', async () => { //測試案例test case，可撰寫多個it並說明測試細節，有利於學生讀懂測試錯誤
    await driver.findElement(By.xpath("//form[@name='loginForm']/input[@name='username']")).sendKeys('123');
    await driver.findElement(By.xpath("//form[@name='loginForm']/input[@name='password']")).sendKeys('123');
  });

  it('測試按鈕功能', async () => { //測試案例test case，可撰寫多個it並說明測試細節，有利於學生讀懂測試錯誤
    await driver.findElement(By.xpath("//form[@name='loginForm']/input[@name='continue']")).click();
  });

  it('測試頁面title是否為HelloWorld', async () => { //測試案例test case，可撰寫多個it並說明測試細節，有利於學生讀懂測試錯誤
    const title = await driver.getTitle();
    expect(title).to.equal('HelloWorld');
  });

  after(async () => driver.quit()); // 測試結束，關閉browser
});