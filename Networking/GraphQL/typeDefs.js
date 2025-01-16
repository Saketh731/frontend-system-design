// You define all your types here inside a String Literal
// Below is an SDL (Schema Definition Language). You can use some libraries like GPL to auto fill the below data
// ! => Mandatory field
// # => Comments inside a string literal
// type Query{} =>  All the methods defined in order to get data should be defined inside type Query
// type Mutation{} => All the methods defined in order to update data should be defined inside type Mutation

export const typeDefs = `
    type Author {
        id: ID!
        name: String!
        books: [Book]
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    type Query{
        authors: [Author]
        books: [Book]
    }

    type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
    }
`;
