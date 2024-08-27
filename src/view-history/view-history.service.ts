import { Injectable } from '@nestjs/common';
import { CreateViewHistoryInput } from './dto/create-view-history.input';
import { UpdateViewHistoryInput } from './dto/update-view-history.input';

@Injectable()
export class ViewHistoryService {
  create(createViewHistoryInput: CreateViewHistoryInput) {
    return 'This action adds a new viewHistory';
  }

  findAll() {
    return `This action returns all viewHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viewHistory`;
  }

  update(id: number, updateViewHistoryInput: UpdateViewHistoryInput) {
    return `This action updates a #${id} viewHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} viewHistory`;
  }
}
