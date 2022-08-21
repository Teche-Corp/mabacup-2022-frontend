import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

export default function SelectInput({
    options,
    label,
    id,
    classNameL,
    classNameS,
    defops,
    validate = '',
		setPage = '',
  	page = ''
    })
{
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
        
        <div className="flex flex-col font-secondary mt-5">
					<label
						className={classNameL}
					>{label}</label>
					<select
						id={id}
						name={id}
						className={classNameS}
						{...register(id, validate)}
						>
						<option>{defops}</option>
						{options.map((data, index) => 
							<option key={index} value={data.value}>{data.name}</option>                    
						)}
					</select>
						{errors[id] && (
          	<div className='flex flex-row mt-1'>
            	<HiExclamationCircle className='text-xl text-red-500' />
            	<span className='text-sm text-red-500'>{errors[id].message}</span>
          	</div>
        	)}
        </div>
        
    )
}