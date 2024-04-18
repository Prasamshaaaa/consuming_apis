
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
  LabTestComponentMap: Array<LabTestComponentMap> = new Array<LabTestComponentMap>();
  MyProperty: any;
  ServiceDepartmentId: any;
  TemplateType: any;
  IsOutsourceTest: any;
  DefaultOutsourceVendorId: any;
  IsLISApplicable: boolean;

  ReportTemplateName: string;

  LabTestCategory: string;

  LabReportTemplateModel: string;



}

export class LabTestResult {
  Results: Array<LabTest> = new Array<LabTest>();

}

export class ReportTemplates {
  ReportTemplateID: number;
  ReportTemplateShortName: string;
  ReportTemplateName: string;
  TemplateFileName?: any;
  NegativeTemplateFileName?: any;
  IsDefault: boolean;
  IsActive: boolean;
  CreatedBy: number;
  CreatedOn: string;
  ModifiedBy: number;
  ModifiedOn: string;
  HeaderText: string;
  ColSettingsJSON: string;
  TemplateType: string;
  TemplateHTML?: any;
  FooterText: string;
  Description?: any;
  DisplaySequence: number;
}

export class LabTestComponentsData {

  ChildRange?: any;
  ComponentId: number;
  ComponentMapId: number;
  ComponentName: string;
  ControlType: string;
  CreatedBy: number;
  CreatedOn: string;
  DisplayName: string;
  DisplaySequence: number;
  FemaleRange: string;
  IndentationCount: number;
  MaleRange: string;
  MaxValue: number;
  Method: string;
  MinValue: number;
  ModifiedBy: number;
  ModifiedOn: string;
  Range: string;
  RangeDescription: string;
  Unit: string;
  ValueLookup?: any;
  ValuePrecision: number;
  ValueType: string;

}


export class RootObject {
  LabTestId: number;
  LabSequence: number;
  LabTestCode?: any;
  ProcedureCode?: any;
  Description?: any;
  LabTestSynonym?: any;
  LabTestName: string;
  LabTestSpecimen: string;
  LabTestSpecimenSource: string;
  LabTestComponentsJSON: LabTestComponentsJSON[];
  LabTestComponentMap: LabTestComponentMap[];
  LOINC?: any;
  ReportTemplateId: number;
  IsSelected: boolean;
  IsPreference: boolean;
  IsValidForReporting: boolean;
  CreatedOn: string;
  CreatedBy: number;
  ModifiedOn?: any;
  ModifiedBy?: any;
  IsActive: boolean;
  HasNegativeResults: boolean;
  NegativeResultText?: any;
  ServiceDepartmentId: number;
  LabReportTemplateModel?: any;
  DisplaySequence: number;
  TemplateType: string;
  ReportingName: string;
  Interpretation?: any;
  IsTaxApplicable: boolean;

  IsSMSApplicable: boolean;
  ReportTemplateName: string;

  LabTestCategoryId: number;
  SmsApplicable: boolean;
  IsOutsourceTest?: any;
  DefaultOutsourceVendorId?: any;
  IsLISApplicable: boolean;
  LabTestCategory: string;


}
export class LabTestComponentMap {
  ComponentMapId: number = 0;
  LabTestId: number = 0;
  ComponentId: number = 0;
  DisplaySequence: number = 0;
  CreatedBy: number = 0;
  CreatedOn: string = '';
  ModifiedBy: number = 0;
  ModifiedOn: string = '';
  IsActive: boolean = true;
  GroupName?: any;
  IndentationCount: number = 0;
  ShowInSheet: boolean = true;
  IsAutoCalculate: boolean = true;
  CalculationFormula?: any;
  FormulaDescription?: any;
  LabTestComponent: LabTestComponentsJSON;
}

export class LabTestComponentsJSON {
  ComponentId: number;
  ComponentName: string;
  Unit: string;
  ValueType: string;
  ControlType: string;
  Range: string;
  MaleRange: string;
  FemaleRange: string;
  ChildRange?: any;
  RangeDescription: string;
  Method?: any;
  ValueLookup?: any;
  MinValue: number;
  MaxValue: number;
  DisplayName: string;
  CreatedBy: number;
  CreatedOn: string;
  ModifiedBy: number;
  ModifiedOn: string;
  DisplaySequence: number;
  IndentationCount: number;
  ComponentMapId: number;
  ValuePrecision: number;

}