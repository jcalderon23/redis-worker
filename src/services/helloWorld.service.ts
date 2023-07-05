export class HelloWorldService {
  public async getHelloWorldMessage() {
    try {
      return {
        status: 200,
        message: "Hello world",
      };
    } catch (error) {
      if (error instanceof Error) {
        return { status: 404, message: error.message };
      }
    }
  }
}
