const express = require ('express')
const User = require('../model/model')
const Validation = require('../validation/validation')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.inscription = (req, res) => {
    const {body} = req
    const {error} = Validation(body)
    if (error) return res.status(401).json(error.details[0].message)
    console.log(body)
    res.send('Inscription')
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.connexion = (req, res) => {
    res.send('Connexion')
}