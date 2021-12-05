// 6. typeORM으로 다음 테이블 만들고 릴레이션 매핑해보기
import { Space } from "src/space/space.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Post extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    content: string;

    // 하나의 space에 여러 개의 post 존재
    // cascade: space가 삭제되면 연결된 post 엔트리도 삭제됨
    @ManyToOne(type => Space, space => space.id, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({
        name: 'space_id'
    })
    space_id: number;
}