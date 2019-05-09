const express = require('express')
const router = express.Router() 
const { authenticateUser } = require('../middleware/authenticate')
const { Note } = require('../models/note')

// localhost:3000/contacts
router.get('/', authenticateUser, function (req, res) {
    // will return all the documents in the collection
    Note.find({ user: req.user._id})
        .then(function (notes) {
            res.send(notes)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.post('/', authenticateUser, function (req, res) {
    const body = req.body
    const note = new Note(body)
    note.user = req.user._id 
    note.save()
        .then(function (note) {
            res.send(note)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.get('/:id',authenticateUser, function (req, res) {
    const id = req.params.id
    // find operation 
    Note.findOne({
        user: req.user._id, 
        _id: id
    })
    .then(function (note) {
            console.log(note.user, req.user._id)
            if (note) { // if note is found in DB
                res.send(note)
            } else { // else note not found in DB, send empty {}
                res.send({})
            }
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.delete('/:id', authenticateUser, function (req, res) {
    const id = req.params.id
    Note.findOneAndDelete({
        user: req.user._id, 
        _id: id 
    })
        .then(function (note) {
            res.send(note)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.put('/:id', authenticateUser, function (req, res) {
    const id = req.params.id
    const body = req.body
    // findByIdAndUpdate - by default will not run validations
    // new - return the newly updated record, runValidators - to run validations while updating 
    Note.findOneAndUpdate({
        user: req.user._id, 
        _id: id
    }, { $set: body }, { new: true, runValidators: true })
        .then(function (note) {
            res.send(note)
        })
        .catch(function (err) {
            res.send(err)
        })
})

module.exports = {
    notesRouter: router 
}