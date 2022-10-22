import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [DatabaseModule],

  controllers: [BoardsController],
  providers: [BoardsService]
})

export class BoardsModule {}
