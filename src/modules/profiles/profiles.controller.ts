import { Controller, Get, UseGuards } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { AuthGuard } from '@common/guards/auth/auth.guard';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('profiles')
@Controller('profiles')
@UseGuards(AuthGuard)
export class ProfilesController {
    constructor(
        private readonly profilesServices: ProfilesService
    ) { }

    @Get('/')
    @ApiCookieAuth('auth_token')
    @ApiOperation({
        summary: 'Obtener todos los perfiles',
        description: 'Obtiene los perfiles habilitados dentro de la App.'
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de perfiles',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean', example: true },
                message: { type: 'string' },
                profiles: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'string', example: "35216504-257c-42e4-9604-2f6aca7036ca" },
                            name: { type: 'string', example: "administrator" },
                            label: { type: 'string', example: "Administrador" },
                            description: { type: 'string', example: "Administrador principal de la App." },
                            isActive: { type: 'boolean', example: true }
                        }
                    }
                },
            }
        }
    })
    @ApiResponse({
        status: 500,
        description: 'Error de consulta en db',
        schema: {
            type: 'object',
            properties: {
                errorCode: { type: 'string', example: "DB002" },
                statusCode: { type: 'number', example: 500 },
                message: { type: 'string', example: "No fue posible procesar la solicitud, si el error persiste contactar a soporte." },
                error: { type: 'string', example: "FORBIDDEN" }
            }
        }
    })
    allProfilesAvailable() {
        return this.profilesServices.findAllProfiles();
    }
}