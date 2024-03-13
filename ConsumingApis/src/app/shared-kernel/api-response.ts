export class ApiResponse<T>{
    Status: string = "";
    Results?: T;
    ErrorMessage: string = "";
}