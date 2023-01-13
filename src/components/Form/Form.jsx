import './Form.css'
import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => console.log(data)
   console.log(errors)

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
         <label htmlFor="nom">Nom</label>
         <input
            type="text"
            id="nom"
            {...register('nom', {
               required: 'ce champ est requis',
               maxLength: 15,
            })}
            aria-invalid={errors.nom ? 'true' : 'false'}
         />
         {errors.nom && (
            <p role="alert" className="form_alert">
               {errors.nom?.message}
            </p>
         )}

         <label htmlFor="prénom">Prénom</label>
         <input
            type="text"
            id="prénom"
            {...register('prénom', {
               required: 'ce champ est requis',
               maxLength: 15,
            })}
         />
         {errors.prénom && (
            <p role="alert" className="form_alert">
               {errors.prénom?.message}
            </p>
         )}

         <label htmlFor="email">Email</label>
         <input
            type="email"
            id="email"
            {...register('mail', {
               required: 'ce champ est requis',
               pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'adresse email invalide',
               },
            })}
            aria-invalid={errors.mail ? 'true' : 'false'}
         />
         {errors.mail && (
            <p role="alert" className="form_alert">
               {errors.mail?.message}
            </p>
         )}

         <label htmlFor="tel">Téléphone</label>
         <input
            type="tel"
            id="tel"
            {...register('tel', {
               required: 'ce champ est requis',
               pattern: {
                  value: /^((\+)33|0|0033)[1-9](\d{2}){4}$/g,
                  message: 'téléphone invalide',
               },
            })}
         />
         {errors.tel && (
            <p role="alert" className="form_alert">
               {errors.tel?.message}
            </p>
         )}
         <div className="form_submit">
            <button type="submit">Commander</button>
         </div>
      </form>
   )
}

export default Form
