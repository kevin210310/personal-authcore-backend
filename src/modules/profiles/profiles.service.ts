import { Injectable } from '@nestjs/common';
import { ErrorCodes } from '@common/errors/constants/error-codes.enum';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DatabaseError } from '@common/errors/exceptions/custom.exceptions';

@Injectable()
export class ProfilesService {
    private readonly moduleError = ErrorCodes.profileService;

    constructor(
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }

    async findAllProfiles() {
        const profiles = await this.profileRepository
            .createQueryBuilder('profile')
            .where({ isActive: true })
            .getMany()
            .catch(err => console.error(err));

        if (!profiles) throw new DatabaseError(
            this.moduleError.code,
            profiles
        );

        return { success: true, message: 'Se obtuvieron los perfiles satisfactoriamente.', profiles };
    }
}