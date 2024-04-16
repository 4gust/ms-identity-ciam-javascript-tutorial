/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */



// Refers to the user that is single user singed in.
// https://learn.microsoft.com/en-us/graph/api/user-update?view=graph-rest-1.0&tabs=http
const GRAPH_ME_ENDPOINT = "https://graph.microsoft.com/" + "v1.0/me";
const GRAPH_API_ENDPOINT = "https://graph.microsoft.com/";



module.exports = {
    msalConfig,
    REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI,
    TENANT_SUBDOMAIN,
    GRAPH_API_ENDPOINT,
    GRAPH_ME_ENDPOINT,
};
