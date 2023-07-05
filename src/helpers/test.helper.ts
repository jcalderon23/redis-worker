import { DataSource } from "typeorm";

export class TestHelper {
  private static _instance: TestHelper;

  public static get instance(): TestHelper {
    if (!this._instance) this._instance = new TestHelper();

    return this._instance;
  }

  private dbConnect!: DataSource;
  public dataSource: DataSource = new DataSource({
    name: "default",
    type: "better-sqlite3",
    database: ":memory:",
    entities: ["src/entities/*.entity{.ts,.js}"],
    synchronize: true,
  });

  async setupTestDB() {
    this.dbConnect = this.dataSource;
    await this.dbConnect.initialize();
    return this.dbConnect;
  }

  teardownTestDB() {
    this.dbConnect.destroy();
  }
}
