module.exports = async function (context, req) {
    context.log('Create Function processing a request.');

    // context.registerProduct = req;

    if (!req.body) {
        context.res = {
            status: 400,
            body: 'productId, productName, productDescription が必須項目です。',
        };
        return;
    }

    const { productId } = req.body;
    const { productName } = req.body;
    const { productDescription } = req.body;

    if (productId && productName && productDescription) {
        // 全部揃っているときだけ登録する.
        context.bindings.registerProduct = {
            productId,
            productName,
            productDescription,
            timestamp: new Date().toISOString(), // '2019-09-14 21:27:47Z',
        };
        context.res = {
            status: 200,
            body: 'Success',
        };
    } else {
        context.res = {
            status: 400,
            body: 'productId, productName, productDescription が必須項目です。',
        };
    }
};
