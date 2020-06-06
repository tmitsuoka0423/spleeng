export default abstract class EntityBase {
  private created: string;
  private updated: string;

  public getCreated(): string {
    return this.created;
  }

  public getUpdated(): string {
    return this.updated;
  }
}