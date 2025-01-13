const Joi = require('joi');

const schema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    fullName: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(30).required(),
    url: Joi.string().uri().required()
  });

  module.exports= schema