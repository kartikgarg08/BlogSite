const Blog = require('./models/blog');

const blogs = [
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'John',
        // date: Date
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Joe',
        // date: Date
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Max',
        // date: Date
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Bob',
        // date: Date
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'Jim',
        // date: Date
    },
    {
        topic: "Topic",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, a nulla. Doloremque voluptatibus necessitatibus, aliquid quam ipsam esse, sequi vitae dolor pariatur fugit deserunt excepturi cum reiciendis modi aut temporibus?",
        name: 'William',
        // date: Date
    },
];

const seedDB = async()=> {
    // await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log('DB seeded');
}

module.exports = seedDB;