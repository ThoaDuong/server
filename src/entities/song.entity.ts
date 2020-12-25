import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class SongEntity{

    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    artist: string;
}

