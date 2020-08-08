const Category = require('../models/adminCategory');

exports.addCategory = (req, res, next) => {
    const category = new Category({
        name: req.body.name
    });
    category.save()
        .then(() => res.status(201).json({message: 'Category is created !'}))
        .catch(error => res.status(400).json({error}));
};

exports.getAllCategories = (req, res, next) => {
    Category.find().then(
        (items) => {
            res.status(200).json(items);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneCategory = (req, res, next) => {
    Category.findOne({
        category: req.params.category
    }).then(
        (item) => {
            res.status(200).json(item);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.deleteCategory = (req, res, next) => {
    Category.findOne({ category: req.params.category })
        .then(() => {
            Category.deleteOne({ _id: req.params.category })
                .then(() => res.status(200).json({ message: 'Category is deleted !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};