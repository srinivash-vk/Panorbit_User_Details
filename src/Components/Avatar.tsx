export default function Avatar({ size, imageURL }: { size: 'xs-small' | 'small' | 'medium' | 'large', imageURL: string }) {

    let defaultImageSize = 'w-10 h-10'
    let sizeWidth = 'w-10 h-10'
    if (size === 'xs-small') {
    }
    else if (size === 'small') {
        defaultImageSize = 'w-14 h-14' // x-small & small
        sizeWidth = 'w-14 h-14'
    }
    else if (size === 'medium') {
        defaultImageSize = 'w-32 h-32' // x-small & small
        sizeWidth = 'w-32 h-32'
    }
    else if (size === 'large') {
        defaultImageSize = 'w-48 h-48' // x-small & small
        sizeWidth = 'w-48 h-48'
    }

    return (
        <>
            <div className={`object-fit bg-center justify-center items-center  bg-purple-200 rounded-full ${sizeWidth}`}>
                <img src={imageURL} alt="img" className={`rounded-full  ${defaultImageSize} `} />
            </div>
        </>
    )
}
