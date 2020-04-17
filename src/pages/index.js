import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import DarkModeToggle from "../components/DarkModeToggle"
import '../styles/style.css'
import '../styles/tachyons.min.css'

const formatDate = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours || 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  const strTime = hours + ':' + minutes + ' ' + ampm
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${strTime}`
}

const flatten = (arr) => {
  let output = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output = output.concat(flatten(arr[i]))
    } else {
      output.push(arr[i])
    }
  }
  return output
}


const getLocalData = () => localStorage.getItem('opened_articles')

export const HomePage = ({ data }) => {
  return (
  
  <div id="root" className="lh-copy mw6 center ph3">
    <header className="tc">
      <h1 className="f1 lh-title mb0">Feedgator</h1>
      <h2 className="cent"><DarkModeToggle/></h2>
      
      <h2 className="f5 fw1">
      A minimalistic Gatsby blog rendering my favourite RSS feeds(Firefox,Github Trending,CSS Tricks)
      </h2>   
    </header>
    
    <main role="main">
      <ul className="list pa0">
        {
          typeof window !== 'undefined'
            ? flatten(Object.keys(data.oneGraph)
              .map(feedTitle => {
                const { rss2Feed: feed } = data.oneGraph[feedTitle]
                return feed.items
                  .map(post => ({
                    source: feed.title,
                    content: post
                  }))
              }))
              .sort(({ content: postA }, { content: postB }) => {
                return postB.pubDate - postA.pubDate
              })
              .map(({ source, content }) => {
                const titleKebab = content.title.split(' ').map(word => word.toLowerCase()).join('-')
                const localData = getLocalData()

                return (
                  <li
                    key={titleKebab}
                    className="pv3 dim"
                  >
                    <a 
                      href={content.link}
                      onClick={() => {
                        if (localData) {
                          const { data: localOpenedArticles } = JSON.parse(localData)

                          if (!localOpenedArticles.includes(titleKebab)) {
                            localStorage.setItem('opened_articles', JSON.stringify({
                              data: [titleKebab, ...localOpenedArticles]
                            }))
                          }
                        } else {
                          localStorage.setItem('opened_articles', JSON.stringify({
                            data: [titleKebab]
                          }))
                        }
                      }}
                      className={`link  ${localData ? JSON.parse(localData).data.includes(titleKebab) ? 'strike' : '' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <small>
                        {formatDate(new Date(content.pubDate))}
                      </small>
                      <h3 className="ma0">{content.title}</h3>
                    </a>
                  </li>
                )
              }) : null
        }
      </ul>
    </main>
    <footer></footer>
  </div>
  )
}
HomePage.propTypes = {
  data: PropTypes.shape({
    oneGraph: PropTypes.objectOf(
      PropTypes.shape({
        rss2Feed: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              link: PropTypes.string.isRequired,
              pubDate: PropTypes.number.isRequired,
              title: PropTypes.string.isRequired
            }).isRequired
          ),
          title: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
}

export default HomePage

export const query = graphql`
  {
    oneGraph {
      cssWizardry: rss {
        rss2Feed(url: "https://csswizardry.com/feed") {
          ...RSSFeedFragment
        }
      }
      github: rss {
        rss2Feed(url: "http://feeds.feedburner.com/gitrepos?fmt=xml") {
          ...RSSFeedFragment
        }
      }
      csstrick: rss {
        rss2Feed(url: "http://feeds.feedburner.com/CssTricks") {
          ...RSSFeedFragment
        }
      }
      mozilla: rss {
        rss2Feed(url: "https://hacks.mozilla.org/feed/") {
          ...RSSFeedFragment
        }
      }
    
    }
  }

  fragment RSSFeedFragment on ONEGRAPH_Rss2Channel {
    title
    items {
      title
      link
      pubDate
    }
  }
`
