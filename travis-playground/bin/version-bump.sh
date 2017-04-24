git config --local user.name "helior"
git config --local user.email "me@helior.info"

npm version patch -m "v%s [skip ci]" && git push https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG} HEAD:master --tags
