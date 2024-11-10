import { ObjectId } from "mongodb";

export class Project {

    _id: ObjectId;
    title: string;
    description: string;
    image: string;
    raised: number;
    goal: number;


}
