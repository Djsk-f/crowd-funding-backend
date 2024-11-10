import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProjectDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsNumber()
    raised: number;

    @IsNotEmpty()
    @IsNumber()
    goal: number;



    
}
