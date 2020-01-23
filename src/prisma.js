// prisma.js - code required to connect nodejs app to prisma-graphql api

import {Prisma} from 'prisma-binding'
import {fragmentReplacements} from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'pratik',
    fragmentReplacements
});

export {prisma as default}



// prisma.query prisma.mutation prisma.subscription prisma.exists

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({id: authorId})

//     if(!userExists) {
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{author {id name email posts {id title published}}}')
//     return post.author
// };

// createPostForUser('ck57roctt00bb07204gt0f67p', {
//     title: 'Great books to read',
//     body: '1. The power of habits 2. As a man thinketh',
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })


// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({id: postId})

//     if(!postExists) {
//         throw new Error('Post not found')
//     }
//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{author {id name email posts {id title published}}}')
//     return post.author
// }

// updatePostForUser('ck5amshey000v07207yjnusiu', {published: false}).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })