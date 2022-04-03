import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CommonUtilityService {

    public headerName: string;
    public searchParam:any;
    public currentRoute: string;
    public selectedAction: string;
}