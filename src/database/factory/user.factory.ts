import { define } from 'typeorm-seeding';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';

define(User, () => {
  const salt = bcrypt.genSaltSync();

  const user = new User();
  user.username = 'akuadmin';
  user.password = bcrypt.hashSync('Admin123', salt);
  user.created_at = new Date();

  return user;
});
