import { ConfigurableModuleBuilder } from '@nestjs/common';

export class MeilisearchSdkModuleOptions {
  auth: {
    url: string;
    key: string;
  };
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<MeilisearchSdkModuleOptions>().build();
