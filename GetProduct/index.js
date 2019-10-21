module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var products = context.bindings.inputDocument;

    if (products[0] === undefined) {
        context.res = {
            status: 400,
            body: "Productがありません。"
        };
    }
    else {
        context.res = {
            status: 200,
            body: JSON.stringify({
                "productId": products[0].productId,
                "productName": products[0].productName,
                "productDescription": products[0].productDescription,
                "timestamp": products[0].timestamp
            })
        };
    }
};
