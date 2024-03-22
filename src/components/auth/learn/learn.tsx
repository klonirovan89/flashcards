import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Page } from '@/components/ui/page/page'
import { Typography } from '@/components/ui/typography'
import { RateCard, RateType } from '@/features/cards/rateCard'
import { useGetRandomCardsQuery, useUpdateRatingCardsMutation } from '@/pages/cards/api/cards-api'
import { useGetDeckByIdQuery } from '@/pages/decks/api/decks-api'

import s from './learn.module.scss'

export const Learn = () => {
  const [showAnswer, setShowAnswer] = useState(false)

  const [rateCard] = useUpdateRatingCardsMutation()

  const params = useParams()

  const id = params.id as string

  const deck = useGetDeckByIdQuery({ id: id })

  const card = useGetRandomCardsQuery({ id: id })

  const onSubmit = async (data: RateType) => {
    await rateCard({ cardId: card.data?.id || '', grade: +data.grade }).unwrap()
    setShowAnswer(false)
  }

  return (
    <Page>
      <div className={s.wrapper}>
        <BackButton />
        <Card className={s.card}>
          <Typography as={'h1'} className={s.header} variant={'h1'}>
            Learn {deck.data?.name}
          </Typography>
          <div className={s.question}>
            <Typography className={s.typography} variant={'subtitle1'}>
              Question: <Typography variant={'body1'}>{card.currentData?.question}</Typography>
            </Typography>
            {card.currentData?.questionImg && (
              <img alt={'Question Image'} className={s.img} src={card.currentData?.questionImg} />
            )}
            <Typography className={s.count} variant={'subtitle1'}>
              Count of attempts:{' '}
              <Typography className={s.count} variant={'body1'}>
                {card.currentData?.shots}
              </Typography>
            </Typography>
          </div>
          {showAnswer ? (
            <>
              <div className={s.answer}>
                <Typography className={s.typography} variant={'subtitle1'}>
                  Answer: <Typography variant={'body1'}>{card.currentData?.answer}</Typography>
                </Typography>
                {card.currentData?.answerImg && (
                  <img alt={'Question Image'} className={s.img} src={card.currentData?.answerImg} />
                )}
              </div>
              <Typography className={s.rate} variant={'subtitle1'}>
                <b>Rate yourself:</b>
              </Typography>
              <RateCard onSubmit={onSubmit} />
            </>
          ) : (
            <Button
              className={s.button}
              fullWidth
              onClick={() => setShowAnswer(true)}
              variant={'primary'}
            >
              Show Answer
            </Button>
          )}
        </Card>
      </div>
    </Page>
  )
}
