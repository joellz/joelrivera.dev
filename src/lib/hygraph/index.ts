import { GraphQLClient } from 'graphql-request'
import { HYGRAPH_CMS_URL } from '$env/static/private'

export const hygraph = new GraphQLClient(HYGRAPH_CMS_URL)
