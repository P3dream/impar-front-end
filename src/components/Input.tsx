import { Control, useController } from "react-hook-form";

interface Params extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

export const Input = ({ label, control, name, ...props }: Params) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: props.type !== "file" ? "" : [],
  });

  return (
    <div className="w-full flex flex-col">
      <label className="text-[12px] font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <input className="p-3 rounded-md border" {...props} {...field} />
      <p className="text-sm w-full mt-1 text-destructive">
        {error?.message && error.message}
      </p>
    </div>
  );
};
