import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Todo {
  @PrimaryKey()
  id!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

  @Property()
  checked?: boolean;
}
