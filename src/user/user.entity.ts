// 6. typeORM으로 다음 테이블 만들고 릴레이션 매핑해보기
import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    age: number;

}