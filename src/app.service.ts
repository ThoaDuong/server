import { LanguageEntity } from './entities/language.entity';
import { PlaylistEntity } from './entities/playlist.entitty';
import { SongEntity } from './entities/song.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(SongEntity) private songRepo: Repository<SongEntity>,
        @InjectRepository(PlaylistEntity) private playlistRepo: Repository<PlaylistEntity>,
        @InjectRepository(LanguageEntity) private langRepo: Repository<LanguageEntity>,
    ) { }
    getHello(): string {
        return 'Hello World!';
    }

    //Song
    async getListSong() {
        return await this.songRepo.find();
    }
    async createSong(song) {
        return await this.songRepo.save(song);
    }
    async updateSong(id, song) {
        return await this.songRepo.update(id, {
            name: song.name,
            artist: song.artist,
        })
    }
    async deleteSong(id) {
        return await this.songRepo.delete(id);
    }
    //Playlist
    async getListPlaylist() {
        return await this.playlistRepo.find();
    }
    async createPlaylist(playlist) {
        return await this.playlistRepo.save(playlist);
    }
    async updatePlaylist(id, playlist) {
        return await this.playlistRepo.update(id, {
            name: playlist.name,
            type: playlist.type,
            songs: playlist.songs,
        })
    }
    async deletePlaylist(id) {
        return await this.playlistRepo.delete(id);
    }
    //Language
    async getLanguage(id){
        return await this.langRepo.findOne(id);
    }
    async addLanguage(lang){
        return await this.langRepo.save(lang);
    }
    async updateLanguage(id, lang){
        return await this.langRepo.update(id, {
            value: lang.value
        })
    }
    async deleteLanguage(id){
        return await this.langRepo.delete(id);
    }
}
