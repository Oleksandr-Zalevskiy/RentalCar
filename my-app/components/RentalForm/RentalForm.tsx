'use client';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  date: string;
  comment: string;
}

export default function RentalForm() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);

      toast.success('Rental request sent successfully');

      reset();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}
        placeholder="Name"
      />

      <input
        {...register('email')}
        placeholder="Email"
      />

      <input
        type="date"
        {...register('date')}
      />

      <textarea
        {...register('comment')}
        placeholder="Comment"
      />

      <button type="submit">
        Send
      </button>
    </form>
  );
}