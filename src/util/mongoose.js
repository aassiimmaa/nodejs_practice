module.exports = {
    mutipleMongooseToObject: (mongooses) =>
        mongooses.map((mongoose) => mongoose.ToObject()),
    mongooseToObject: (mongoose) => (mongoose ? mongoose.ToObject() : mongoose),
};
