const axios = require("axios");
const fs = require("fs");
const githubToken = "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";

const getRepos = (req, res, next) => {
  let searchstring = req.params.searchterm;

  if (searchstring != null) {
    axios({
      method: "get",
      url: `https://api.github.com/search/repositories?q=${searchstring}`,
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        res.send(response.data.items);

        fs.writeFileSync(
          "./all-repos.json",
          JSON.stringify(response.data.items),
          (err) => {
            if (err) {
              console.log("Error writing file", err);
            } else {
              console.log("Successfully wrote file");
            }
          }
        );
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.send("Please enter a name");
  }
};

const getBookmarks = (req, res, next) => {
  try {
    let data = fs.readFileSync("./bookmarks.json");
    let bookmark_json = JSON.parse(data);
    res.send(bookmark_json);
  } catch (err) {
    res.send("error in loading bookmarks");
  }
};

const bookmarkRepo = (req, res, next) => {
  let bookmarkid = req.params.id;
  axios({
    method: "get",
    url: `https://api.github.com/repositories/${bookmarkid}`,
    headers: { Accept: "application/vnd.github.symmetra-preview+json" },
  })
    .then((response) => {
      let arr;
      fs.readFile("./bookmarks.json", (err, data) => {
        if (err) throw err;
        arr = JSON.parse(data);
        arr.push(response.data);
        fs.writeFile(
          "./bookmarks.json",
          JSON.stringify(arr, null, 2),
          (err) => {
            if (err) {
              console.log("Error writing file", err);
            } else {
              return res
                .status(200)
                .send(`${bookmarkid} is booked successfully`);
            }
          }
        );
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteBookmark = (req, res, next) => {
  try {
    let id = req.params.id;
    fs.readFile("./bookmarks.json", (err, data) => {
      if (err) throw err;
      let bookmark_json = JSON.parse(data);
      const index = bookmark_json.findIndex((x) => x.reposid === Number(id));
      if (index !== undefined) bookmark_json.splice(index, 1);
      fs.writeFile(
        "./Bookmarks.json",
        JSON.stringify(bookmark_json, null, 2),
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    });
    res.status(200).send(`removed bookmark ${id} successfully`);
  } catch (err) {
    res.send(err);
    console.error(err);
  }
};

exports.getRepos = getRepos;
exports.getBookmarks = getBookmarks;
exports.bookmarkRepo = bookmarkRepo;
exports.deleteBookmark = deleteBookmark;
