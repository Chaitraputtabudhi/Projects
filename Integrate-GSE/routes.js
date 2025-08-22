const { default: axios } = require("axios");
const Result = require('./models.js');

require("dotenv").config();
const router = require('express').Router();


const API_KEY = process.env.API_KEY
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID

router.get(
    '/',
    async (req, res, next) => {
        const query = req.query.query;
        if (query == '' || query == undefined)
            res.render('response_view.html');
        else {
            const start = 1;
            const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}&start=${start}`;
            console.log("API_KEY:", API_KEY);
            console.log("SEARCH_ENGINE_ID:", SEARCH_ENGINE_ID);
            console.log("Request URL:", url);

            const data = (await axios.get(url)).data;
            const searchItems = data.items;
            const results = [];
            console.log(searchItems);
            for (let i = 0; i < searchItems.length; i++) {
                let longDescription;
                try {
                    longDescription = searchItems[i]['pagemap']['metatags'][0]['og:description'];
                    if (!longDescription)
                        longDescription = 'N/A';
                } catch (err) {
                    longDescription = 'N/A';
                }
                console.log(longDescription);
                const newResult = new Result({
                    title: searchItems[i]['title'],
                    description: longDescription,
                    snippet: searchItems[i]['snippet'],
                    url: searchItems[i]['link'],
                });
                await newResult.save();
                results.push(newResult);
            }
            res.render('response_view.html', { results: results });
        }
    }
);


module.exports = router;