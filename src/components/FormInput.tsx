// @flow
import React, { useState, InputHTMLAttributes } from "react";
import { Input, Label, FormFeedback } from "reactstrap";
import classNames from "classnames";

import { FieldErrors } from "react-hook-form";

interface PasswordInputProps {
  name: string;
  placeholder?: string;
  refCallback?: any;
  errors: any;
  register?: any;
  className?: string;
  withoutLabel?: boolean;
  hidePasswordButton?: boolean;
}

/* Password Input */
const PasswordInput: React.FunctionComponent<PasswordInputProps> = ({
  name,
  placeholder,
  refCallback,
  errors,
  register,
  className,
  hidePasswordButton,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div className="position-relative auth-pass-inputgroup mb-3">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          id={name}
          ref={(r: HTMLInputElement) => {
            if (refCallback) refCallback(r);
          }}
          className={classNames(className, {
            "is-invalid": errors && errors[name],
          })}
          {...(register ? register(name) : {})}
          autoComplete={name}
        />
        {errors && errors[name] ? (
          <FormFeedback type="invalid"> {errors[name]["message"]}</FormFeedback>
        ) : null}
        {!hidePasswordButton && (
          <button
            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            data-password={showPassword ? "true" : "false"}
          >
            <i className="ri-eye-fill align-middle"></i>
          </button>
        )}
      </div>
    </>
  );
};

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  register?: any;
  errors?: FieldErrors;
  className?: string;
  labelClassName?: string;
  containerClass?: string;
  refCallback?: any;
  children?: any;
  control?: any;
  withoutLabel?: boolean;
  hidePasswordButton?: boolean;
}

const FormInput: React.FunctionComponent<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  className,
  labelClassName,
  containerClass,
  refCallback,
  children,
  control,
  withoutLabel,
  hidePasswordButton,
  ...otherProps
}) => {
  return (
    <>
      {type === "hidden" ? (
        <input
          type={type}
          name={name}
          {...(register ? register(name) : {})}
          {...otherProps}
        />
      ) : (
        <>
          {type === "password" ? (
            <>
              {label ? (
                <>
                  {!withoutLabel && (
                    <div className="float-end">
                      <a href="auth-recoverpw" className="text-muted">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <Label htmlFor={name} className={labelClassName}>
                    {label}
                  </Label>
                </>
              ) : null}
              <PasswordInput
                name={name}
                placeholder={placeholder}
                refCallback={refCallback}
                errors={errors}
                register={register}
                className={className}
                withoutLabel={withoutLabel}
                hidePasswordButton={hidePasswordButton}
              />
            </>
          ) : (
            <>
              {type === "checkbox" || type === "radio" ? (
                <>
                  <div className="form-check form-check-info font-size-16">
                    <Input
                      className={className}
                      type={type}
                      name={name}
                      id={name}
                      ref={(r: HTMLInputElement) => {
                        if (refCallback) refCallback(r);
                      }}
                      invalid={errors && errors[name] ? true : undefined}
                      {...(register ? register(name) : {})}
                      {...otherProps}
                    />
                    <Label
                      className="form-check-label font-size-14"
                      for="remember-check"
                    >
                      Remember me
                    </Label>
                  </div>
                  {errors && errors[name] ? (
                    <FormFeedback type="invalid">
                      {errors[name]["message"]}
                    </FormFeedback>
                  ) : null}
                </>
              ) : (
                <>
                  {label ? (
                    <Label htmlFor={name} className={labelClassName}>
                      {label}
                    </Label>
                  ) : null}
                  <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    ref={(r: HTMLInputElement) => {
                      if (refCallback) refCallback(r);
                    }}
                    className={classNames(className, {
                      "is-invalid": errors && errors[name],
                    })}
                    {...(register ? register(name) : {})}
                    {...otherProps}
                    autoComplete={name}
                    tag="input"
                  />
                  {errors && errors[name] ? (
                    <FormFeedback type="invalid">
                      {errors[name]["message"]}
                    </FormFeedback>
                  ) : null}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default FormInput;
