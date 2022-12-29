const core = require('@actions/core')
const token = require('./token')

async function run() {
  try {
    const issuerUri = core.getInput('issuer')
    const clientId = core.getInput('clientId')
    const clientSecret = core.getInput('clientSecret')
    const scope = core.getInput('scope')
    
    const accessToken = await token.grant(issuerUri, clientId, clientSecret, scope)
    
    core.setOutput('access_token', accessToken)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
