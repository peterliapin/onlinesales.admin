export interface EditProps<T> {
  key: string;
  label: string;
  disabled: boolean;
  value: T | null;
  valueOptions?: T[] | null;
  onChangeValue: (newValue: T | null) => void;
}
