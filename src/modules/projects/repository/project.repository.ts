import { CreateProjectDto } from './../dto/create-project.dto';
import { filter } from "lodash";
import { Document, InsertOneResult, ObjectId } from 'mongodb';
import { MongoDatabase } from "src/database/mongodb";
import { Injectable } from '@nestjs/common';
import { QueryOptions } from "winston";
import { Project } from '../entities/project.entity';


@Injectable()
export class ProjectRepository {


    private database : MongoDatabase

    constructor() {this.database = MongoDatabase.getInstance()}
    
 async collection() {

    return (await this.database.getDatabase()).collection('projects')
}

// Create an user

async create(project: CreateProjectDto): Promise<InsertOneResult<Document>> {

    return (await this.collection()).insertOne(project);
}

// -----------

async getAllProjects(query?: QueryOptions): Promise<Document[]> {


    return (await this.collection()).find(query?.filter ?? {})
        .project(query?.projection ?? {})
        .sort(query?.sort ?? '_id', query?.way ?? -1)
        .skip(query?.offset ?? 0)
        .limit(query?.limit ?? 7)
        .toArray();
}

async update(id: string, data: Document ) {

    const _id = new ObjectId(id)

    return (await this.collection()).updateOne(
        {_id},
        {$set: {...data, 'date.updated': new Date().valueOf()}}
    )
}


}