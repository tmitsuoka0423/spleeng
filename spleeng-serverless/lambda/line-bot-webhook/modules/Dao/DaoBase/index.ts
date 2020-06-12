import { DynamoDB } from "aws-sdk";
import EntityBase from "../../Entity/EntityBase";

export default abstract class DaoBase {
  protected documentClient: any;

  constructor() {
    this.documentClient = new DynamoDB.DocumentClient();
  }

  abstract async get(partitionKey: string, sortKey?: string): Promise<EntityBase>;
  abstract async put(entity: EntityBase): Promise<void>;
}
