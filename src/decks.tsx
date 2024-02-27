import {useGetDecksQuery} from "@/services/base-api";
import {Table} from "./components/ui/newTable/table";

export const Decks = () => {

    const columnsDecks: ColumnsType[] = [
        {id: 'name', label: 'Name'},
        {id: 'cardsCount', label: 'Cards'},
        {id: 'update', label: 'Last update'},
        {id: 'author.name', label: 'Crated by'},
    ]

    const {isLoading, data, error} = useGetDecksQuery()

    if (isLoading) {
        return <>Loading....</>
    }
    if (error) {
        return <>Error: {JSON.stringify(error)}</>
    }
    return (
        <div>
            <Table columns={columnsDecks}/>
        </div>
    );
};

export type ColumnsType = {
    id: string
    label: string
}
