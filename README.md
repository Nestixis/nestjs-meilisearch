# NestJS Meilisearch

## Installation

To install the package, run:
```bash
npm i @nestixis/nestjs-meilisearch
```

## Registration

To register the module in your application, you can use the `MeilisearchSdkModule.registerAsync` method with a factory pattern:

```typescript
import { MeilisearchSdkModule } from "@nestixis/nestjs-meilisearch";
import { ConfigModule, ConfigService } from "@nestjs/config";

MeilisearchSdkModule.registerAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    auth: {
      url: configService.get<string>('MEILISEARCH_URL'),
      key: configService.get<string>('MEILISEARCH_AUTH_KEY'),
    },
  }),
  inject: [ConfigService],
});
```

## Usage

To use the Meilisearch client in your service, inject it using the `MEILISEARCH_SDK_CLIENT` token:

```typescript
import { MeiliSearch } from 'meilisearch';
import { Inject } from '@nestjs/common';
import { MEILISEARCH_SDK_CLIENT } from '@nestixis/nestjs-meilisearch';

@Injectable()
export class YourService {
  constructor(
    @Inject(MEILISEARCH_SDK_CLIENT) private readonly meiliSearchClient: MeiliSearch
  ) {}

  async yourMethod() {
    const index = this.meiliSearchClient.index('your_index');
    const { hits } = await index.search('your_query');
    return hits;
  }
}
```
