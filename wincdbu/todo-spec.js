describe('CA MSF Raffle UI Test - cdbu.io Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://win-preprod.us-east-1.elasticbeanstalk.com');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('I\'m In!')).click();
    });
});
