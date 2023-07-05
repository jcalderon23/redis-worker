import { ProcessTraceabilityService } from "@services/processTraceability.service";

import Queue from "./redis";

export default class ProcessTraceabilityTask {
  private processTraceabilityService: ProcessTraceabilityService;

  constructor() {
    this.processTraceabilityService = new ProcessTraceabilityService();
  }

  public async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public processQueue() {
    console.log("Inicio del proceso: ", new Date());
    Queue.process(2, async (job) => {
      let progress = 0;

      while (progress < 100) {
        await this.sleep(50);
        progress += 1;
        job.progress(progress);
      }

      const newTraceability =
        await this.processTraceabilityService.ProcessOnQueueTraceabilityInfo(
          "Creación"
        );

      console.log(
        "Nuevo registro",
        {
          newTraceability,
          jobId: job.id,
        },
        job.data
      );

      return { newTraceability };
    });
  }
}
