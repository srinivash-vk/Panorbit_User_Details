import { useEffect } from 'react';

/**
 *
 * @param {*} ref - Ref of your parent div
 * @param {*} callback - Callback which can be used to change your maintained state in your component
 */
const DetectOutsideClick = (ref: any, callback: any) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
};

export default DetectOutsideClick;
