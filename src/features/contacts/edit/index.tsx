import { useEffect, useState } from "react";
import { ContactDetailsDto, ContactUpdateDto } from "lib/network/swagger-client";
import { editFormRoute } from "lib/router";
import { useRequestContext } from "providers/request-provider";
import { useRouteParams } from "typesafe-routes";
import { ContactForm } from "../form";

export const ContactEdit = () => {
  const { client } = useRequestContext();

  const { id } = useRouteParams(editFormRoute);

  const [contact, setContact] = useState<ContactDetailsDto>({
    firstName: "",
    email: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.api.contactsDetail(id);
        setContact(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [client]);

  const handleSave = () => {
    const updateDto: ContactUpdateDto = {
      ...contact,
    };

    (async () => {
      await client.api.contactsPartialUpdate(id, updateDto);
    })();
  };

  return (
    <ContactForm
      contact={contact}
      updateContact={setContact}
      handleSave={handleSave}
      isEdit={true}
    />
  );
};
