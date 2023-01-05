import { Migration } from '@mikro-orm/migrations';

export class Migration20230104142940 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "todo" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "checked" boolean null, constraint "todo_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "todo" cascade;');
  }

}
