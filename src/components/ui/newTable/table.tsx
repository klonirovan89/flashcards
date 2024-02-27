import s from './table.module.scss'
import {useState} from "react";
import {Typography} from "@/components/ui/typography";
import {Icon} from "@/components/ui/icon/Icon";
import {Button} from "@/components/ui/button";
import {ColumnsType} from "@/decks";
import {useGetDecksQuery} from "@/services/base-api";


export type Deck = {
    author: DeckUser
    id: string
    userId: string
    name: string
    isPrivate: boolean
    cover: string
    created: string
    updated: string
    cardsCount: number
}

export type DeckUser = {
    id: string
    name: string
}

type PropsType = {
    columns: ColumnsType[]
}

export const Table = (props: PropsType) => {
    const {columns} = props;

    const {data} = useGetDecksQuery();

    const [currentColumnId, setCurrentColumnId] = useState<null | string>(null)
    const [currentSortDirection, setCurrentSortDirection] = useState<null | string>(null)
    const [dataList, setDataList] = useState<Deck[]>(data.items)

    console.log(data)

    const handleColumnSort = (columnId: string) => {
        let sortDirection = currentSortDirection

        if (currentColumnId !== columnId) {
            setCurrentColumnId(columnId)
            sortDirection = null
        }

        const nextSortDirection = getNextSortDirection(sortDirection)

        setCurrentSortDirection(nextSortDirection)

        sortDataByColumn(columnId, nextSortDirection)
    }

    const getNextSortDirection = (currentSortDirection: null | string) => {
        switch (currentSortDirection) {
            case null:
                return 'asc'
            case 'asc':
                return 'desc'
            default:
                return null
        }
    }

    const sortDataByColumn = (columnId: string, nextSortDirection: null | string) => {
        if (nextSortDirection === 'asc') {
            const newData = [...dataList].sort((a, b) =>
                a[columnId as keyof typeof a] > b[columnId as keyof typeof a] ? 1 : -1
            )

            setDataList(newData)
        } else if (nextSortDirection === 'desc') {
            const newData = [...dataList].sort((a, b) =>
                b[columnId as keyof typeof a] > a[columnId as keyof typeof a] ? 1 : -1
            )

            setDataList(newData)
        } else {
            setDataList(data.items)
        }
    }

    return (
        <table>
            <thead>
            <tr>
                {columns.map(el => (
                    <th
                        key={el.id}
                        onClick={() => {
                            handleColumnSort(el.id)
                        }}
                    >
                        <div className={s.divHeadCell}>
                            <Typography className={s.typographyStyleHead} variant={'subtitle2'}>
                                {el.label}
                            </Typography>
                            {currentSortDirection !== null && currentColumnId === el.id ? (
                                <div
                                    className={`${s.arrow} ${currentSortDirection === 'desc' ? s.arrowDESC : ''}`}
                                >
                                    <Icon height={'24px'} iconId={'Arrow'} width={'24px'}/>
                                </div>
                            ) : (
                                <div className={s.divArrow}></div>
                            )}
                        </div>
                    </th>
                ))}
                <th className={s.headCellControl}>
                    <div className={s.divHeadCellControl}>
                        <Typography className={s.typographyStyleHeadControl} variant={'subtitle2'}>
                            Control
                        </Typography>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            {dataList.map(el => (
                <tr key={el.id}>
                    <th>
                        <div className={s.divNameBody}>
                            <Typography className={s.typographyStyleBody} variant={'body2'}>
                                {el.name}
                            </Typography>
                        </div>
                    </th>
                    <th>
                        <Typography className={s.typographyStyleBody} variant={'body2'}>
                            {el.cardsCount}
                        </Typography>
                    </th>
                    <th>
                        <Typography className={s.typographyStyleBody} variant={'body2'}>
                            {new Date(el.updated).toLocaleDateString('ru-RU')}
                        </Typography>
                    </th>
                    <th>
                        <Typography className={s.typographyStyleBody} variant={'body2'}>
                            {el.author.name}
                        </Typography>
                    </th>
                    <th>
                        <div className={s.control}>
                            <Button onClick={() => alert('play')} variant={'pure'}>
                                <Icon height={'16px'} iconId={'Learn'} width={'16px'}/>
                            </Button>
                            <Button onClick={() => alert('play')} variant={'pure'}>
                                <Icon height={'16px'} iconId={'Edit'} width={'16px'}/>
                            </Button>
                            <Button onClick={() => alert('play')} variant={'pure'}>
                                <Icon height={'16px'} iconId={'Delete'} width={'16px'}/>
                            </Button>
                        </div>
                    </th>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
