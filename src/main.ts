import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importación de ValidationPipe para la validación de los DTOs

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activacion de ValidationPipe
  app.useGlobalPipes(new ValidationPipe({ // Activacion de la validacion de los DTOs
    whitelist: true // Elimina propiedades no definidas en el DTO
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
