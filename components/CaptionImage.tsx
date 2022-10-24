import Image from "next/image";

export default function CaptionImage(props: {image: string, caption: string}) {
    const { image, caption } = props;

    return (
        <div className="flex flex-col gap-2 max-w-md">
            <Image src={image} alt={caption} />
            <p className="text-sm text-center italic">
                {caption}
            </p>
        </div>
    )
}