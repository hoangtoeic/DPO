import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../context/user.context';
import { JWTType } from '../type/jwt.type';
import { User } from 'src/database/entities/user.entity';
import { RoleEnum } from 'src/api/role/enum/role.enum';
import { ThrowErrorEnum } from '../enum/throw-error.enum';

@Injectable()
export class FleetGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const curCtx = context.switchToHttp().getRequest();

    const bearerToken: string = curCtx.headers['authorization'];
    if (!bearerToken) {
      throw new UnauthorizedException(ThrowErrorEnum.AUTHORIZATION_NOT_FOUND);
    }
    const decoded = jwtDecode(bearerToken) as JWTType;
    const email = decoded?.email;

    // Hard code here to make current User can work seamlessly temporarily
    const currentUser = await User.findOne({
      where: { email: email, role: RoleEnum.FLEET_MANAGER },
      relations: ['transportCompany'],
    });

    if (!currentUser) {
      throw new UnauthorizedException(ThrowErrorEnum.AUTHORIZATION_NOT_FOUND);
    }
    // Query to DB here to get specific currentUser
    UserContext.set(currentUser);

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
