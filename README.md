# @pipas/dev-auth

## Description
`@pipas/dev-auth` is a package that simplifies the authentication process for the development environment. It provides a command-line interface (CLI) to authenticate users by sending their credentials to a specified endpoint and retrieving an authentication token.

## Installation
To install the package, run:
```bash
npm install @pipas/dev-auth
```

## Usage
The package provides a CLI tool that can be executed with the following command:
```bash
npx @pipas/dev-auth --endpoint <URL> --login <username> --password <password> --login-fieldname <loginField> --password-fieldname <passwordField> --token-fieldname <tokenField>
```

### Options
- `--endpoint` or `-e`: The API endpoint to send the authentication request to.
- `--login` or `-l`: The login username/email.
- `--password` or `-p`: The password for authentication.
- `--login-fieldname`: The field name used for the login in the request body.
- `--password-fieldname`: The field name used for the password in the request body.
- `--token-fieldname`: The field name of the token in the response.

### Example
```bash
npx dev-auth --endpoint https://api.example.com/auth --login myusername --password mypassword --login-fieldname username --password-fieldname password --token-fieldname token
```

This command sends a POST request to the specified endpoint with the login and password fields, and retrieves the authentication token from the response.
