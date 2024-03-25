import { NotFoundException } from '@nestjs/common';

import { RequestContext } from './request.context';
import { User } from 'src/database/entities/user.entity';
import { ThrowErrorEnum } from '../enum/throw-error.enum';

export class UserContext extends RequestContext {
  public static set(user: User) {
    super.getSession().set(UserContext.name, user);
  }

  public static get(): User | null {
    return super.getSession().get(UserContext.name);
  }

  public static getOrThrow(): User {
    const uctx = UserContext.get();
    if (uctx) {
      return uctx;
    }
    throw new NotFoundException(ThrowErrorEnum.USER_NOT_FOUND);
  }
}
