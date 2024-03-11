import {useState} from 'react'

import {Page} from '@/components/ui/page/page'
import {ColumnsType, Sort, Table} from '@/components/ui/table'
import {Typography} from '@/components/ui/typography'
import {DeckRow} from '@/features/decks/decksTable/deckRow'
import {useMeQuery} from '@/pages/auth/api/auth-api'
import {useGetDecksQuery} from '@/pages/decks/api/decks-api'
import {Deck} from '@/pages/decks/api/decks-types'
import {CreateControlBlock} from "@/features/decks/createControlBlock/createControlBlock";
import {FilterControlBlock} from "@/features/decks/filterControlBlock/filterControlBlock";
import {useDebounce} from "@/common/hooks";

export const Decks = () => {

    const columnsDecks: ColumnsType[] = [
        {key: 'name', sortable: true, title: 'Name'},
        {key: 'cardsCount', sortable: true, title: 'Cards'},
        {key: 'updated', sortable: true, title: 'Last update'},
        {key: 'author.name', sortable: true, title: 'Created by'},
        {key: 'actions', sortable: false, title: ''},
    ]
    const listValues = [
        {disabled: false, text: 'My Cards', value: 'My Cards'},
        {disabled: false, text: 'All Cards', value: 'All Cards'},
    ]

    const [sort, setSort] = useState<Sort>(null)
    const [searchName, setSearchName] = useState<string>('')
    const [tabSwitcherValue, setTabSwitcherValue] = useState<string>(listValues[1].value)


    let debouncedSearchName = useDebounce(searchName)

    const {data} = useMeQuery()

    let decks = useGetDecksQuery({
        orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
        name: debouncedSearchName,
        authorId: tabSwitcherValue === 'My Cards' ? data?.id : undefined,
    })

    if (decks.isLoading) {
        return <>Loading....</>
    }
    if (decks.error) {
        return <>Error: {JSON.stringify(decks.error)}</>
    }

    return (
        <Page>
            <CreateControlBlock/>
            <FilterControlBlock setSearchName={setSearchName} tabSwitcherValue={tabSwitcherValue} setTabSwitcherValue={setTabSwitcherValue}
                                listValues={listValues}/>
            {decks.data ? (
                <Table columns={columnsDecks} onSort={setSort} sort={sort}>
                    {decks.data.items.map((el: Deck) => (
                        <DeckRow authUserId={data?.id} deck={el} key={el.id}/>
                    ))}
                </Table>
            ) : (
                <Typography variant={'body1'}>No cards.</Typography>
            )}
        </Page>
    )
}
