REMOTE_DIST=git@github.com:MezzMar/nesquik-types.git

# Updating the package version for the library
PUBLISH_VERSION=$(cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g')

echo "Publish version of package.json ==> "$PUBLISH_VERSION
git checkout -b "updateLib"
git subtree add --prefix=dist $REMOTE_DIST dist
echo "- Show npm version:"
npm --version
echo "- Run the build of the library:"
rm -rf dist
npm run build
echo "- Copy package.json to dist folder:"
cp -R package.json dist
# echo "- Copy README.md to dist folder:"
# cp -R README.md dist
echo "- Add dist folder to staging:"
git add dist -f
echo "- Commit changes:"
git commit -m "update: version v$PUBLISH_VERSION"
echo "- Push commit to library dist:"
git subtree push --prefix=dist $REMOTE_DIST dist
echo "- Split to new branch:"
git subtree split --prefix=dist -b tagLib
git checkout "tagLib"
echo "- Creating tag:"
git tag -a "v$PUBLISH_VERSION" -m ""
echo "- Push tag to library dist:"
git push $REMOTE_DIST "v$PUBLISH_VERSION"
echo "- Done."
