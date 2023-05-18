export interface EmailGroupAutoCompleteProps {
  label: string;
  placeholder: string;
  value: number;
  error: boolean | undefined;
  helperText: string | string[] | false | undefined;
  onChange: (value: number) => void;
}

export interface EmailGroupOption{
  id: number;
  label: string;
};

export interface CreateNewEmailGroupProps {
  onChange: (value: EmailGroupOption) => void;
}