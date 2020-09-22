import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const labelColor = (type) => {
  let color
  switch (type) {
    case 'Conference':
      color = 'bg-blue-400'
      break
    case 'Podcast':
      color = 'bg-purple-100'
      break
    default:
      color = 'bg-gray-400'
  }
  return color
}

const TalkType = ({ type, children }) => {
  return <label className={`${labelColor(type)} rounded p-1`}>{children}</label>
}

const Talks = () => {
  const data = useStaticQuery(graphql`
    query AirtableQuery {
      allAirtable(
        sort: { fields: data___Start_Date, order: DESC }
        filter: { data: { Featured: { eq: true } } }
      ) {
        group(field: data___Year) {
          fieldValue
          nodes {
            data {
              Content
              End_Date(formatString: "MM/DD/YYYY")
              Event_Link
              Event
              Featured
              Location
              Slides
              Start_Date(formatString: "MM/DD/YYYY")
              Talk
              Topic
              Type
              Year
              Second_Presenter
              Second_Presenter_Link
            }
          }
        }
      }
    }
  `)

  const { group } = data.allAirtable
  const sortedGroups = group.sort((groupA, groupB) =>
    groupA.fieldValue > groupB.fieldVaue ? 1 : -1,
  )

  return (
    <>
      {sortedGroups.map((group) => (
        <>
          <h2 className="text-2xl my-4">{group.fieldValue}</h2>
          <ul>
            {group.nodes.map((node) => (
              <li className="list-none mb-8 last:mb-0">
                <span className="inline-block my-2">
                  <strong>{node.data.Start_Date}</strong>
                  {node.data.Type === 'Conference' && (
                    <strong> - {node.data.End_Date}</strong>
                  )}
                </span>{' '}
                <TalkType type={node.data.Type}>{node.data.Type}</TalkType>
                <br />
                {node.data.Event_Link && (
                  <a href={node.data.Event_Link}>{node.data.Event}</a>
                )}
                {!node.data.Event_Link && <>{node.data.Event}</>} -{' '}
                {node.data.Topic}{' '}
                {node.data.Type === 'Conference' && (
                  <>
                    (<a href={node.data.Slides}>Slides</a>,{' '}
                    <a href={node.data.Content}>Video</a>)
                  </>
                )}
                {node.data.Type === 'Podcast' && (
                  <>
                    (<a href={node.data.Content}>Episode</a>)
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  )
}

export default Talks
