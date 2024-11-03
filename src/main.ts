import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS'u etkinleştirin
  app.enableCors({
    origin: 'https://eyvan-backend.onrender.com', // İzin verilen origin (frontend uygulamanızın URL'si)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // İzin verilen HTTP yöntemleri
    credentials: true, // İsteğe bağlı, eğer cookie veya authorization header kullanıyorsanız true yapabilirsiniz
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
