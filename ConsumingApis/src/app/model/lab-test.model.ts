
export class LabTest {
    LabTestId: number;
    LabTestCode: string;
    LabSequence: number;
    ProcedureCode: string;
    LabTestName: string;
    LabTestSynonym: string;
    LabTestSpecimen: string[];
    LabTestSpecimenSource: string;
    LOINC: string;
    ReportTemplateId: number;
    IsValidForReporting: boolean;
    Description: string;
    DisplaySequence: number;
    RunNumberType: string;
    CreatedOn: string;
    CreatedBy: number;
    IsActive: boolean;
    HasNegativeResults: boolean;
    NegativeResultText: string;
    LabTestCategoryId: number;
    SmsApplicable: boolean;
    LabReportTemplate: any; 
    ReportingName: string;
    Interpretation: string;
    ModifiedBy: number;
    ModifiedOn: string;
    IsSelected: any; 
    IsPreference: any; 
    IsTaxApplicable: any; 
    LabTestComponentsJSON: any;
    LabTestComponentMap: any; 
    MyProperty: any; 
    ServiceDepartmentId: any; 
    TemplateType: any; 
    IsOutsourceTest: any; 
    DefaultOutsourceVendorId: any; 
    IsLISApplicable: boolean;
  
    
  }
  
  export class LabTestResult {
    Results: Array<LabTest> = new Array<LabTest>();
    
  }