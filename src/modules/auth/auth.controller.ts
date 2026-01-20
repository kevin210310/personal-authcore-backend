import { Controller, Post, Body, Res } from '@nestjs/common'
import { AuthService } from '@modules/auth/auth.service'
import { SignInDto } from '@modules/auth/dto/sign-in.dto'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import type { Response } from 'express';
import { SuccessResponse } from '@common/interfaces';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('sign-in')
    @ApiOperation({
        summary: 'Iniciar sesión',
        description: 'Autentica un usuario y retorna un token JWT en una cookie httpOnly'
    })
    @ApiResponse({
        status: 201,
        description: 'Inicio de sesión exitoso. Token enviado en cookie.',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string', example: 'Inicio de sesión exitoso' },
                success: { type: 'boolean', example: true }
            }
        }
    })
    @ApiResponse({
        status: 403,
        description: 'Credenciales inválidas',
        content: {
            'application/json': {
                examples: {
                    mismatchEmail: {
                        summary: 'Correo electronico no encontrado',
                        value: {
                            errorCode: "AUTH002",
                            statusCode: 403,
                            message: "No fue posible procesar la solicitud, si el error persiste contactar a soporte.",
                            error: "FORBIDDEN"
                        }
                    },
                    mismatchPassword: {
                        summary: 'Constraseña no coincide',
                        value: {
                            errorCode: "AUTH002",
                            statusCode: 403,
                            message: "No fue posible procesar la solicitud, si el error persiste contactar a soporte.",
                            error: "FORBIDDEN"
                        }
                    }
                }
            }
        }
    })
    signIn(
        @Body() body: SignInDto,
        @Res({ passthrough: true }) response: Response
    ): Promise<SuccessResponse> {
        return this.authService.signIn(body, response);
    }
}