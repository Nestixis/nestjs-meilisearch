import { Module } from '@nestjs/common';
import MeiliSearch from 'meilisearch';
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, MeilisearchSdkModuleOptions } from './meilisearch-sdk.module-definition';
 
export const MEILISEARCH_SDK_CLIENT = 'MEILISEARCH_SDK_CLIENT';

@Module({
  providers: [
    {
      provide: MEILISEARCH_SDK_CLIENT,
      useFactory: (options: MeilisearchSdkModuleOptions) => {
        return new MeiliSearch({
          host: options.auth.url,
          apiKey: options.auth.key,
        });
      },
      inject: [MODULE_OPTIONS_TOKEN],
    },
  ],
  exports: [MEILISEARCH_SDK_CLIENT],
})
export class MeilisearchSdkModule extends ConfigurableModuleClass {}