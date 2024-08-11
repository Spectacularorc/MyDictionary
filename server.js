const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// const bodyParser = require("body-parser"); router.use(bodyParser.json());

app.get("/", (req, res) => {

    console.log(path.join(__dirname, './public'))
    return res.sendFile('public/index.html', {root : __dirname});
    

})



app.get("/searchword", (req, res) => {
//   res.send("Hello World! Abhinav");
  console.log(req.query)
  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
    params: { word: req.query.word},
    headers: {
      "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "4c66f5c2d9msh9f4a7e6e44632cfp1d6a21jsna8e8196493d6",
    },
  };

  axios
    .request(options)
    .then(function (response) {
        // console.log(response.data);
        res.json(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
  

// let response = {}
// response.data = 
//     {
//         "definition": "1. To take away surreptitiously by force; to carry away (a human being) wrongfully and usually by violence; to kidnap. 2. To draw away, as a limb or other part, from its ordinary position.",
//         "word": "abduct",
//         "valid": true
//       }
     
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})
