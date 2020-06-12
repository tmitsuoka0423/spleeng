import { DynamoDB } from "aws-sdk";
import DaoBase from "../DaoBase";
import EntityBase from "../../Entity/EntityBase";

export default class UsersDao extends DaoBase {
  private tableName = 'Users';

  async get(partitionKey: string, sortKey?: string): Promise<EntityBase> {
    return this.documentClient.get({
      TableName: this.tableName,
      Key: {
        lineId: partitionKey,
      },
    }).promise();
  };
  async put(entity: EntityBase): Promise<void> {
    this.documentClient.put({
      TableName: this.tableName,
      Item: entity.getItem(),
    }).promise();
  };
}