import { CreateBoardDto } from './dto/create-baord.dto';
import {
  Body,
  Inject,
  Injectable,
  NotFoundException,
  Param,
} from '@nestjs/common';

import { v1 as uuid } from 'uuid';

import { Repository } from 'typeorm';

import { Board } from '../database/board.entity';



@Injectable()
export class BoardsService {
  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }


}
