#!/bin/sh

# perl -i -p0e 's/(?<=```shell\n)[\s\S]*(?=\n```)/$t/s' t.md
perl -i -0777 -s -pe's/(?<=```shell\n)[\s\S]*(?=\n```)/$d/s' -- -d="$(tree)" README.md && echo 'Update tree to README.md successfully!'
