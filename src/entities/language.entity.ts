import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class LanguageEntity{

    @ObjectIdColumn()
    _id: string;

    @Column()
    value: string;
}

