/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({})
export class UserValidator implements ValidatorConstraintInterface {
  async validate(input?: number, _validationArguments?: ValidationArguments) {
    if (input) {
      // // check user is exist
      // const user = await User.findOne(input);
      // if (user) {
      //   return true;
      // }
      return false;
    }

    return false;
  }
}
