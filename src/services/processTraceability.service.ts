import { Traceability } from "@entities/traceability.entity";

export class ProcessTraceabilityService {
  public async ProcessOnQueueTraceabilityInfo(typeOperation: string) {
    try {
      return {
        status: 200,
        message: await Traceability.create({
          type_operation: typeOperation,
        }).save(),
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return { status: 404, message: error.message };
      }
    }
  }
}
