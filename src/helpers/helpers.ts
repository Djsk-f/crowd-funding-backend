import { HttpStatus } from "@nestjs/common"

export const response = (status: HttpStatus, message: string, data?: ObjectType<any>) => {
    return {status, message, data}
}