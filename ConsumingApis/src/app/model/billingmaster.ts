export class Schemes {
    SchemeId: number = 0;
    SchemeCode: string = "";
    SchemeName: string = "";
    CommunityName: string = "";
    IsDiscountApplicable: boolean = true;
    DiscountPercent: number = 0;
    IsDiscountEditable: boolean = true;
    IsMembershipApplicable: boolean = true;
    IsMemberNumberCompulsory: boolean = true;
    DefaultPaymentMode: string = "";
    IsCreditApplicable: boolean = true;
    IsCreditOnlyScheme: boolean = true;
    CreditLimit: number = 0;
    DefaultCreditOrganizationId: number = 0;
    IsCoPayment: boolean = true;
    DefaultPriceCategoryId: number = 0;
    DefaultPriceCategoryName: string = "";
    ApiIntegrationName: string = "";
    FieldSettingParamName: string = "";
    CoPaymentCashPercent: number = 0;
    CoPaymentCreditPercent: number = 0;
    IsSystemDefault: boolean = true;
    IsCreditLimited: boolean = true;
    IsGeneralCreditLimited: boolean = true;
    GeneralCreditLimit: number = 0;
    IsClaimCodeAutoGenerate: boolean = true;
    HasSubScheme: boolean = true;

    SubSchemes: SubScheme[] = [];

    AllowProvisionalBilling: boolean = true;


}

class SubScheme {
    SubSchemeId: number = 0;
    SubSchemeName: string = "";
    SchemeId: number = 0;
    IsActive: boolean = true;

}

export class PriceCategory {
    PriceCategoryId: number = 0;
    PriceCategoryName: string = "";
    Description: string = "";
    IsDefault: boolean = true;
    CreatedOn: Date = new Date();
    CreatedBy: number = 0;
    IsActive: boolean = true;
    IsPharmacyRateDifferent: boolean = true;
    PriceCategoryCode: string = "";
    ShowInRegistration: boolean = true;
    ShowInAdmission: boolean = true;
    DisplaySequence: number = 0;
    ModifiedBy: number = 0;
    ModifiedOn: Date = new Date();
}


export class BillingCreditOrganizations {

    OrganizationId: number = 0;
    OrganizationName: string = "";
    IsActive: boolean = true;
    CreatedOn: Date = new Date();
    CreatedBy: number = 0;
    ModifiedOn: Date | null;
    ModifiedBy: number | null;
    IsDefault: boolean = true;
    IsClaimManagementApplicable: boolean = true;
    IsClaimCodeCompulsory: boolean = true;
    IsClaimCodeAutoGenerate: boolean = true;
    DisplayName: string = "";
    CreditOrganizationCode: string = "";
}