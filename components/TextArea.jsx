import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

export default function TextArea ({
    label,
    id,
    placeholder = '',
    classNameL ='',
    classNameT ='',
    validate = '',
		setPage = '',
  	page = ''
}){
	const {
		register,
		formState: { errors },
	} = useFormContext();

	useEffect(() => {
		if (errors[id]) {
			setPage(page);
		}
	} , [errors[id]])
    return (
      <>
        <div className="flex flex-col font-secondary mt-5">
					<label className={classNameL}>
						{label}
					</label>
					<textarea 
						{...register(id, validate)}
						id={id}
						className={!errors[id]
              ? classNameT
              : 'p-2 outline h-10 outline-4 outline-red-600  rounded' }
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