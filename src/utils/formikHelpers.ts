import { NotificationsService } from "@hooks";
import { FormikHelpers } from "formik";
import networkErrorToStringArray from "./networkErrorToStringArray";

export async function execSubmitWithToast<T>(
  values: T,
  helpers: FormikHelpers<T>,
  submitFunc: (values: T, helpers: FormikHelpers<T>) => Promise<void>,
  notificationsService: NotificationsService,
  showErrorModalFunc: (value: string[]) => void,
  entityName: string,
): Promise<void> {
  notificationsService.promise(submitFunc(values, helpers), {
    pending: `Saving a ${entityName}...`,
    success: `${entityName} saved successfully`,
    error: (error) => {
      const errMessage = `Unable to save ${entityName}. An error occurred.`;
      const errDetails : string[] = [];
      if (error.data.error && error.data.error.title){
        errDetails.push(error.data.error.title);
      }
      if (error.data.message){
        errDetails.push(error.data.message);
      }
      if (error.data.error && error.data.error.errors){
        errDetails.push(...networkErrorToStringArray(error.data.error.errors));
      }
      return {
        title: errMessage,
        onClick: errDetails.length > 0 ? () => {showErrorModalFunc(errDetails);} : undefined,
      };
    },
  });
}