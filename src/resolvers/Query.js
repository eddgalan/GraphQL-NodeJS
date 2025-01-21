const Query = {
    hello: (parent, args, ctx, info) => 'Hello World!',
    quantity: () => 100,
    getUser: () => {
         return { name: 'Edson', email: 'edson@domain.com' };
    },
};

export default Query;