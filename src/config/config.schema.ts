import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  HTTP_PORT: Joi.string().default(3000),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().default(5432).required(),
  DB_PASSWORD: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_TTL: Joi.number().required(),
});
