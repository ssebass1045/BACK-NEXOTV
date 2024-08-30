import { Injectable, BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';
import { ContentService } from 'src/content/content.service';
import { UpdateContentInput } from 'src/content/dto/inputs/update-content.input';

@Injectable()
export class FilesService {
  constructor(private readonly contentService: ContentService) {}
  getStaticContentImage(imageContentId: string) {
    const path = join(__dirname, '../../static/imgContent', imageContentId);
    const pathTransform = path.split(':')[1].replaceAll('\\', '/');
    if (!existsSync(pathTransform)) {
      throw new BadRequestException(
        `Image with id: '${imageContentId}' doesn't exit`,
      );
    }

    return pathTransform;
  }

  async updateImgUser(updateImageContentDto: UpdateContentInput) {
    await this.contentService.update(
      updateImageContentDto.id,
      updateImageContentDto,
    );
  }
}
