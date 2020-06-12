import EntityBase from "../EntityBase";

interface LocationInterface {
  latitude: number;
  longitude: number;
}

export default class Users extends EntityBase {
  private lineId: string;
  private name: string;
  private location: LocationInterface;

  constructor(lineId: string, name: string, location: LocationInterface) {
    super();

    this.lineId = lineId;
    this.name = name;
    this.location = location;
  }

  public getLineId() {
    return this.lineId;
  }

  public getName() {
    return this.name;
  }

  public getCoordinates() {
    return `${this.location.latitude},${this.location.longitude}`;
  }

  public getItem() {
    return {
      lineId: this.lineId,
      name: this.name,
      location: this.location,
    }
  }
}