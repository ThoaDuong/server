import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    //Language
    @Get('language/:id')
    async getLanguage(@Param('id') id){
        return await this.appService.getLanguage(id);
    }
    @Post('language')
    async addLanguage(@Body() lang: {value: string}){
        return await this.appService.addLanguage(lang);
    }
    @Put('language/:id')
    async updateLanguage(@Param('id') id, @Body() lang: {value: string}){
        return await this.appService.updateLanguage(id, lang);
    }
    @Delete('language/:id')
    async deleteLanguage(@Param('id') id){
        return await this.appService.deleteLanguage(id);
    }

    //Song
    @Get('song')
    async getListSongs() {
        return await this.appService.getListSong();
    }
    @Post('song')
    async createSong(@Body() song: { name: string, artist: string }) {
        return await this.appService.createSong(song);
    }
    @Put('song/:id')
    async updateSong(@Param('id') id, @Body() song: { name: string, artist: string }) {
        return await this.appService.updateSong(id, song);
    }
    @Delete('song/:id')
    async deleteSong(@Param('id') id) {
        return await this.appService.deleteSong(id);
    }
    //Playlist
    @Get('playlist')
    async getListPlaylist(){
        return await this.appService.getListPlaylist();
    }
    @Post('playlist')
    async createPlaylist(@Body() playlist: {name: string, type: string, songs: object[]}){
        return await this.appService.createPlaylist(playlist);
    }
    @Put('playlist/:id')
    async updatePlaylist(@Param('id') id, @Body() playlist: {name: string, type: string, songs: object[]}){
        return await this.appService.updatePlaylist(id, playlist);
    }
    @Delete('playlist/:id')
    async deletePlaylist(@Param('id') id){
        return await this.appService.deletePlaylist(id);
    }

}
