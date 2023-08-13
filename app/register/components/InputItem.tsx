import React from "react";

import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";

type InputProps = {
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
};

const InputItem: React.FC<InputProps> = ({
  name,
  type = name,
  required = true,
  disabled,
}) => {
  const label = capitalizeFirstLetter(name);

  return (
    <div className="space-y-2 flex flex-col items-start">
      <label htmlFor={name} className=" font-medium leading-6 ">
        {label}
      </label>
      <input
        name={name}
        type={type}
        autoComplete={name}
        disabled={disabled}
        required={required}
        className={
          `
        form-input
        block
        w-full
        rounded-md
        border-0
        pl-2
        py-1.5 
        shadow-sm
        ring-1
        outline-none
        ring-inset
        bg-transparent
        ring-slate-400
        placeholder-slate-400 
        focus:ring-2
        focus:ring-blue-400/80
         `
          /*,  errors[name] && "focus:ring-rose-400",
          disabled && "opacity-50 cursor-default" */
        }
      />
    </div>
  );
};

export default InputItem;
