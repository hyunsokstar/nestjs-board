import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { boardProviders } from './board.provider';


@Module({
  controllers: [BoardsController],
  providers: [
    BoardsService,
    ...boardProviders
  ]
})
export class BoardsModule {}
