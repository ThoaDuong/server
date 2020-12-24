import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('song')
  async getData(){
    return await this.appService.getListSong();
  }

  @Post('song')
  async createSong(@Body() song){
      return await this.appService.createSong(song);
  }
  @Put('song')
  async updateSong(@Body() song){
      return await this.appService.updateSong(song);
  }
  @Delete('song/:id')
  async deleteSong(@Param('id') id){
      return this.appService.deleteSong(id);
  } 
}
