import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "src/modules/app/app.module";
import { ValidationPipe, ClassSerializerInterceptor } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.setGlobalPrefix("/api/v1");
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
