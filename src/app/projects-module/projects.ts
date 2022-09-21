import { Timestamp } from "rxjs";

export interface projectSchema {
    id?: String;
    budget?: Number;
    description?: String;
    duration?: Number;
    name?: String;
    staffCost?: Number;
    startDate?: Date;
    status?: String;
}