#!/usr/bin/env bash
# Jordan huang<good5dog5@gmail.com>

set -o errexit
set -o pipefail
set -o nounset


for d in ./*;
do
    if [ "$d" == "./tmp.sh" ]; then
        continue
    fi

    cd "$d"
    count=0
    for f in ./*.jpg;
    do
        # printf "%s %s\n" "$d/$f" "$count"
        mv "$f" "$d"_"$count".jpg
        (( ++count ))
        
    done
    cd -
done
