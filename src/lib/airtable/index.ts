import Airtable from "airtable";

Airtable.configure({
  apiKey: `${process.env.AIR_TABLE_KEY}`,
});

const BASE_ID = `${process.env.AIR_TABLE_BASE_ID}`;

const sendToAirtable = async (table: string, body: object) => {
  console.log(BASE_ID);

  try {
    const data = { ...body };
    const base = Airtable.base(BASE_ID);
    const results = await base(table).create(data);
    if (results) return true;
  } catch (error) {
    console.log("air table error = ", error);
  }
  return false;
};

export { sendToAirtable };
