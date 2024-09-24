const fs = require("fs");
const PATH = "./Chapter/Images/";
let fileFolder = [];

fs.readdir(PATH, (err, files) => {
  files.forEach((file) => {
    fileFolder.push(file);
  });
  console.log(fileFolder);
  fileFolder.forEach((folder) => {
    fs.readdir(PATH + folder, (err, files) => {
      let filesJSON = {};
      files.forEach((file) => {
        if (file.split(".")[1] != "json") {
          filesJSON[String(file.split(".")[0] * 100).padStart(5, "0")] = {
            path: PATH + folder + "/" + file,
            alt_name: file,
          };
        }
      });
      console.log(filesJSON);
      fs.writeFile(
        PATH + "/" + folder + "/" + "image.json",
        JSON.stringify(filesJSON),
        (err, good) => {
          if (err) {
            console.log("Error writing file");
          }
        }
      );
    });
  });
});
