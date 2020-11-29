# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
echo 'seanyager.com' > CNAME

git init
git add -A
git commit -m 'deploy'


cd -

# RUN sh deploy.sh to build website for GitHub