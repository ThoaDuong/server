import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class PlaylistEntity{

    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    songs: object[];
}

