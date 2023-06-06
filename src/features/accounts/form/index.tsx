import { ModuleWrapper } from "@components/module-wrapper";
import { SavingBar } from "@components/SavingBar";
import { useNotificationsService } from "@hooks";
import { AccountDetailsDto } from "@lib/network/swagger-client";
import { CoreModule } from "@lib/router";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Tooltip,
} from "@mui/material";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { useRequestContext } from "@providers/request-provider";
import { ChangeEvent, Fragment, SyntheticEvent, useEffect, useState } from "react";
import { getContinentList, getCountryList, useCoreModuleNavigation } from "utils/helper";
import { accountAddHeader, accountEditHeader, accountFormBreadcrumbLinks } from "../constants";
import { useFormik, FormikHelpers } from "formik";
import zod from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { execSubmitWithToast } from "utils/formikHelpers";
import { useErrorDetailsModal } from "@providers/error-details-modal-provider";

interface AccountFormProps {
  account: AccountDetailsDto;
  handleSave: (account: AccountDetailsDto) => void;
  isEdit: boolean;
}

type Country = {
  code: string;
  name: string;
};

type Continent = {
  code: string;
  name: string;
};

export const AccountForm = ({ account, handleSave, isEdit }: AccountFormProps) => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const { setSaving, setBusy } = useModuleWrapperContext();
  const { Show: showErrorModal } = useErrorDetailsModal()!;
  const handleNavigation = useCoreModuleNavigation();

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [continentList, setContinentList] = useState<Continent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newSocialMediaKey, setNewSocialMediaKey] = useState("");
  const [newSocialMediaValue, setNewSocialMediaValue] = useState("");

  const header = isEdit ? accountEditHeader : accountAddHeader;

  useEffect(() => {
    setBusy(async () => {
      const countries = await getCountryList(context);
      const continents = await getContinentList(context);
      if (countries) {
        setCountryList(Object.entries(countries).map(([code, name]) => ({ code, name })));
      } else {
        notificationsService.error("Server error: country list not available.");
      }
      if (continents) {
        setContinentList(Object.entries(continents).map(([code, name]) => ({ code, name })));
      } else {
        notificationsService.error("Server error: continents list not available.");
      }
      if (account.name) {
        formik.setValues(account);
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (account.name) {
      formik.setValues(account);
    }
  }, [account]);

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    formik.setFieldValue("tags", value.split(","));
  };

  const handleCancel = () => {
    handleNavigation(CoreModule.accounts);
  };

  const handleCountryChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
      formik.setFieldValue("countryCode", value.code);
    }
  };

  const handleContinentChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
      formik.setFieldValue("continentCode", value.code);
    }
  };

  const handleSocialMediaChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const socialMedia = { ...formik.values.socialMedia };
    (socialMedia![key] = e.target.value), formik.setFieldValue("socialMedia", socialMedia);
  };

  const handleSocialMediaAdd = () => {
    if (!newSocialMediaKey || !newSocialMediaValue) return;

    const newItem = { [newSocialMediaKey]: newSocialMediaValue };
    const updatedSocialMedia = { ...formik.values.socialMedia, ...newItem };
    formik.setFieldValue("socialMedia", updatedSocialMedia);

    setNewSocialMediaKey("");
    setNewSocialMediaValue("");
  };

  const handleSocialMediaRemove = (key: string) => {
    const updatedSocialMedia = { ...formik.values.socialMedia };
    delete updatedSocialMedia[key];
    formik.setFieldValue("socialMedia", updatedSocialMedia);
  };

  const submitFunc = async (
    values: AccountDetailsDto,
    helpers: FormikHelpers<AccountDetailsDto>
  ) => {
    await handleSave(values);
  };

  const submit = (values: AccountDetailsDto, helpers: FormikHelpers<AccountDetailsDto>) => {
    execSubmitWithToast<AccountDetailsDto>(
      values,
      helpers,
      submitFunc,
      notificationsService,
      showErrorModal,
      "account"
    )
      .then(() => {
        handleNavigation(CoreModule.accounts);
      })
      .catch();
  };

  const AccountEditValidationScheme = zod.object({
    name: zod.string(),
    revenue: zod.number().nullable().optional(),
  });

  const formik = useFormik({
    validationSchema: toFormikValidationSchema(AccountEditValidationScheme),
    initialValues: {
      name: "",
    },
    onSubmit: submit,
    validateOnChange: false,
  });

  return (
    <ModuleWrapper
      breadcrumbs={accountFormBreadcrumbLinks}
      currentBreadcrumb={header}
      saveIndicatorElement={<SavingBar />}
    >
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Name"
                  name="name"
                  value={formik.values.name || ""}
                  placeholder="Enter name"
                  variant="outlined"
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Site Url"
                  name="siteUrl"
                  value={formik.values.siteUrl || ""}
                  placeholder="Enter Site Url"
                  variant="outlined"
                  onChange={formik.handleChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Logo Url"
                  name="logoUrl"
                  value={formik.values.logoUrl || ""}
                  placeholder="Enter Logo Url"
                  type="url"
                  variant="outlined"
                  onChange={formik.handleChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="City"
                  name="city"
                  value={""}
                  placeholder="Enter City"
                  variant="outlined"
                  onChange={formik.handleChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                {!isLoading && (
                  <Autocomplete
                    disablePortal
                    options={countryList}
                    getOptionLabel={(option) => option.name}
                    onChange={handleCountryChange}
                    value={countryList.find((c) => c.code === formik.values.countryCode) || null}
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
                {!isLoading && (
                  <Autocomplete
                    disabled={isEdit}
                    disablePortal
                    options={continentList}
                    getOptionLabel={(option) => option.name}
                    value={continentList.find((c) => c.code === account.continentCode) || null}
                    onChange={handleContinentChange}
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Continent"
                        value={continentList.find((c) => c.code === account.continentCode) || null}
                        onChange={formik.handleChange}
                      />
                    )}
                  />
                )}
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Employees Range"
                  name="employeesRange"
                  value={formik.values.employeesRange || ""}
                  placeholder="Enter Employees Range"
                  variant="outlined"
                  onChange={formik.handleChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Tooltip title="Revenue field must contain only numbers">
                  <TextField
                    label="Revenue"
                    name="revenue"
                    type="number"
                    value={formik.values.revenue || ""}
                    placeholder="Enter Revenue"
                    variant="outlined"
                    error={formik.touched.revenue && Boolean(formik.errors.revenue)}
                    helperText={formik.touched.revenue && formik.errors.revenue}
                    onChange={formik.handleChange}
                    fullWidth
                  ></TextField>
                </Tooltip>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Tags"
                  name="tags"
                  value={formik.values.tags?.join(",") || ""}
                  placeholder="Enter Tags"
                  variant="outlined"
                  onChange={handleTagInputChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Source"
                  name="source"
                  value={formik.values.source || ""}
                  placeholder="Enter Source"
                  variant="outlined"
                  onChange={formik.handleChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Data"
                  name="data"
                  type="text"
                  value={formik.values.data || ""}
                  placeholder="Enter Data"
                  variant="outlined"
                  onChange={formik.handleChange}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid xs={12} sm={6} item></Grid>
              <Grid xs={12} sm={12} item>
                <Divider textAlign="left">Social Media</Divider>
                <Grid container spacing={3}>
                  {formik.values.socialMedia &&
                    Object.entries(formik.values.socialMedia || {}).map(([key, value], index) => (
                      <Fragment key={index}>
                        <Grid xs={12} sm={4} item>
                          <TextField
                            label="Name"
                            value={key}
                            variant="outlined"
                            fullWidth
                            disabled
                          />
                        </Grid>
                        <Grid xs={12} sm={4} item>
                          <TextField
                            label="Url"
                            value={value}
                            fullWidth
                            onChange={(event) => handleSocialMediaChange(event, key)}
                          />
                        </Grid>
                        <Grid xs={12} sm={4} item>
                          <Button onClick={() => handleSocialMediaRemove(key)}>Remove</Button>
                        </Grid>
                      </Fragment>
                    ))}
                  <Grid xs={12} sm={4} item>
                    <TextField
                      label="Name"
                      fullWidth
                      value={newSocialMediaKey}
                      onChange={(event) => setNewSocialMediaKey(event.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <TextField
                      label="Url"
                      fullWidth
                      value={newSocialMediaValue}
                      onChange={(event) => setNewSocialMediaValue(event.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Button onClick={handleSocialMediaAdd}>Add</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Save
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </ModuleWrapper>
  );
};
