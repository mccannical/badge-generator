# Badges

Reference for badges or shields for Github projects.

Badge sources:

- [github.com/badges/shields](https://github.com/badges/shields)
- [shields.io](https://shields.io/)

For URL encoding, see this [tool](https://www.urlencoder.org/).

## Use this template

```
[![Use this template](https://img.shields.io/badge/Use_this_template-green.svg)](https://github.com/<USERNAME>/<REPO_NAME>/generate)
```

## Github Actions

```
[![Actions status](https://github.com/<USERNAME>/<REPO_NAME>/workflows/<WORKFLOW_NAME>/badge.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/actions)
```

Replace fields with your own username and repo name. The workflow name must be from the name field inside the file, but URL safe. e.g. `Python%20package.`

## Netlify Deploy

### Sample badge

```
[![Netlify Status](https://api.netlify.com/api/v1/badges/<APP_ID>/deploy-status)](https://app.netlify.com/sites/<APP_NAME>/deploys)
```

Replace with your own app ID and app name.


### Help

For your Netlify app, you can find a status badge under settings. Example URL:

```
https://app.netlify.com/sites/<APP_NAME>/settings/general#status-badges
```

See Netlify's Deploy Badges guide [here](https://www.netlify.com/blog/2019/01/29/sharing-the-love-with-netlify-deployment-badges/).


## Dependencies

```
[![Dependency Foo](https://img.shields.io/badge/Dependency%20-Foo-blue.svg)](https://<foo>)
```

```
[![Bar](https://img.shields.io/badge/Bar-%3E%3D1.2.3-blue.svg)](https://<bar>)
```


## Made with

Format: The badge code has the prefix, the package name and then the color. Each separated by a hyphen. The prefix and the package name can have spaces, but these must be URL encoded as `%20`.

```
[![Made with <TOOL>](https://img.shields.io/badge/Made%20with-<TOOL>-blue.svg)](<TOOL_URL>)
```

```
[![Made with Github Pages](https://img.shields.io/badge/Made%20with-Github%20Pages-blue.svg)](https://pages.github.com/)

[![Made with Python](https://img.shields.io/badge/Made%20with-Python-blue.svg)](https://python.org)

[![Made with Node](https://img.shields.io/badge/Made%20with-Node-blue.svg)](https://nodejs.org)

[![Made with Jekyll](https://img.shields.io/badge/Made%20with-Jekyll-blue.svg)](https://jekyllrb.com)

[![Made with Ruby](https://img.shields.io/badge/Made%20with-Ruby-blue.svg)](https://ruby-lang.org)
```


## Tag

```
[![GitHub tag](https://img.shields.io/github/tag/<USER_NAME>/<APP_NAME>.svg)](https://GitHub.com/<USER_NAME>/<REPO_NAME>/tags/)
```

## License

```
[![<LICENSE_TYPE> license](https://img.shields.io/badge/License-<LICENSE_TYPE>-blue.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/blob/master/LICENSE)
```

```
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/<USER_NAME>/<REPO_NAME>/blob/master/LICENSE)
```