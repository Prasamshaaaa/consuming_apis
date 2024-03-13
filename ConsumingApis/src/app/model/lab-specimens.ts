
export class LabSpecimenData {
    Name: string;
    
    IsSelected: boolean;
    
    SpecimenId: number;
  
  
  }
  
  export class LabResult {
    Results: Array<LabSpecimenData> = new Array<LabSpecimenData>();
    
  }