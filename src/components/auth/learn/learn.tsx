import { Card } from '@/components/ui/card'
import c from './learn.module.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { BackButton } from '@/components/ui/back-button'
import { Typography } from '@/components/ui/typography'
import { useGetRandomCardsQuery, useUpdateRatingCardsMutation } from '@/pages/cards/api/cards-api'
import { Button } from '@/components/ui/button'
import { useGetDeckByIdQuery } from '@/pages/decks/api/decks-api'

import s from './learn.module.scss'
import { Page } from '@/components/ui/page/page'
import { RateCard, RateType } from '@/features/cards/rateCard'

export const Learn = () => {
  const [showAnswer, setShowAnswer] = useState(false)

  const [rateCard] = useUpdateRatingCardsMutation()

  const params = useParams()

  const id = params.id as string

  const deck = useGetDeckByIdQuery({ id: id })

  const card = useGetRandomCardsQuery({ id })

  const onSubmit = (data: RateType) => {
    rateCard({ cardId: card.data?.id || '', grade: +data.grade })
    setShowAnswer(false)
  }

  return (
    <Page>
      <div className={s.wrapper}>
        <BackButton />
        <Card className={c.card}>
          <Typography as="h1" variant={'h1'} className={s.header}>
            Learn {deck.data?.name}
          </Typography>
          <div className={s.typography}>
            <Typography variant={'subtitle1'}>
              Question: <Typography variant={'body1'}>{card.currentData?.question}</Typography>
            </Typography>
            {card.currentData?.questionImg && (
              <img src={card.currentData?.questionImg} alt="Question Image" className={s.img} />
            )}
            <Typography variant={'subtitle1'} className={s.count}>
              Count of attempts:{' '}
              <Typography variant={'body1'} className={s.count}>
                {card.currentData?.shots}
              </Typography>
            </Typography>
          </div>
          {showAnswer ? (
            <>
              <div className={s.typography}>
                <Typography variant={'subtitle1'}>
                  Answer: <Typography variant={'body1'}>{card.currentData?.answer}</Typography>
                </Typography>
                {card.currentData?.answerImg && (
                  <img src={card.currentData?.answerImg} alt="Question Image" className={s.img} />
                )}
              </div>
              <Typography variant={'subtitle1'} className={s.rate}>
                <b>Rate yourself:</b>
              </Typography>
              <RateCard onSubmit={onSubmit} />
            </>
          ) : (
            <Button
              className={s.button}
              variant={'primary'}
              onClick={() => setShowAnswer(true)}
              fullWidth
            >
              Show Answer
            </Button>
          )}
        </Card>
      </div>
    </Page>
  )
}