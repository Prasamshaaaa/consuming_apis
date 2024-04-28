export enum ENUM_StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
}

export enum ENUM_JWT_Token {
    TokenKey = "token"
}

export enum ENUM_APIResponseStatus {
    Success = "OK",
    Failed = "Failed"
}


export enum ENUM_LocaStorageKeys {
    LabTests = "labTestsData",
    Schemes = "Schemes",
    priceCategories = "priceCategories",
    billingCreditOrganization = "billingCreditOrganization",

    reportTemplate = "reportTemplate",

    PatientListForFinalReport = "PatientListForFinalReport",
    LabReport = "LabReport",
    LookUps = "LookUps"
}

