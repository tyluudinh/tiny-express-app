import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

@Interceptor()
export class ResponseInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return {
      data: content
    }
  }
}