const Query = {
    hello: (parent, args, ctx, info) => {
        const { name } = args;

        return `Hello ${name || 'World!'}`;
    },
    quantity: () => 100,
    getUser: () => {
         return { name: 'Edson', email: 'edson@domain.com' };
    },
};

export default Query;