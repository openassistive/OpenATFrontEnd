#!/bin/bash
curl -o content/post/awesome-assistivetech.md https://raw.githubusercontent.com/openassistive/awesome-assistivetech/master/README.md --silent

DATEF=`date +%Y-%m-%dT%H:%M:%S.000Z`

echo -e "---\ntitle: Awesome Assistivetech\ndate: $DATEF\nurl: awesome-assistivetech\n---\n$(cat content/post/awesome-assistivetech.md)" > content/post/awesome-assistivetech.md