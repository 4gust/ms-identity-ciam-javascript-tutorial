/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var axios = require('axios');
// var authProvider = require("./auth/AuthProvider");

/**
 * Makes an Authorization "Bearer" request with the given accessToken to the given endpoint.
 * @param endpoint
 * @param accessToken
 * @param method
 */
const fetch = async (endpoint, accessToken = "", method = "GET", data = null) => {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    console.log(`request made to ${endpoint} at: ` + new Date().toString());

    switch (method) {
        case 'GET':
            const response = await axios.get(endpoint, options);
            return await response.data;
        case 'POST':
            return await axios.post(endpoint, data, options);
        case 'DELETE':
            return await axios.delete(endpoint + `/${data}`, options);
        case 'PATCH': 
            const options1 = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
            };
            // console.log(data);
            // axios.patch()
            return await axios.patch(endpoint, ReqBody = data, options1);

        default:
            return null;
    }
};


module.exports = { fetch };




// OneAuth_UserInputNeeded_965ya 6621 (+1487.77%)40.11 (-56.53%)0.51 (+1311.82%)
// OneAuth_UserInputNeeded_9u8f4 5226 (+174100%)31.66 (+4669.71%)0.4 (+154795.94%)
// OneAuth_UserInputNeeded_9ucgu 4023 (+0%)24.37 (+0%)0.31 (+0%)
// OneAuth_UserInputNeeded_9mvhq