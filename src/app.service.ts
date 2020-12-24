import { SongEntity } from './entities/song.emtity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(SongEntity) private songRepo: Repository<SongEntity>,
    ){}
  getHello(): string {
    return 'Hello World!';
  }

  async getListSong(){
      return await this.songRepo.find();
  }
  async createSong(song){
      return await this.songRepo.save(song);
  }
  async updateSong(song){
      return await this.songRepo.update(
          {_id: song.id},
          {
              name: song.name,
              artist: song.artist
          }
      )
  }
  async deleteSong(id){
      return await this.songRepo.delete(id);
  }
}
