const CentersDB = require('../model/modelP');
const PatientsDB = require('../model/modelC');
const dotenv = require('dotenv');
const fs = require('fs').promises;

// client
exports.homeRoute = (req,res) => {
    res.render('home');
};

exports.moreRoute = (req,res) => {
    res.render('more');
};

exports.rdvVRoute = (req,res) => {
    res.render('rdvV');
};

exports.rdvTRoute = (req,res) => {
    res.render('rdvT');
};

exports.aboutRoute = (req,res) => {
    res.render('about');
};

// API
exports.centersRoute = async (req, res) => {
    try {
        const data = await fs.readFile('./assets/json/centers.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
