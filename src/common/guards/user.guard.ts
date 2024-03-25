import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../context/user.context';
import { User } from 'src/database/entities/user.entity';
import { JWTType } from '../type/jwt.type';
import { ThrowErrorEnum } from '../enum/throw-error.enum';

@Injectable()
export class UserGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const curCtx = context.switchToHttp().getRequest();
    // console.log(curCtx.originalUrl);
    const bearerToken: string = curCtx.headers['authorization'];
    if (!bearerToken) {
      throw new UnauthorizedException(ThrowErrorEnum.AUTHORIZATION_NOT_FOUND);
    }
    const decoded = jwtDecode(bearerToken) as JWTType;

    const email = decoded?.email;

    // Hard code here to make current User can work seamlessly temporarily
    const currentUser = await User.findOne({ email: email });

    // Query to DB here to get specific currentUser
    UserContext.set(currentUser);
    if (!currentUser) {
      throw new UnauthorizedException(ThrowErrorEnum.AUTHORIZATION_NOT_FOUND);
    }

    /** Begin Uncomment here when we have database and specific role */

    // Query to DB here to get specific currentUser

    // if (
    //   (Object.values(SystemRole) as string[]).includes(currentUser.role.name)
    // ) {
    //   return true;
    // } else {
    //   throw new UnauthorizedException(
    //     "You don't have permission to do this action",
    //   );
    // }

    /** End Uncomment here when we have database and specific role */

    return true;
  }
}
