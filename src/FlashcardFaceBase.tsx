import React from 'react';

interface Props {
    color?: string;
    className: string;
}

const FlashcardFaceBase: React.FunctionComponent<Props> = React.memo(function FlashcardFaceBase(props) {
    const {children, className, color} = props;
    return (
    <div className={`FlashcardFaceBase${className ? ` ${className}` : ''}`} style={{ backgroundColor: color }}>
        {children}
    </div>
        );
});

export default FlashcardFaceBase;
