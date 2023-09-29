import { connect } from '@planetscale/database'
import { PSCALE_DB_HOST, PSCALE_DB_PASSWORD, PSCALE_DB_USERNAME } from '$env/static/private'

export const pscale = connect({
  host: PSCALE_DB_HOST,
  username: PSCALE_DB_USERNAME,
  password: PSCALE_DB_PASSWORD
})
