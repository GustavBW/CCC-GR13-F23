import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderModule } from "./order/order.module";
import { Order } from "./order/order.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST, 
      port: 3306,
      username: process.env.DB_USER, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME, 
      entities: [Order],
      synchronize: true,
      retryAttempts: 5,
    }),
    OrderModule,
  ],
})
export class AppModule {}