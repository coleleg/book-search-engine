const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedBooks')
                
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect Credentials Provided.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect Credentials Provided.');
            }

            console.log('Login Successful!');
            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parents, args, context) => {
            const user = await User.create(args);

            const token = signToken(user);

            return { token, user };
        },

        saveBook: async (parent, args, context) => {
            const currentUser = await User.findOne({ _id: context.user._id });
            if (currentUser) {
                return User.findByIdAndUpdate(
                    { _id: currentUser._id },
                    { $push: { savedBooks: args.bookId } },
                    { new: true }
                )
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeBook: async (parent, args, context) => {
            const currentUser = await User.findOne({ _id: context.user._id });
            if (currentUser) {
            const book = await Book.findOneAndDelete({ bookId: args.bookId });
            return book;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}