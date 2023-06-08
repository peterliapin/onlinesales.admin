import { EmailTemplateDetailsDto } from "@lib/network/swagger-client";

export interface EmailTemplateEditorAutoSave {
  id: string;
  savedData: EmailTemplateDetailsDto;
  latestAutoSave: Date;
}

export interface EmailTemplateEditData {
  data: EmailTemplateEditorAutoSave[];
}

export enum EmailTemplateEditRestoreState {
  Idle = 1,
  Requested,
  Rejected,
  Accepted,
}
