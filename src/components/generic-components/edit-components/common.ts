export interface EditProps<T> {
  key: string;
  label: string;
  disabled: boolean;
  value: T;
  onChange: (newValue: T) => void;
}
