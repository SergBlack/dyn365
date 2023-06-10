import React, { ChangeEvent, FormEvent, useState } from 'react';
import postCardDataAction, { PostcardInput } from '../../../actions/postcard.action';
import { ITodoViewProps } from '../todo';

export const Form = (props: ITodoViewProps) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const actionInput = new PostcardInput(title, text);
        const data = postCardDataAction(actionInput, props.context.actionContext);
        console.log({ data: data.result?.card });
    };

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} style={{ width: '800px' }}>
            <div className='mt-4 mb-4'>
                <label htmlFor='cardTitle'>Card title</label>
                <input
                    type='text'
                    className='form-control'
                    id='cardTitle'
                    aria-describedby='cardTitle'
                    placeholder='Enter title'
                    value={title}
                    onChange={onTitleChange}
                    autoComplete='false'
                />
            </div>

            <div className='mt-4 mb-4'>
                <label htmlFor='cardText'>Card text</label>
                <input
                    type='text'
                    className='form-control'
                    id='cardText'
                    placeholder='Enter text'
                    value={text}
                    onChange={onTextChange}
                    autoComplete='false'
                />
            </div>

            <div className='mt-4 mb-4'>
                <button type='submit' className='btn btn-primary'>
                    Create card
                </button>
            </div>
        </form>
    );
};
