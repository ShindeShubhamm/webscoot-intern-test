import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../../actions/newsActions'
import NewsItem from './NewsItem'
import Spinner from '../Layout/Spinner/Spinner'

const News = ({ news: { news, loading }, getNews }) => {
  useEffect(() => {
    getNews()
    // eslint-disable-next-line
  }, [])

  if (loading || news === null || news === undefined) {
    return <Spinner />
  }

  return (
    <div>
      {!loading && news.length === 0 ? <h2>No results found.</h2> : news.map(n => <NewsItem newsItem={n} key={n.objectID} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps, ({ getNews }))(News)
