import { Request } from 'express';
import { Controller, Get, JsonController, NotFoundError, Params, QueryParams } from 'routing-controllers';
import { ModuleAService } from "./a.service";
import { GetTestModel } from "./a.validator";

@JsonController("/a")
export class ModuleAController {
  @Get('/test')
  async getList() {
    return {
      query: 'query',
    }
  }

  @Get('/test2')
  async getListID() {
    throw new NotFoundError('Not found user');
  }

  @Get('/test3')
  async test3(@QueryParams() query: GetTestModel) {
    return {
      query,
    }
  }
}