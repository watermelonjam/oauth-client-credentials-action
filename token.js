import { Issuer } from 'openid-client'

export async function grant(issuerUri, clientId, clientSecret, scope) {
  const issuer = await Issuer.discover(issuerUri)
  console.log('Discovered issuer %s: %O', issuer.issuer, issuer.metadata)

  const client = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
    response_types: ['token']
  })

  const grantResponse = await client.grant({
    grant_type: 'client_credentials',
    scope: scope
  })
  console.log('Grant response: %O', grantResponse)

  return grantResponse.access_token
}

