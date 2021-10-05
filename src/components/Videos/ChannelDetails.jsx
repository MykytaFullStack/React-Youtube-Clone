import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { TWO_COL_MIN_WIDTH, useIsMobileView } from '../utils/utils'
import moment from 'moment'
import numeral from 'numeral'

// change 'a' & 'an' to '1'
moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '1 few seconds',
    ss: '%d seconds',
    m: '1 minute',
    mm: '%d minutes',
    h: '1 hour',
    hh: '%d hours',
    d: '1 day',
    dd: '%d days',
    w: '1 week',
    ww: '%d weeks',
    M: '1 month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years',
  },
})

export const ChannelDetails = ({
  channelTitle,
  publishedAt,
  viewCount,
  isSearchPage,
}) => {
  const isMobileView = useIsMobileView()

  return (
    <ChannelDetailsContainer style={isMobileView ? { fontSize: '12px' } : null}>
      {/* ChannelName is outside StatsContainer in desktop view */}
      {isMobileView ? null : (
        <ChannelName variant="subtitle2">{channelTitle}</ChannelName>
      )}

      <StatsContainer>
        {/* mobile view landing page */}
        {isMobileView && !isSearchPage && (
          <ChannelName variant="h3">
            {channelTitle} <DotSeparator />
          </ChannelName>
        )}
        {/* no DotSeparator on mobile search result page, channelTitle on its own line */}
        {isMobileView && isSearchPage && (
          <SearchChannelName variant="h3">{channelTitle}</SearchChannelName>
        )}
        <span style={{ marginRight: '4px' }}>
          {numeral(viewCount).format('0.a')} views <DotSeparator />
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </StatsContainer>
    </ChannelDetailsContainer>
  )
}

const ChannelDetailsContainer = styled.div`
  && {
    line-height: 14px;
    color: rgb(96, 96, 96);

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      line-height: 18px;
    }
  }
`

const ChannelName = styled(Typography)`
  && {
    font-size: 12px;
    margin-right: 4px;
    display: inline;

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      font-size: 14px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

const SearchChannelName = styled(ChannelName)`
  && {
    display: block;
  }
`

const StatsContainer = styled.div`
  opacity: 0.6;
  /* letter-spacing: 0.3px; */
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
  }
`

export const DotSeparator = () => {
  return <span>•</span>
}
