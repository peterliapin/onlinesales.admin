export interface EditProps<T> {
  key: string;
  label: string;
  example: string;
  pattern?: string;
  disabled: boolean;
  required: boolean | undefined;
  minLength?: number;
  maxLength?: number;
  value: T | null;
  valueOptions?: T[] | null;
  onChangeValue: (newValue: T | null) => void;
}
