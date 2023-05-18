import { useState } from "react";
import { AccountCreateDto, AccountDetailsDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { AccountForm } from "../form";

export const AccountAdd = () => {
  const { client } = useRequestContext();

  const [account, setAccount] = useState<AccountDetailsDto>({ name: "" });

  const handleSave = async () => {
    const createDto: AccountCreateDto = {
      ...account,
    };
    await client.api.accountsCreate(createDto!);
  };

  return (
    <AccountForm
      account={account}
      updateAccount={setAccount}
      handleSave={handleSave}
      isEdit={false}
    />
  );
};
