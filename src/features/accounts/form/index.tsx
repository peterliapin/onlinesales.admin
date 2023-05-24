import { ModuleWrapper } from "@components/module-wrapper";
import { SavingBar } from "@components/SavingBar";
import { useNotificationsService } from "@hooks";
import { AccountDetailsDto } from "@lib/network/swagger-client";
import { CoreModule } from "@lib/router";
import { Autocomplete, Button, Card, CardContent, Divider, Grid, TextField } from "@mui/material";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { useRequestContext } from "@providers/request-provider";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { getContinentList, getCountryList, useCoreModuleNavigation } from "utils/helper";
import { isNotEmpty, isValidOrEmptyNumber } from "utils/validators";
import { accountAddHeader, accountEditHeader, accountFormBreadcrumbLinks } from "../constants";

interface AccountFormProps {
  account: AccountDetailsDto;
  updateAccount: (account: AccountDetailsDto) => void;
  handleSave: () => void;
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

export const AccountForm = ({ account, updateAccount, handleSave, isEdit }: AccountFormProps) => {
  const { notificationsService } = useNotificationsService();
  const context = useRequestContext();
  const { setSaving } = useModuleWrapperContext();
  const handleNavigation = useCoreModuleNavigation();

  const [countryList, setCountryList] = useState<Country[]>([]);
  const [continentList, setContinentList] = useState<Continent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newSocialMediaKey, setNewSocialMediaKey] = useState("");
  const [newSocialMediaValue, setNewSocialMediaValue] = useState("");
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [isValidRevenue, setIsValidRevenue] = useState(true);

  const header = isEdit ? accountEditHeader : accountAddHeader;

  useEffect(() => {
    (async () => {
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
      setIsLoading(false);
    })();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateAccount((currentAccount: AccountDetailsDto) => ({ ...currentAccount, [name]: value }));
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateAccount((currentAccount: AccountDetailsDto) => ({
      ...currentAccount,
      ["tags"]: value.split(","),
    }));
  };

  const validateAndSave = () =>
    setSaving(async () => {
      setNameIsEmpty(false);
      setIsValidRevenue(true);

      if (!isNotEmpty(account.name)) setNameIsEmpty(true);
      else if (!isValidOrEmptyNumber(account.revenue)) setIsValidRevenue(false);
      else {
        try {
          await handleSave();
          handleSuccess();
        } catch (e) {
          console.log(e);
          notificationsService.error("Server error occurred.");
        }
      }
    });

  const handleSuccess = () => {
    notificationsService.success(`Account ${isEdit ? "updated" : "added"} successfully.`);
    handleNavigation(CoreModule.accounts);
  };

  const handleCancel = () => {
    handleNavigation(CoreModule.accounts);
  };

  const handleCountryChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
      updateAccount((currentAccount: AccountDetailsDto) => ({
        ...currentAccount,
        ["countryCode"]: value.code,
      }));
    }
  };

  const handleContinentChange = (
    e: SyntheticEvent<Element, Event>,
    value: { code: string; name: string } | null
  ) => {
    if (value) {
      updateAccount((currentAccount: AccountDetailsDto) => ({
        ...currentAccount,
        ["continentCode"]: value.code,
      }));
    }
  };

  const handleSocialMediaChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    updateAccount((currentAccount: AccountDetailsDto) => ({
      ...currentAccount,
      socialMedia: {
        ...currentAccount.socialMedia,
        [key]: e.target.value,
      },
    }));
  };

  const handleSocialMediaAdd = () => {
    if (!newSocialMediaKey || !newSocialMediaValue) return;
    updateAccount((currentAccount: AccountDetailsDto) => ({
      ...currentAccount,
      socialMedia: {
        ...currentAccount.socialMedia,
        [newSocialMediaKey]: newSocialMediaValue,
      },
    }));
    setNewSocialMediaKey("");
    setNewSocialMediaValue("");
  };

  const handleSocialMediaRemove = (key: string) => {
    updateAccount((currentAccount: AccountDetailsDto) => {
      const updatedSocialMedia = { ...currentAccount.socialMedia };
      delete updatedSocialMedia[key];
      return {
        ...currentAccount,
        ["socialMedia"]: updatedSocialMedia,
      };
    });
  };

  return (
    <ModuleWrapper
      breadcrumbs={accountFormBreadcrumbLinks}
      currentBreadcrumb={header}
      saveIndicatorElement={<SavingBar />}
    >
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Name"
                name="name"
                value={account.name || ""}
                placeholder="Enter name"
                variant="outlined"
                onChange={handleInputChange}
                error={nameIsEmpty}
                helperText={nameIsEmpty ? "Account name cannot be empty" : ""}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Site Url"
                name="siteUrl"
                value={account.siteUrl || ""}
                placeholder="Enter Site Url"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Logo Url"
                name="logoUrl"
                value={account.logoUrl || ""}
                placeholder="Enter Logo Url"
                type="url"
                variant="outlined"
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              {!isLoading && (
                <Autocomplete
                  disablePortal
                  options={countryList}
                  getOptionLabel={(option) => option.name}
                  value={countryList.find((c) => c.code === account.countryCode) || null}
                  onChange={handleCountryChange}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Country" />}
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
                  renderInput={(params) => <TextField {...params} label="Continent" />}
                />
              )}
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Employees Range"
                name="employeesRange"
                value={account.employeesRange || ""}
                placeholder="Enter Employees Range"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Revenue"
                name="revenue"
                value={account.revenue || ""}
                placeholder="Enter Revenue"
                variant="outlined"
                error={!isValidRevenue}
                helperText={!isValidRevenue ? "Revenue should be a valid number" : ""}
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Tags"
                name="tags"
                value={account.tags?.join(",") || ""}
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
                value={account.source || ""}
                placeholder="Enter Source"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Data"
                name="data"
                type="text"
                value={account.data || ""}
                placeholder="Enter Data"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item></Grid>
            <Grid xs={12} sm={12} item>
              <Divider textAlign="left">Social Media</Divider>
              <Grid container spacing={3}>
                {Object.entries(account.socialMedia || {}).map(([key, value], index) => (
                  <>
                    <Grid key={index} xs={12} sm={4} item>
                      <TextField label="Name" value={key} variant="outlined" fullWidth disabled />
                    </Grid>
                    <Grid key={index} xs={12} sm={4} item>
                      <TextField
                        label="Url"
                        value={value}
                        fullWidth
                        onChange={(event) => handleSocialMediaChange(event, key)}
                      />
                    </Grid>
                    <Grid key={index} xs={12} sm={4} item>
                      <Button onClick={() => handleSocialMediaRemove(key)}>Remove</Button>
                    </Grid>
                  </>
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={validateAndSave}
                fullWidth
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ModuleWrapper>
  );
};
