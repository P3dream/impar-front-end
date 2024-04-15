import { Control, Controller } from "react-hook-form";

interface Params extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

export const InputFile = ({ label, control, name, ...props }: Params) => {
  return (
    <Controller
      control={control}
      name={`image`}
      render={({ field: { onChange, name }, fieldState: { error } }) => {
        return (
          <div className="col-span-12 w-full items-center">
            <label className="text-[12px] font-bold mb-1" htmlFor={name}>
              {label}
            </label>
            <input
              {...props}
              className="p-3 rounded-md border"
              name={name}
              type="file"
              onChange={(e) => {
                onChange(e.target.files);
              }}
            />
            <p className="text-sm w-full mt-1 text-destructive">
              {error?.message && error.message}
            </p>
          </div>
        );
      }}
    />
  );
};
