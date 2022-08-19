import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

export default function TextArea ({
    label,
    id,
    placeholder = '',
    classNameL ='',
    classNameT ='',
    
    validate = '',
}){
	const {
			register,
			formState: { errors },
		} = useFormContext();
    return (
      <>
        <div className="flex flex-col font-secondary mt-5">
					<label className={classNameL}>
							{label}
					</label>
					<textarea 
						{...register(id, validate)}
						id={id}
						className={classNameT }
						name={id}
						placeholder = {placeholder}>
					</textarea>
            {errors[id] && (
            <div className='flex flex-row mt-1'>
							<HiExclamationCircle className='text-xl text-red-500' />
							<span className='text-sm text-red-500'>{errors[id].message}</span>
          </div>
        )}
        </div>
			</>
  )
}