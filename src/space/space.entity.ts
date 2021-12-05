// 6. typeORM으로 다음 테이블 만들고 릴레이션 매핑해보기
import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Space extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // 한 명의 user가 여러 개의 space에 소속될 수 있음
    // cascade: user가 삭제되면 연결된 space 엔트리도 삭제됨
    @ManyToOne(type => User, user => user.id, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({
        name: 'user_id'
    })
    user_id: number;
}