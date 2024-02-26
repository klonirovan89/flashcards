import {useGetDecksQuery} from "@/services/base-api";
import {TableComponents} from "@/components/ui/table";

export const Decks = () => {

    const {isLoading, data, error} = useGetDecksQuery()

    if (isLoading) {
        return <>Loading....</>
    }
    if (error) {
        return <>Error: {JSON.stringify(error)}</>
    }
    return (
        <div>
            {/*{JSON.stringify(data)}*/}
            <TableComponents />
        </div>
    );
};
