import { useForm } from 'react-hook-form'

const Signin = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data)=>{
        console.log(data);
    }
  return (
    <>
     <div>Signin</div>
     <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input placeholder='Enter your name' {...register("name",{required:true,minLength:2})} />
        {errors.name && <p>This field is required</p>}
        <input placeholder='Enter your password' type='password' {...register("password")}/>
        <button type='submit'>Submit</button>
        </div>
       
     </form>
    </>
   
    
  )
}

export default Signin