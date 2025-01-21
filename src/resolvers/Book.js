const Book = {
    register_by: (parent, args, { db }, info) => {
        return db.users.find(user => user.id === parent.register_by);
    },
    written_by: (parent, args, { db }, info) => {
        return db.authors.find(author => author.id === parent.written_by);
    }
};

export default Book;