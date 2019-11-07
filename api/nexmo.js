const Nexmo = require('nexmo');
require("dotenv").config();

const nexmo = new Nexmo({
  apiKey: process.env.NexmoApiKey,
  apiSecret: process.env.NexmoApiSecret,
});

sendSMS = (timeGap, user) => {
  const from = '12264064190';
  const to = user.phone;
  const text = `[TextMe]Your duration (${user.origins}--${user.destinations}) today is ${timeGap} minute(s) than the general`;
  nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if(responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      };
    };
  });
};


module.exports = sendSMS;