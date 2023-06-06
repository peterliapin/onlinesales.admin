import { useState } from "react";
import { AccountCreateDto, AccountDetailsDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { AccountForm } from "../form";

export const AccountAdd = () => {
  const { client } = useRequestContext();

  const [account, setAccount] = useState<AccountDetailsDto>({ name: "" });

  const handleSave = async (newAccount: AccountDetailsDto) => {
    const createDto: AccountCreateDto = {
      ...newAccount,
    };
    await client.api.accountsCreate(createDto!);
  };

  return <AccountForm account={account} handleSave={handleSave} isEdit={false} />;
};
