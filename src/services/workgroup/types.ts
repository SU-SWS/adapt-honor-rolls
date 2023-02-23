export interface GetWorkGroupSuccessResponseDTO {
  filter: 'ACADEMIC_ADMINISTRATIVE' | 'STUDENT' | 'FACULTY' | 'STAFF' | 'FACULTY_STAFF' | 'FACULTY_STUDENT' | 'STAFF_STUDENT' | 'FACULTY_STAFF_STUDENT' | 'NONE';
  privgroup: 'TRUE' | 'FALSE';
  visibility: 'PRIVATE' | 'STANFORD';
  // TODO: Replace with pattern check, if possible. e.g. '25-Aug-2022'
  lastUpdate: string;
  members: WorkGroupMember[],
  name: string;
  description: string;
  // TODO: Complete type definition for the subobjects of this field.
  integrations: [];
  administrators: WorkGroupMember;
  reusable: 'TRUE' | 'FALSE';
  lastUpdateBy: string;
}

export type WorkGroupMember = {
  lastUpdate: string;
  name: string;
  id: string;
  // TODO: Replace with enumerated values. e.g. 'PERSON' | 'OTHER'
  type: string;
}
