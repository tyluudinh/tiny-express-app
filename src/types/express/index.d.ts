declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
   
  }
  namespace NodeJS {
    interface Global {
      root_path_dir: string;
      prisma: PrismaClient;
      brokers: {
        result: Record<string, any>,
        expired: number,
      }
    }
  }
}
