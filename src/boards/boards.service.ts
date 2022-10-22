import { CreateBoardDto } from './dto/create-baord.dto';
import { Body, Inject, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import {Board as BoardTable } from "../database/board.entity";
import { Repository } from 'typeorm';



@Injectable()
export class BoardsService {

  constructor(
    @Inject('BOARD_REPOSITORY')
    private boardRepository: Repository<BoardTable>,
  ) {}

  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  async findAll(): Promise<BoardTable[]> {

    console.log("실행 확인");
    
    
    return await this.boardRepository.find();
  }

  // createBoard(title: string, description: string) {
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: String): Board {
    // return this.boards.find((board) => board.id === id);
    const found = this.boards.find((board) => board.id === id);

    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}`);
    }

    return found;
  }

  deleteBoard(id: String): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    console.log("board : ", board);

    board.status = status;
    return board;
  }
}
