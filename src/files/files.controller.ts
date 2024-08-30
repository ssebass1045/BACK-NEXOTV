import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from './helpers';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('content/:contentId')
  findOne(@Res() res: Response, @Param('contentId') contentId: string) {
    const path = this.filesService.getStaticContentImage(contentId);
    res.sendFile(path);
  }

  @Post('content/:contentUUID')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      limits: { fileSize: 20000000 },
      storage: diskStorage({
        destination: './static/imgContent',
        filename: fileNamer,
      }),
    }),
  )
  uploadContentImage(
    @Param('contentUUID', ParseUUIDPipe) contentUUID: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file)
      throw new BadRequestException('Make sure that the argument is an image');

    const secureUrl: string = `${this.configService.get('HOST_API')}/files/content/${file.filename}`;

    this.filesService.updateImgUser({
      id: contentUUID,
      image: secureUrl,
    });

    return {
      secureUrl,
    };
  }
}
