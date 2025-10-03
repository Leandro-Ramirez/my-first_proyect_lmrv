import { NestFactory } from '@nestjs/core';
import { PrismaModule } from './prisma.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(PrismaModule);
  
  const config = new DocumentBuilder()
  .setTitle('My API')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
