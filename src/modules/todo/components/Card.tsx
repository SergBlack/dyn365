import * as React from 'react';

type Props = {
    title: string;
    text: string;
    src: string;
};

export const Card = ({ title, text, src }: Props) => {
    return (
        <div className='card' style={{ width: '18rem', margin: '0 8px 8px 0' }}>
            <img src={src} className='card-img-top' alt='beauty_pic' />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{text}</p>
                <a href='https://picsum.photos/1024/1080' className='btn btn-primary'>
                    Open
                </a>
            </div>
        </div>
    );
};
