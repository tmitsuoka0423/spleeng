interface LocationInterface {
  latitude: number;
  longitude: number;
}

export default class Users {
  private lineId: string;
  private name: string;
  private location: LocationInterface;

  public getLineId() {
    return this.lineId;
  }

  public getName() {
    return this.name;
  }

  public getCoordinates() {
    return `${this.location.latitude},${this.location.longitude}`;
  }
}