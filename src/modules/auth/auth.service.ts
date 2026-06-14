import { Injectable, Inject } from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from '@modules/users/users.service';

import { HASH_SERVICE } from '@common/providers/hash.provider';
import { CRYPTO_SERVICE } from '@common/providers/crypto.provider';

import {
    type IHashService
} from '@common/interfaces/hash.interface';
import {
    ProvidersToken,
    TargetsToken,
    type ICryptoService
} from '@common/interfaces/crypto.interface';

import { ForbiddenError } from '@common/errors/exceptions/custom.exceptions';
import { ErrorCodes } from '@common/errors/constants/error-codes.enum';
import { COOKIE_SERVICE } from '@common/providers/cookie.provider';
import type { ICookieService } from '@common/interfaces/cookie.interface';

import { SignInDto } from './dto/sign-in.dto';
import { SuccessResponse } from '@common/interfaces';

@Injectable()
export class AuthService {
    private readonly moduleError = ErrorCodes.authService;

    constructor(
        @Inject(HASH_SERVICE) private readonly hashService: IHashService,
        @Inject(CRYPTO_SERVICE) private readonly cryptoService: ICryptoService,
        @Inject(COOKIE_SERVICE) private readonly cookieService: ICookieService,
        private readonly userService: UsersService
    ) { }

    async signIn(
        body: SignInDto,
        response: Response
    ): Promise<SuccessResponse> {
        const { email, password } = body;
        const user = await this.userService.findAvailableUser(email);

        if (!user) throw new ForbiddenError(
            this.moduleError.code,
            this.moduleError.types.EMAIL_MISMATCH,
            'El usuario y/o la contraseña son incorrectos.'
        )

        const isMatch = await this.hashService.compare(password, user.hash);

        if (!isMatch) throw new ForbiddenError(
            this.moduleError.code,
            this.moduleError.types.PASSWORD_MISMATCH,
            'El usuario y/o la contraseña son incorrectos.'
        );

        const token = this.cryptoService.generateToken({
            target: TargetsToken.PASSWORD,
            provider: ProvidersToken.BASIC,
            username: user?.username
        });

        this.cookieService.setAuthCookie(response, token)
        return { success: true, message: 'Inicio de sesión exitoso.' };
    }
}