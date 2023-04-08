import { FormGroup } from "@angular/forms";

export function ConfirmedValidator(cn:string,mcn:string){
   return(Formgroup:FormGroup)=>{
    const pass=Formgroup.controls[cn];
    const cpass=Formgroup.controls[mcn];

   if(pass.value!==cpass.value){
     cpass.setErrors({ConfirmedValidator:true})
    }
   else{
   cpass.setErrors(null);
   }
  }
}
