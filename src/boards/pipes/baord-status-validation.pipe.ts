import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    // throw new Error("Method not implemented.");
    console.log('value : ', value);
    console.log('metadata : ', metadata);

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }

    return value;
  }
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
