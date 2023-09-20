const axios = require('axios');

const format = (data) => {
  const message = {
    embeds: [
      {
        title: 'JavaScript Weekly',
        image: { url: data[0].imageURL },
        fields: [],
      },
    ],
  };
  try {
    data.forEach((obj, i) => {
      message.embeds[0].fields.push({
        name: ``, value: `${i + 1}. [${obj.title}](${obj.url})`,
      });
    });
    message.embeds[0].fields.push({ name: '', value: '---------------' });
    message.embeds[0].fields.push({ name: '', value: '>> [Discord JavaScript Weekly Bot GitHub](https://github.com/AirCodeLabs/aircode/tree/main/examples/discord-javascript-weekly)' });

     
  } catch (err) {
    console.log(err);
  }
  return message;
};

module.exports = {
  sendToWebHook: async (data) => {
    const message = format(data);
    const res = await axios({
      method: 'post',

      // Get the Discord group's WebHook from the environment variable
      url: process.env.discordWebHook,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(message),
    });
    return res.data;
  },
};
