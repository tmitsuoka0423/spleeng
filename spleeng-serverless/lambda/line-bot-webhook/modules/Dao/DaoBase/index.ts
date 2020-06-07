import { DynamoDB } from "aws-sdk";
import EntityBase from "../../Entity/EntityBase";

export default abstract class DaoBase {
  protected documentClient: any;

  constructor() {
    this.documentClient = new DynamoDB.DocumentClient();
  }

  abstract get(partitionKey: string, sortKey?: string): EntityBase;
}
