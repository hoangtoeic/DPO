import * as bcrypt from 'bcrypt';

export class ShareFunction {
  public static isConfigS3(settingMap: Map<string, any>): boolean {
    return (
      settingMap.get('storageServer') === 's3' &&
      settingMap.get('storageS3AccessKeyID') &&
      settingMap.get('storageS3AccessKeySecret') &&
      settingMap.get('storageS3Region') &&
      settingMap.get('storageS3BucketName')
    );
  }

  public static toSlug(str: string, char: string = '-'): string {
    if (!str) return '';
    let _str = str;
    _str = _str.replace(/(\++)/g, char);
    _str = _str.replace(/(_+)/g, char);
    _str = _str.toLowerCase();
    _str = _str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    _str = _str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    _str = _str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    _str = _str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    _str = _str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    _str = _str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    _str = _str.replace(/(đ)/g, 'd');
    _str = _str.replace(/([^0-9a-z-\s])/g, '-');
    _str = _str.replace(/(\s+)/g, char);
    const regexRemvoeDuplicate = new RegExp(`${char}+`, 'g');
    _str = _str.replace(regexRemvoeDuplicate, char);
    return _str;
  }

  public static async sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  public static async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10; // Recommended number of salt rounds
    return bcrypt.hash(password, saltOrRounds);
  }

  public static async comparePasswords(
    inputPassWord: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(inputPassWord, hashedPassword);
  }
}
