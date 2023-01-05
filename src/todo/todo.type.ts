import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  title: string;

  @Field()
  checked?: boolean;
}
