module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.productId || (req.body && req.body.productId)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "製品名は" + "Starfruit Explosionです。"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
