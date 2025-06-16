export class Category {
  key: string;
  name: string;
  description: string;

  constructor(key: string, name: string, description:string) {
    this.key = key;
    this.name = name;
    this.description = description;
  }
}
