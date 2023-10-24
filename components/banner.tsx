import { cva, type VariantProps } from "class-variance-authority"

interface BannerProps extends VariantProps<typeof bannerVariants>{
    label: string;
}

export const Banner = () => {
    return (
        <div>
            Banner
        </div>
    )
}