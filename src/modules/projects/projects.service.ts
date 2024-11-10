import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepository } from './repository/project.repository';
import { QueryOptions } from 'winston';
import { response } from 'src/helpers/helpers';

@Injectable()
export class ProjectsService {

  constructor(private readonly projectRepository: ProjectRepository){}

  async create(createProjectDto: CreateProjectDto) {

    try {

      createProjectDto['createAt'] = new Date().valueOf()

      return await this.projectRepository.create(createProjectDto)
      
    } catch (error) { throw new NotFoundException('Votre requete a échoué')}
  }

  findAll(query: QueryOptions) {
    return this.projectRepository.getAllProjects(query);
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  // --------

  async update(id: string, updateProjectDto: UpdateProjectDto) {

    const updateResult = await this.projectRepository.update(id, updateProjectDto)
    if(updateResult.acknowledged && updateResult.matchedCount == 0) throw new NotFoundException();

    return response(HttpStatus.OK, "project edit successfully");
    
  }

  // ---------

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
