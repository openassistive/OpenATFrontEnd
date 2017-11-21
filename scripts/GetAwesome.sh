#!/bin/bash
curl -o content/post/awesome-assitivetech.md https://raw.githubusercontent.com/openassistive/awesome-assitivetech/master/README.md --silent

DATEF=`date +%Y-%m-%dT%H:%M:%S+000Z`

echo -e "---\ntitle: Awesome Assitivetech\ndate: $DATEF\nurl: awesome-assitivetech\n---\n$(cat content/post/awesome-assitivetech.md)" > content/post/awesome-assitivetech.md