import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as process from 'process';

const config: Options = {
  type: 'postgresql',
  host: process.env.HOST,
  port: +process.env.DB_PORT,
  user: process.env.USENAME,
  password: process.env.PASSWORD,
  dbName: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
};

export default config;
