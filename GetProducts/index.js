module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const products = context.bindings.inputDocument;

    if (products) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: JSON.stringify(
                products.map(p => ({
                    productId: p.productId,
                    productName: p.productName || '',
                    productDescription: p.productName || '',
                    timestamp: p.timestamp || '',
                }))
            ),
        };
    } else {
        context.res = {
            status: 400,
            body: 'nodata',
        };
    }
};
