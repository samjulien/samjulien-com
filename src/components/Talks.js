import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '../../config/theme'

const labelColor = (type) => {
  let color
  switch (type) {
    case 'Conference':
      color = theme.colors.lightblue
      break
    case 'Podcast':
      color = theme.colors.primary_light
      break
    default:
      color = theme.colors.gray
  }
  return color
}

const TalkType = styled.label`
  background-color: ${(props) => labelColor(props.type)};
  padding: 5px;
  border-radius: 5px;
`

const Talks = () => {
  const data = useStaticQuery(graphql`
    query AirtableQuery {
      allAirtable(sort: { fields: data___Start_Date, order: DESC }) {
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
          <h2>{group.fieldValue}</h2>
          <ul>
            {group.nodes.map((node) => (
              <li
                css={css`
                  list-style-type: none;
                  margin-bottom: 20px;
                `}
              >
                <strong>{node.data.Start_Date}</strong>
                {node.data.Type === 'Conference' && (
                  <strong> - {node.data.End_Date}</strong>
                )}{' '}
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
