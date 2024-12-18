const mongoose = require('mongoose');
const AboutBody1 = require('../models/aboutBody1');

exports.getAboutBody1 = async (req, res) => {
    try {
        const content = await AboutBody1.findOne();
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching about us content (1)', details: error.message });
    }
};

exports.updateAboutBody1 = async (req, res) => {
    try {
        const { title, sub_text, description } = req.body;
        const image1_url = req.files.image1 ? req.files.image1[0].location : undefined;
        const image2_url = req.files.image2 ? req.files.image2[0].location : undefined;

        const updateData = { title, sub_text, description };
        if (image1_url) updateData.image1_url = image1_url;
        if (image2_url) updateData.image2_url = image2_url;

        const content = await AboutBody1.findOneAndUpdate({}, updateData, { new: true, upsert: true });
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: 'Error updating about us content (1)', details: error.message });
    }
};
