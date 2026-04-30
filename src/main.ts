import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { Express } from 'express';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance() as Express;
  return serverlessExpress({ app: expressApp }) as Handler;
  // await app.listen(process.env.PORT ?? 3000);
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
): Promise<any> => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
// bootstrap();
