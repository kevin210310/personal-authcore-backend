import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/entities/base.entity';
import { UserProvider } from '@modules/users/entities/user-provider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('providers')
export class Provider extends BaseEntity {
    @ApiProperty({ example: 'drivers' })
    @Column({ unique: true, nullable: false, length: 50 })
    name: string;

    @ApiProperty({ example: 'Conductores' })
    @Column({ nullable: false, length: 50 })
    label: string;

    @ApiProperty({ example: true })
    @Column({ default: true, name: 'is_active' })
    isActive: boolean;

    @OneToMany(() => UserProvider, (userProvider) => userProvider.provider)
    userProviders: UserProvider[];
}