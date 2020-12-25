import { LanguageEntity } from './entities/language.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistEntity } from './entities/playlist.entitty';
import { SongEntity } from './entities/song.entity';

export const entities = [
    SongEntity,
    PlaylistEntity,
    LanguageEntity,
]
@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'test',
        entities: entities,
        synchronize: true,
        useUnifiedTopology: true,
      }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
