import { NestFactory } from '@nestjs/core';
import { CredentialModule } from './credential.module';

async function bootstrap() {
  const app = await NestFactory.create(CredentialModule);
  await app.listen(3000);
}
bootstrap();
