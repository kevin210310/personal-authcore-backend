import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';
//import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsStrongPassword } from '@common/decorators/validators/is-strong-password/is-strong-password.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'user@example.com',
        required: true
    })
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase().trim())
    email: string;

    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'Password123!',
        minLength: 8,
        required: true,
    })
    @IsString()
    @IsOptional()
    @MinLength(8)
    @IsStrongPassword()
    password: string;
}