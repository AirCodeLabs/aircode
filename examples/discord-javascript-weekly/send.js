const aircode = require('aircode');
const axios = require('axios');
const discord = require('./discord');
const tools = require('./tools');

module.exports = async function (params, context) {
  // Retrieves the index location of the current message from the 'count' table using database methods
  const countTable = aircode.db.table('count');
  let countObj = await countTable.where().findOne();
  if (!countObj) return "Set the value of the index field in the 'count' table";
  const index = countObj.index;

  // Get grab data
  let res;
  const url = `https://javascriptweekly.com/issues/${index}`;
  try {
    res = await axios({ url });
  } catch (err) {
    console.log(err);
    return err;
  }

  const formatData = await tools.format(res.data);
  if (!formatData.length) {
    console.log(`Index:${index} don't have article content.`);
    return;
  }

  try {
    discord.sendToWebHook(formatData);
  } catch (err) {
    console.log(err);
    return err;
  }

  // Update the index and store it in the index table
  countObj.index++;
  await countTable.save(countObj);

  // The function must have a return
  return { error: 0 };
};
