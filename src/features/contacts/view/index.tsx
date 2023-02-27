import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { ContactDetailsDto } from "lib/network/swagger-client";
import { useState } from "react";

interface ContactFormProps {
  contact: ContactDetailsDto;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

export const ContactView = ({ contact }: ContactFormProps) => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  return <div>Test contact view</div>;
};
