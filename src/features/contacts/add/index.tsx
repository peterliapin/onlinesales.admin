import { useState } from "react";
import { ContactCreateDto, ContactDetailsDto } from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { ContactForm } from "../form";

export const ContactAdd = () => {
  const { client } = useRequestContext();

  const [contact, setContact] = useState<ContactDetailsDto>({ email: "" });

  const handleSave = async () => {
    const createDto: ContactCreateDto = {
      ...contact,
    };
    await client.api.contactsCreate(createDto);
  };

  return (
    <ContactForm
      contact={contact}
      updateContact={setContact}
      handleSave={handleSave}
      isEdit={false}
    />
  );
};
