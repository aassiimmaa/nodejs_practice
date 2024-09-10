const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String, required: true },
        videoId: { type: String, required: true },
        level: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongooseDelete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
})

module.exports = mongoose.model('Course', Course);
