import * as cls from 'cls-hooked';

import { InternalServerErrorException } from '@nestjs/common';

/**
 * Static RequestContext that can be used any where.
 * Ref: https://github.com/nestjs/nest/issues/173
 */
export class RequestContext {
  public static nsid = 'nsid';

  public static initSession(): cls.Namespace {
    return (
      cls.getNamespace(RequestContext.nsid) ||
      cls.createNamespace(RequestContext.nsid)
    );
  }

  public static getSession(): cls.Namespace {
    const session = cls.getNamespace(RequestContext.nsid);
    if (!session || !session.active) {
      throw new InternalServerErrorException('Invalid session context');
    }
    return session;
  }

  public static setRequest<T>(req: T) {
    console.log('RequestContext.name', RequestContext.name);
    this.getSession().set(RequestContext.name, req);
  }

  public static getRequest() {
    this.getSession().get(RequestContext.name);
  }
}
