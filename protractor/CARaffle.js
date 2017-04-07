exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://caraffle3.us-east-1.elasticbeanstalk.com/',
  specs: ['spec.js'],
  multiCapabilities: [{browserName: 'firefox'}, ],
  onPrepare: function(){
    browser.driver.get('http://caraffle3.us-east-1.elasticbeanstalk.com/');
    element(by.linkText('About')).click();
    element(by.linkText('Home')).click();
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Enter Raffle')).click();
  }
}
