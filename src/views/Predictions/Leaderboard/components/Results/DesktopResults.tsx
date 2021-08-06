import React from 'react'
import { Card, Table, Th } from '@pancakeswap/uikit'
import { PredictionUser } from 'state/types'
import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'
import DesktopRow from './DesktopRow'

interface DesktopResultsProps {
  results: PredictionUser[]
}

const DesktopResults: React.FC<DesktopResultsProps> = ({ results }) => {
  const { t } = useTranslation()

  return (
    <Container mb="24px">
      <Card>
        <Table>
          <thead>
            <tr>
              <Th width="60px">&nbsp;</Th>
              <Th textAlign="left">{t('User')}</Th>
              <Th textAlign="right">{t('Net Winnings (BNB)')}</Th>
              <Th>{t('Win Rate')}</Th>
              <Th textAlign="right">{t('Rounds Won')}</Th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <DesktopRow rank={index + 4} user={result} />
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  )
}

export default DesktopResults