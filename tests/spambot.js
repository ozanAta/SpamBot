module.exports = {
  'Demo test Spam Bot' : function (browser) {
    browser
      .url('https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier')
      .waitForElementVisible('input[name=Email]', 30000)
      .pause(1000)
      .setValue('#Email','email@gmail.com') // Your e-mail address goes here.
      .keys(['\uE006'])
      .waitForElementVisible('input[name=Passwd]', 3000)
      .pause(1000)
      .setValue('#Passwd','password') // Your password goes here
      .keys(['\uE006'])
      .waitForElementVisible('body',4000)
      .pause(10000)
      .perform(function(){
        for(i = 0; i < amountOfEmail ; i ++){ // Enter amount of email in it's place
          browser
          .useXpath().click("//*[contains(text(), 'E-POSTA YAZ')]")
          .pause(500)
          .setValue('css selector','.vO','email@gmail.com') // Target e-mail address goes here
          .pause(250)
          .setValue('css selector','.aoT','Your Topic') // Topic goes here
          .pause(250)
          .setValue('css selector','.LW-avf','Your Message') // Your message goes here
          .click('css selector', '.aoO')
          .pause(250)
        }
      })
      .pause(1000)
      .perform(function(){
        console.log("It's done. Thanks for choosing SpamBot");
      })
      .end();
  }
};