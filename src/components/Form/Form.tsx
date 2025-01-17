import { useForm } from "react-hook-form";
import type { IForm } from "../../types/interfaces";
import { login } from "../../api/api";
import { StyledForm,LoginText,ImgWrapper } from "./style";
import { useRouter } from "next/router";
import Image from 'next/image'

const Form = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter()
  const onSubmit =  async(data : IForm) => {
    const response = await login(data)
    if(response){
      setTimeout(()=>router.push('/list?page=1'),800)
    }
  }
  return(
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <LoginText>
      <ImgWrapper>
      <Image src='/svg/UserIconBlack.svg' alt='user' width={10} height={10} />
      </ImgWrapper>
    로그인
    </LoginText>
    <input {...register("email")} placeholder={'아이디를 입력하세요'} />
    <input {...register("password")} type='password' placeholder={'비밀번호를 입력하세요'} />
    <button>
      <Image src='/svg/Login.svg' alt='login' width={10} height={10} />
      로그인
    </button>
  </StyledForm>
  )
}

export default Form