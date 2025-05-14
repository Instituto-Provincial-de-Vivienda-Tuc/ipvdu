import { Skeleton } from "./ui/skeleton";

type SkeletonBigSchemaProps = {
    grid: number
}


export const SkeletonBigSchema = (props: SkeletonBigSchemaProps) => {
    const { grid } = props;
    return (
        Array.from({ length: grid }).map((_, index) => (
            <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
                <Skeleton className="h-[200px] w-[1000px] roundex-xl" />
                <div className="space-y-3">
                    <Skeleton className="h-8 w-[1000px]" />
                    <Skeleton className="h-8 w-[1000px]" />
                </div>
            </div>
        ))
    )
}
