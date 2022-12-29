# OAuth Client Credentials Action

Acquire OAuth 2.0 client credentials token for API invocation in other job steps.

## Inputs

### `issuer`

**Required** The URI of the token issuer.  Used to discover OpenID well-known endpoints.

### `clientId`

**Required** OAuth 2.0 client identifier

### `clientSecret`

**Required** Client application secret value.

### `scope`

**Required** Scope identifying resources to be accessed with the token

## Outputs

### `access_token`

The OAuth 2.0 access token.

## Example usage

```yaml
uses: actions/oauth-client-credentials-action@v1.0
with:
  issuer: 'https://sts.windows.net/'
```
