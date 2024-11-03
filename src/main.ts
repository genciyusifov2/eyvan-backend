import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS'u etkinleştirin
  app.enableCors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Cookie veya auth header kullanıyorsanız true yapın
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000); // Render için dinlenecek portu ortam değişkeni ile belirleyin
}
bootstrap();
