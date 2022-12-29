import { getInput, setOutput, setFailed } from '@actions/core'
import { context } from '@actions/github'
import { Issuer } from 'openid-client'

try {
  const issuerUri = getInput('issuer')
  const clientId = getInput('clientId')
  const clientSecret = getInput('clientSecret')
  const scope = getInput('scope')
  
  const issuer = await Issuer.discover(issuerUri)
  console.log('Discovered issuer %s %O', issuer.issuer, issuer.metadata)
  
  const client = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
    response_types: ['token']
  })
  
  const  grantResponse = await client.grant({
      grant_type: 'client_credentials',
      scope: scope
  })
  const accessToken = grantResponse.access_token
  
  setOutput('access_tokne', accessToken)

  const payload = JSON.stringify(context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  setFailed(error.message);
}