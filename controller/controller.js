const { response } = require('express');
const {FEED} = require('../model/FEED');

const home = (req, res) => {
    if (req.method === 'GET') {
        FEED.find()
        .then(result => {
            res.render('feed', {result, pageTitle: 'Welcome To Facebook', error: null})
        })
    }
    if (req.method === 'POST') {
        const feeds = new FEED(req.body)
        feeds.save()
        // console.log(feeds)
            .then(response=>{
                // console.log(response)
                res.redirect('/feed')
            })
            .catch(err => {                
                FEED.find()
                .then(result => res.render('feed', { pageTitle: 'Welcome To Facebook', result, error: err.errors}))
                .catch(err => console.log(err.errors))
            })
            // console.log('sent')
    }
    
}


const updateFeed = (req, res) => {
    FEED.findById({_id: req.params.id})
    .then(result => {
        res.render('editOne', {result, pageTitle: 'Edit Page', error: false } )
    })
    .catch(err => {
        console.log(err.errors);
    })
}

removeFeed = (req, res) => {
    FEED.findByIdAndDelete(req.params.id)
    .then(result => {
        res.redirect('/feed')
    })
    .catch(err => console.log(err))
}
const editFeed = (req, res) => {
    FEED.findByIdAndUpdate({_id: req.params.id})
    .then(result => {
        result.nameField = req.body.nameField;
        result.messageField = req.body.messageField;
        result.save()
        .then( () => {
            res.redirect('/feed/' + req.params.id)
        })
        .catch(err => {
            res.render('editOne', {result , pageTitle:'Edit Message', error:err.errors})
        })
    })
    .catch(err => {
        console.log(err.errors);
    })
}

const showOne = (req, res) => {
    FEED.findById(req.params.id)
        .then((result) => {
            res.render('onePage',{ post: result ,pageTitle: 'Single Article'} )
        })
        .catch(err => console.log(err) )
}

module.exports = {
    home,
    showOne,
    updateFeed,
    removeFeed,
    editFeed
}