const Blog = require('./models/blog');

const blogs = [
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'John',
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Joe',
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Max',
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Bob',
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Jim',
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'William',
    },
];

const seedDB = async()=> {
    // await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log('DB seeded');
}

module.exports = seedDB;