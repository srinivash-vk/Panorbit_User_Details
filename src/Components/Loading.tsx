import React from 'react'

export default function Loading() {

    return (
        <>
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    style={{ width: '25%' }}>
                    25%
                </div>
            </div>
        </>

    )
}
