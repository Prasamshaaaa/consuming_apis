
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


export class ReportTemplate {
  ColSettingsJSON: string;
  CreatedBy: number;
  CreatedOn: string;
  Description?: any;
  DisplaySequence: number;
  FooterText: string;
  HeaderText: string;
  IsActive: boolean;
  IsDefault: boolean;
  ModifiedBy: number;
  ModifiedOn: string;
  NegativeTemplateFileName?: any;
  ReportTemplateID: number;
  ReportTemplateName: string;
  ReportTemplateShortName: string;
  TemplateFileName?: any;
  TemplateHTML?: any;
  TemplateType: string;
  constructor(ColSettingsJSON, CreatedBy, CreatedOn, Description, DisplaySequence, FooterText, HeaderText, IsActive, IsDefault, ModifiedBy, NegativeTemplateFileName, ReportTemplateID, ReportTemplateName, ReportTemplateShortName, TemplateFileName, TemplateHTML, TemplateType, ModifiedOn) {

    this.ColSettingsJSON = ColSettingsJSON;
    this.CreatedBy = CreatedBy;
    this.CreatedOn = CreatedOn;
    this.Description = Description;
    this.DisplaySequence = DisplaySequence;
    this.FooterText = FooterText;
    this.HeaderText = HeaderText;
    this.IsActive = IsActive;
    this.IsDefault = IsDefault;
    this.NegativeTemplateFileName = NegativeTemplateFileName;
    this.ModifiedBy = ModifiedBy;
    this.ModifiedOn = ModifiedOn;
    this.ReportTemplateID = ReportTemplateID;
    this.ReportTemplateName = ReportTemplateName;
    this.ReportTemplateShortName = ReportTemplateShortName;
    this.TemplateFileName = TemplateFileName;
    this.TemplateHTML = TemplateHTML;
    this.TemplateType = TemplateType;

  }

}

export class PatientListForFinalReport {
  AllowOutpatientWithProvisional: boolean;
  BarCodeNumber: number;
  BillingStatus: string;
  DateOfBirth: string;
  Email?: any;
  FirstName: string;
  Gender: string;
  IsFileUploadedToTeleMedicine: boolean;
  IsPrinted: boolean;
  IsValidToPrint: number;
  LabRequisitionIdCSV: string;
  LabTestCSV: string;
  LastName: string;
  PatientCode: string;
  PatientId: number;
  PatientName: string;
  PhoneNumber: string;
  ReportGeneratedBy: string;
  ReportId: number;
  RunNumberType: string;
  SampleCodeFormatted: string;
  VisitType: string;
  WardName: string;
}

export class LabReport {
  Header: string;
  Lookups: Lookups;
  Columns: string;
  ReportId: number;
  Signatories: string;
  TemplateId: number;
  TemplateType: Type;
  TemplateHTML: null;
  TemplateName: null;
  FooterText: string;
  Comments: null;
  IsPrinted: boolean;
  ValidToPrint: boolean;
  CreatedOn: Date;
  CreatedBy: number;
  ReportCreatedOn: Date;
  ReportCreatedBy: number;
  BarCodeNumber: number;
  PrintedOn: Date;
  PrintedBy: number;
  PrintCount: number;
  PrintedByName: string;
  HasInsurance: boolean;
  Templates: Template[];
  CovidFileUrl: null;
  Email: null;
  IsFileUploadedToTeleMedicine: boolean;
}

export class Lookups {
  PatientId: number;
  PatientName: string;
  PatientCode: string;
  Gender: string;
  DOB: Date;
  PhoneNumber: string;
  Address: string;
  MunicipalityName: string;
  CountrySubDivisionName: string;
  PrescriberId: number;
  PrescriberName: string;
  ReceivingDate: Date;
  ReportingDate: Date;
  SampleDate: Date;
  SampleCode: number;
  VerifiedOn: Date;
  SampleCodeFormatted: string;
  VisitType: string;
  RunNumberType: Type;
  Specimen: string;
  LabTypeName: string;
  ProfilePictureName: null;
  PassPortNumber: null;
  WardName: string;
  PolicyNumber: string;
}

export enum Type {
  Low = "low",
  Normal = "normal",
}

export class Template {
  TemplateId: number;
  TemplateName: string;
  TemplateType: Type;
  TemplateHtml: null;
  HeaderText: string;
  FooterText: string;
  TemplateColumns: string;
  Tests: Test[];
  DisplaySequence: number;
}

export class Test {
  TestName: string;
  ReportingName: string;
  RequisitionId: number;
  LabTestId: number;
  ComponentJSON: ComponentJSON[];
  HasNegativeResults: boolean;
  NegativeResultText: null;
  RequestDate: Date;
  Comments: null;
  DisplaySequence: number;
  Interpretation: null;
  Components: Component[];
  Specimen: string;
  SampleCollectedBy: string;
  SampleCollectedOn: Date;
  VendorDetail: VendorDetail;
  HasInsurance: boolean;
  BillingStatus: string;
  VerifiedBy: number;
  VerifiedOn: Date;
  ResultingVendorId: number;
  MaxResultGroup: number;
  IsLISApplicable: boolean;
}

export class ComponentJSON {
  ComponentId: number;
  ComponentName: string;
  Unit: null | string;
  ValueType: ValueType;
  ControlType: ControlType;
  Range: null | string;
  RangeDescription: null | string;
  Method: null;
  ValueLookup: null;
  MinValue: number | null;
  MaxValue: number | null;
  DisplayName: string;
  DisplaySequence: number;
  IndentationCount: number;
  ShowInSheet: boolean;
  ComponentMapId: number;
  MaleRange: null | string;
  FemaleRange: null | string;
  ChildRange: null | string;
  GroupName: null;
  IsAutoCalculate: boolean;
  CalculationFormula: null;
  FormulaDescription: null;
  ValuePrecision: number;
}

export enum ControlType {
  Label = "Label",
  SearchBox = "SearchBox",
  TextBox = "TextBox",
}

export enum ValueType {
  Number = "number",
  String = "string",
}

export class Component {
  TestComponentResultId: number;
  RequisitionId: number;
  LabTestId: number;
  Value: null | string;
  Unit: null | string;
  Range: null | string;
  ComponentName: string;
  ComponentId: null;
  Method: null;
  CreatedBy: number;
  CreatedOn: Date;
  ModifiedBy: null;
  ModifiedOn: null;
  Remarks: null;
  TemplateId: number;
  RangeDescription: null | string;
  LabRequisition: null;
  IsNegativeResult: boolean;
  NegativeResultText: null;
  IsAbnormal: boolean;
  LabReportId: null;
  IsActive: boolean;
  AbnormalType: Type | null;
  ResultGroup: number;
}

export class VendorDetail {
  LabVendorId: number;
  VendorCode: string;
  VendorName: string;
  IsExternal: boolean;
  ContactAddress: null;
  ContactNo: null;
  Email: null;
  Remarks: null;
  CreatedBy: number;
  CreatedOn: Date;
  IsActive: boolean;
  IsDefault: boolean;
}

export class SignatoryData {
  EmployeeId: number;
  EmployeeFullName?: string;
  Signature: string;
  SignatoryImageName?: string | null;

}

export class LookUp {
  LookUpId: number
  ModuleName: string
  LookUpName: string
  LookupDataJson: string
  Description: any
}
