import { SyntheticEvent, useEffect, useState } from "react";
import { Autocomplete, Button, Card, CardContent, Grid, TextField, Tooltip } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { CoreModule } from "lib/router";
import { contactAddHeader, contactEditHeader, contactFormBreadcrumbLinks } from "../constants";
import { getCountryList } from "utils/general-helper";
import { useRequestContext } from "@providers/request-provider";
import { useCoreModuleNavigation, useNotificationsService } from "@hooks";
import { ModuleWrapper } from "@components/module-wrapper";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { SavingBar } from "@components/saving-bar";
import { useFormik, FormikHelpers } from "formik";
import zod from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { execSubmitWithToast } from "utils/formik-helper";
import { useErrorDetailsModal } from "@providers/error-details-modal-provider";

interface ContactFormProps {
  contact: ContactDetailsDto;
  handleSave: (contact: ContactDetailsDto) => Promise<void>;
  isEdit: boolean;
}

type Country = {
  code: string;
  name: string;
};

export const ContactForm = ({ contact, handleSave, isEdit }: ContactFormProps) => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const handleNavigation = useCoreModuleNavigation();
  const { setSaving, setBusy } = useModuleWrapperContext();
  const { Show: showErrorModal } = useErrorDetailsModal()!;

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const header = isEdit ? contactEditHeader : contactAddHeader;

  useEffect(() => {
    setBusy(async () => {
      const countries = await getCountryList(context);
      if (countries) {
        setCountryList(Object.entries(countries).map(([code, name]) => ({ code, name })));
        setIsLoading(false);
      } else {
        notificationsService.error("Server error: country list not available.");
      }
    });
  }, []);

  useEffect(() => {
    if (contact.email) {
      formik.setValues(contact);
    }
  }, [contact]);

  const submit = (values: ContactDetailsDto, helpers: FormikHelpers<ContactDetailsDto>) => {
    execSubmitWithToast<ContactDetailsDto>(
      values,
      helpers,
      submitFunc,
      notificationsService,
      showErrorModal,
      "contact"
    );
  };

  const submitFunc = async (
    values: ContactDetailsDto,
    helpers: FormikHelpers<ContactDetailsDto>
  ) => {
    try {
      await handleSave(values);
      handleNavigation(CoreModule.contacts);
    } catch (error) {
      formik.setSubmitting(false);
      throw error;
    }
  };

  const ContactEditValidationScheme = zod.object({
    email: zod.string().email(),
    timezone: zod.number().nullable().optional(),
    firstName: zod.string().optional(),
  });

  const formik = useFormik({
    validationSchema: toFormikValidationSchema(ContactEditValidationScheme),
    initialValues: {
      email: "",
      timezone: null,
    },
    onSubmit: submit,
    validateOnChange: false,
  });

  const handleCountryChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
      formik.setFieldValue("countryCode", value.code);
    }
  };

  const handleCancel = () => {
    handleNavigation(CoreModule.contacts);
  };

  return (
    <ModuleWrapper
      breadcrumbs={contactFormBreadcrumbLinks}
      currentBreadcrumb={header}
      saveIndicatorElement={<SavingBar />}
    >
      {isLoading ? (
        <div />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="First Name"
                    name="firstName"
                    value={formik.values.firstName || ""}
                    placeholder="Enter first name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Last Name"
                    name="lastName"
                    value={formik.values.lastName || ""}
                    placeholder="Enter last name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Email Address"
                    name="email"
                    value={formik.values.email}
                    placeholder="Enter email address"
                    type="email"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Phone"
                    name="phone"
                    value={formik.values.phone || ""}
                    placeholder="Enter phone number"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Address 1"
                    name="address1"
                    value={formik.values.address1 || ""}
                    placeholder="Enter address"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Address 2"
                    name="address2"
                    value={formik.values.address2 || ""}
                    placeholder="Enter address"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  {!isLoading && (
                    <Autocomplete
                      disabled={formik.isSubmitting}
                      disablePortal
                      options={countryList}
                      getOptionLabel={(option) => option.name}
                      value={countryList.find((c) => c.code === formik.values.countryCode) || null}
                      onChange={handleCountryChange}
                      fullWidth
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country"
                          value={
                            countryList.find((c) => c.code === formik.values.countryCode) || null
                          }
                          onChange={formik.handleChange}
                        />
                      )}
                    />
                  )}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="City"
                    name="cityName"
                    value={formik.values.cityName || ""}
                    placeholder="Enter state"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="State"
                    name="state"
                    value={formik.values.state || ""}
                    placeholder="Enter state"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Zip"
                    name="zip"
                    value={formik.values.zip || ""}
                    placeholder="Enter zip"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Tooltip title="Timezone field must contain only numbers">
                    <TextField
                      disabled={formik.isSubmitting}
                      label="Timezone"
                      name="timezone"
                      type="number"
                      value={formik.values.timezone || ""}
                      placeholder="Enter timezone"
                      variant="outlined"
                      onChange={formik.handleChange}
                      fullWidth
                      error={formik.touched.timezone && Boolean(formik.errors.timezone)}
                      helperText={formik.touched.timezone && formik.errors.timezone}
                    ></TextField>
                  </Tooltip>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={formik.isSubmitting}
                    label="Language"
                    name="language"
                    value={formik.values.language || ""}
                    placeholder="Enter language"
                    variant="outlined"
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    disabled={formik.isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleCancel}
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      )}
    </ModuleWrapper>
  );
};
