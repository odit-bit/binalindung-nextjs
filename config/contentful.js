const contentful = require("contentful");
//initialize contentful client
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

//get photoKabinet entry
async function fetchCMS(entryID) {
  return await client
    .getEntry(entryID)
    .then((entry) => client.parseEntries(entry));
}
//extract entry
function extractEntry(parseEntry) {
  return parseEntry;
}
//main function to query data from page
export async function getData(entryID) {
  const data = await fetchCMS(entryID);
  return extractEntry(data);
}
