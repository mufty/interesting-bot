#!/bin/bash
#
# One liner to remove spaces:
# for file in *.png; do [ -f "$file" ] && ( mv "$file" "$(echo $file | sed -e 's/ /_/g')" ); done
#
FILES="$@"
for i in $FILES
do
echo "Processing image $i ..."
`which convert` -thumbnail 350 $i thumbs/$i
done
