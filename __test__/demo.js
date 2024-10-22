const fs = require("fs");

const domain = "http://172.17.5.8/lms/contdev/";
const main = async () => {
  let data = fs.readFileSync("./abc.html", "utf-8");

  data = data.replaceAll(/\(content\/|"content\//g, (string) => {
    return string.replace("content", `${domain}/content`);
  });
  fs.writeFileSync("abcV2.html", data);
};

main();
