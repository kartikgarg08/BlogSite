const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');
const { isLoggedIn } = require('../middleware');

//get all the blogs
router.get('/blogs', async(req, res) => {
    const blogs = await Blog.find();
    res.render('blogs/index', {blogs});
});

//form to create a new blog
router.get('/blogs/new', (req, res) => {
    res.render('blogs/new');
});

//create a new blog
router.post('/blogs', async(req, res) => {
    try {
        const newBlog = {
            ...req.body
        }
    
        await Blog.create(newBlog);

        req.flash('success', 'Blog Created Successfully!!');
        res.redirect('/blogs');
    } 
    catch (e) {
        req.flash('error', 'OOPs, Something went wrong');
        res.redirect('/error');
    }
});

//show a particular blog
router.get('/blogs/:id', async(req, res) => {
    try {
        const { id } = req.params;

        //inflating the found blog with the reviews using populate
        const blog = await Blog.findById(id).populate('reviews');
        res.render('blogs/show', { blog });
    } 
    catch (e) {
        req.flash('error', 'OOPs, Something went wrong');
        res.redirect('/error');
    }
});

//edit a blog form prefilled with data
router.get('/blogs/:id/edit', isLoggedIn, async(req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        res.render('blogs/edit', { blog });
    } 
    catch (e) {
        req.flash('error', 'OOPs, Something went wrong');
        res.redirect('/error');
    }
});

//updating the blog with given payload
router.patch('/blogs/:id', isLoggedIn, async(req, res) => {
    try {
        const updateBlog = req.body;
        const { id } = req.params;
        await Blog.findByIdAndUpdate(id, updateBlog);
        res.redirect(`/blogs/${id}`);
    } 
    catch (e) {
        req.flash('error', 'OOPs, Something went wrong');
        res.redirect('/error');
    }
});

//delete a blog
router.delete('/blogs/:id', isLoggedIn, async(req, res) => {
    try {
        const { id } = req.params;
        await Blog.findByIdAndDelete(id);
        res.redirect('/blogs');
    } 
    catch (e) {
        req.flash('error', 'OOPs, Something went wrong');
        res.redirect('/error');
    }
});

//creating comment for each blog
router.post('/blogs/:id/comment', isLoggedIn, async(req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);

        const { comment } = req.body;
        const review = new Review({ comment, user: req.user.username });

        blog.reviews.push(review);

        await blog.save();
        await review.save();

        req.flash('success', 'Successfully created comment!!');
        res.redirect(`/blogs/${id}`);
    } 
    catch (e) {
        req.flash('error', 'OOPs, Something went wrong');
        res.redirect('/error');
    }
});

module.exports = router;