export interface EditProps<T> {
  key: string;
  label: string;
  example?: string;
  pattern?: string;
  disabled: boolean;
  required: boolean | undefined;
  minLength?: number;
  maxLength?: number;
  value: T | null;
  valueOptions?: T[] | null;
  onChangeValue: (newValue: T | null) => void;
  error?: string | undefined;
}

export interface DynamicValues {
  [x: string]: any;
}

export interface ValidationResult {
  errors?: { [x: string]: string; };
}
