import { getInput, setOutput, setFailed } from '@actions/core'
import { grant } from './token'

try {
  const issuerUri = getInput('issuer')
  const clientId = getInput('clientId')
  const clientSecret = getInput('clientSecret')
  const scope = getInput('scope')
  
  const accessToken = await grant(issuerUri, clientId, clientSecret, scope)
  
  setOutput('access_token', accessToken)
} catch (error) {
  setFailed(error.message);
}