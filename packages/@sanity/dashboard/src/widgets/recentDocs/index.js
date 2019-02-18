/* eslint-disable id-length */

import schema from 'part:@sanity/base/schema?'
import React from 'react'
import DataProvider from '../../providers/DataProvider'
import RecentDocsWidget from './components/RecentDocsWidget'

const BUILTIN_TYPES = [
  'any',
  'string',
  'text',
  'datetime',
  'date',
  'boolean',
  'url',
  'email',
  'number',
  'reference',
  'image',
  'file',
  'object',
  'document',
  'array'
]

const query = /* groq */ `
  * [_type in $types] | order(_updatedAt desc) {
    _type,
    _id,
    _updatedAt
  } [0...$limit]
`

function buildParams(limit) {
  const allDocTypes = schema
    .getTypeNames()
    .filter(t => !t.startsWith('sanity.'))
    .filter(t => BUILTIN_TYPES.indexOf(t) === -1)
    .map(t => schema.get(t))
    .filter(t => t.type && t.type.name === 'document')
    .map(t => t.name)

  return {
    types: allDocTypes,
    limit: limit
  }
}

function Root(props) {
  // TODO: use QueryContainer
  return (
    <DataProvider query={query} params={buildParams(props.options.limit)}>
      {result => <RecentDocsWidget {...result} />}
    </DataProvider>
  )
}

export default {
  name: 'recentDocs',
  component: Root
}
