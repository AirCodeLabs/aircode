const cheerio = require('cheerio');

module.exports = {
  format: async (htmlString) => {
    const $ = cheerio.load(htmlString);
    let itemEles = $('#content>.el-item');
    const imageURL = $('#content>.el-fullwidthimage img').attr('src');
    const data = [
      {
        title: itemEles.eq(0).find('a').eq(0).text().trim(),
        url: itemEles.eq(0).find('a').eq(0).attr('href'),
        imageURL,
      },
    ];
    itemEles = itemEles.find('.mainlink a');

    // Only 8 pieces of data are displayed in order not to disturb or cause disgust
    for (let i = 1; i < 8; i++) {
      const dom = itemEles.eq(i);
      data.push({
        title: dom.text().trim(),
        url: dom.attr('href'),
      });
    }
    return data;
  },
};
