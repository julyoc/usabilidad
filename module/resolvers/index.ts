//import * as mongoose from 'mongoose';

export default {
    Query: {
        /**
         * @function hello
         * @param root (_) config param 
         * @param input use { property } 
         * @param context get data from server
         * @returns {string}
         */
        hello: (_, { name }, context) => {
            return `hola ${name}`;
        }
    },
    Mutation: {
        /**
         * @function mute
         * @param root (_) config param 
         * @param input use { property } 
         * @param context get data from server
         * @returns {string}
         */
        mute: (_, { data }, context) => {
            return data;
        }
    }
};