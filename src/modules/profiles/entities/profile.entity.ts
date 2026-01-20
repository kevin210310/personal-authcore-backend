import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/entities/base.entity';
import { User } from '@modules/users/entities/user.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('profiles')
export class Profile extends BaseEntity {
    @ApiProperty({ example: 'administrator' })
    @Column({ unique: true, nullable: false, length: 50 })
    name: string;

    @ApiProperty({ example: 'administrador' })
    @Column({ nullable: false, length: 50 })
    label: string;

    @ApiPropertyOptional({ example: 'Administrador principal de operación' })
    @Column({ type: 'text', nullable: true })
    description: string;

    @ApiProperty({ example: true })
    @Column({ default: true, name: 'is_active' })
    isActive: boolean;

    @OneToMany(() => User, (user) => user.profile)
    users: User[];
}