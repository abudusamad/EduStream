import { IconType } from "react-icons";

interface CategoryItemProps {
    label: string;
    value?: string;
    icon?: IconType
}



export const CategoryItem = ({
    label,
    value,
    icon: Icon,
}:CategoryItemProps) => {
    return (
        <div>
            Rotuers
        </div>
    )
}