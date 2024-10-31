REPOSITORY="website"
GITHUB="url = git@github.com:sgrigorov/$REPOSITORY.git"
# GITLAB="url = git@gitlab.com:sgrigorov/$REPOSITORY.git"

FILE='.git/config'

grep -qF -- "$GITHUB" "$FILE" || sed -i "/remote \"origin\"/a \	$GITHUB" "$FILE"
# grep -qF -- "$GITLAB" "$FILE" || sed -i "/remote \"origin\"/a \	$GITLAB" "$FILE"

git config commit.template ~/scripts/$REPOSITORY/.gitmessage
echo " My commit  message" > ~/scripts/$REPOSITORY/.gitmessage
