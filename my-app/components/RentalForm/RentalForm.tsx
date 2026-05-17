'use client';

import { FormEvent, useState } from 'react';

import toast from 'react-hot-toast';

export default function RentalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] =
    useState('');

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    toast.success(
      'Car rental successfully booked!'
    );

    setName('');
    setEmail('');
    setDate('');
    setComment('');
  };

  return (
    <div
      style={{
        border: '1px solid #DADDE1',
        borderRadius: '24px',
        padding: '32px',

        marginTop: '40px',
      }}
    >
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 600,
          marginBottom: '8px',
          color: '#121417',
        }}
      >
        Book your car now
      </h2>

      <p
        style={{
          color: '#8D929A',
          marginBottom: '24px',
          fontSize: '14px',
        }}
      >
        Stay connected! We are always ready
        to help you.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          style={{
            height: '48px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#F7F7F7',
            padding: '0 18px',
            fontSize: '16px',
            outline: 'none',
          }}
        />

        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          style={{
            height: '48px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#F7F7F7',
            padding: '0 18px',
            fontSize: '16px',
            outline: 'none',
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          required
          style={{
            height: '48px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#F7F7F7',
            padding: '0 18px',
            fontSize: '16px',
            outline: 'none',
          }}
        />

        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          rows={5}
          style={{
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#F7F7F7',
            padding: '18px',
            fontSize: '16px',
            resize: 'none',
            outline: 'none',
          }}
        />

        <button
          type="submit"
          style={{
            width: '156px',
            height: '44px',

            borderRadius: '12px',
            border: 'none',

            backgroundColor: '#3470FF',
            color: '#FFFFFF',

            fontSize: '16px',
            fontWeight: 600,

            cursor: 'pointer',

            margin: '0 auto',
            marginTop: '8px',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}