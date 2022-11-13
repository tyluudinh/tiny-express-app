import { IPagination, IResponseList } from "@app/interfaces";
import { Service } from "typedi";

@Service()
export class ModuleAService {

  static async methodA(): Promise<IResponseList<string>> {
    return {
      data: [],
      pagination: {
        pageNumber: 1,
        pageSize: 20,
        totalElements: 0,
        totalPages: 0
      }
    };
  }

}