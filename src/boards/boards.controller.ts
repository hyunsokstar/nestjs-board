import { CreateBoardDto } from './dto/create-baord.dto';
import { BoardsService } from './boards.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import { Board, BoardStatus } from './board.model';
import { Board } from '../database/board.entity';


@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Promise<Board[]> {
    // return this.boardsService.getAllBoards();
    return this.boardsService.findAll();
  }
}
