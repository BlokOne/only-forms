
import { FieldValues, useForm } from "react-hook-form"
import Button from "../button/button"
import { StyledCheckBox, StyledError, StyledForm, StyledInput } from "./style"

type FormProps = {
  callback: (data: FieldValues) => void,
  loading: boolean
}

function Form(props: FormProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange"
  })
  return (
    <StyledForm onSubmit={handleSubmit(props.callback)}>
      <p>Логин</p>
      <StyledInput
        color={!errors?.login ? "transition" : "#E26F6F"}
        type="text"
        {...register("login", {
          required: "Обязательное поле",
        })
        }
      />
      <div
        style={{ color: "red" }}
      >
        {errors?.login && <StyledError>
          {errors?.login?.message || "Error"}
        </StyledError>}
      </div>
      <p>Пароль</p>
      <StyledInput
        type="password"
        color={!errors?.password ? "transition" : "#E26F6F"}
        {...register("password", {
          required: "Обязательное поле",
        })
        }
      />
      <div
        style={{ color: "red" }}
      >
        {errors?.password && <StyledError>
          {errors?.password?.message || "Error"}
        </StyledError>}
      </div>
      <StyledCheckBox>
        <input {...register("remember")} id="checkbox" type="checkbox" value={"true"} />
        <label htmlFor="checkbox">Запомнить пароль</label>
      </StyledCheckBox>
      <Button type="submit"
        title="Войти"
        disabled={props.loading}
      />
    </StyledForm>
  )
}

export default Form
