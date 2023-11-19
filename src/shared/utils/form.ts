import type { FieldValues, Path, UseFormSetValue } from 'react-hook-form'

type ObjectWithValues<T> = {
  [K in keyof T]: T[K]
}

export function setFormValues<T extends FieldValues>(setValue: UseFormSetValue<T>, values: ObjectWithValues<T>): void {
  Object.keys(values).forEach((key) => {
    const path: Path<T> = key as Path<T>
    setValue(path, values[key])
  })
}
